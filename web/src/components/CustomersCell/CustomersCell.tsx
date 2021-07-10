import { Link, routes } from '@redwoodjs/router'

import type { CustomersQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query CustomersQuery {
    customers {
      id
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ customers }: CellSuccessProps<CustomersQuery>) => {
  return (
    <ul className="list-disc list-inside text-purple-800">
      {customers.map(({ id, email }) => (
        <li key={id}>
          <Link to={routes.billing({ id })}>{email}</Link>
        </li>
      ))}
    </ul>
  )
}
