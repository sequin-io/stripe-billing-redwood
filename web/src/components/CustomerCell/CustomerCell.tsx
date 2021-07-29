import { format, parseISO } from 'date-fns'

import type { FindCustomerQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useState } from 'react'

export const QUERY = gql`
  query FindCustomerQuery($id: String!) {
    customer: customer(id: $id) {
      id
      email
      subscriptions: subscription {
        id
        currentPeriodEnd: current_period_end
        lastInvoice: latest_invoice {
          id
          total
        }
      }
      paymentMethod: default_payment_method {
        id
        cardBrand: card_brand
        cardLast4: card_last4
      }
      charges: charge {
        id
        created
        receiptUrl: receipt_url
        paymentMethodDetailsType: payment_method_details_type
        paymentMethod: payment_method {
          id
          cardBrand: card_brand
          cardLast4: card_last4
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ customer }: CellSuccessProps<FindCustomerQuery>) => {
  const [showReceiptCount, setShowReceiptCount] = useState(3)

  const subscription = customer.subscriptions && customer.subscriptions[0]
  const charges = customer.charges.filter((c) => c.receiptUrl !== null)

  const incrReceiptCount = () => setShowReceiptCount((s) => s + 10)

  const handleUpdatePaymentMethodClick = async () => {
    const res = await fetch(`/.redwood/functions/getBillingSession`, {
      method: 'post',
      body: JSON.stringify({
        id: customer.id,
        returnUrl: window.location.href,
      }),
      headers: { 'content-type': 'application/json' },
    })
    const j = await res.json()
    if (!j.ok) {
      alert('Something went wrong fetching the Stripe billing portal link')
    } else {
      window.location.href = j.url
    }
  }

  return (
    <>
      <p className="mt-4 p-6 shadow border-t rounded-md text-sm">
        {subscription && subscription.lastInvoice ? (
          <>
            Your DataExMachina subscription is{' '}
            <b>
              {formatAmount(subscription.lastInvoice.total)} per month billed
              month
            </b>
            , and will renew on{' '}
            <b>
              {format(parseISO(subscription.currentPeriodEnd), 'MMMM do, y')}
            </b>
            .
          </>
        ) : (
          <>No subscriptions setup yet.</>
        )}
      </p>

      <div className="mt-4 p-6 shadow border-t rounded-md">
        <h2 className="text-xl font-semibold">
          <span aria-label="" role="img">
            💳
          </span>{' '}
          Subscription
        </h2>
        <table className="w-full table-fixed mt-4">
          <tr className="border-b h-12">
            <td className="font-semibold">Payment Method</td>
            <td>
              {customer.paymentMethod ? (
                <>
                  {capitalize(customer.paymentMethod.cardBrand)}{' '}
                  <span className="font-mono">
                    *{customer.paymentMethod.cardLast4}
                  </span>
                </>
              ) : (
                <>No payment method on file yet</>
              )}{' '}
            </td>
            <td className="text-right">
              <button
                onClick={handleUpdatePaymentMethodClick}
                className="text-blue-500 cursor-pointer"
              >
                Update
              </button>
            </td>
          </tr>
          <tr className="border-b h-12">
            <td className="font-semibold">Plan</td>
            <td>DataExMachina Monthly</td>
          </tr>
          <tr className="h-12">
            <td className="font-semibold">Account Owner</td>
            <td>{customer.email}</td>
          </tr>
        </table>
      </div>
      <div className="mt-4 p-6 shadow border-t rounded-md">
        <h2 className="text-xl font-semibold">
          <span role="img" aria-label="">
            🧾
          </span>{' '}
          Receipts
        </h2>
        {charges ? (
          <>
            <table className="w-full table-fixed mt-4">
              {charges.slice(0, showReceiptCount).map((charge) => (
                <tr key={charge.id} className="border-b h-12">
                  <td>{format(parseISO(charge.created), 'MMMM do, y')}</td>
                  <td>
                    {charge.paymentMethodDetailsType ==
                    'ach_credit_transfer' ? (
                      'ACH bank transfer'
                    ) : (
                      <>
                        {capitalize(charge.paymentMethod.cardBrand)}{' '}
                        <span className="font-mono">
                          *{charge.paymentMethod.cardLast4}
                        </span>
                      </>
                    )}
                  </td>
                  <td className="text-right">
                    <a
                      href={charge.receiptUrl}
                      rel="noreferrer"
                      target="_blank"
                      className="text-blue-500 cursor-pointer"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </table>
            {showReceiptCount < charges.length && (
              <button
                onClick={incrReceiptCount}
                className="text-blue-500 cursor-pointer py-2 w-full text-center font-bold mt-4 bg-blue-50 rounded"
              >
                See More
              </button>
            )}
          </>
        ) : (
          <>No charges found.</>
        )}
      </div>
    </>
  )
}

// Helper functions
const capitalize = (n: string) => n.charAt(0).toUpperCase() + n.slice(1)
const formatAmount = (cents: number) => `$${Math.trunc(cents / 100)}`
