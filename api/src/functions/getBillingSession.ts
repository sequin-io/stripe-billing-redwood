import type { APIGatewayEvent, Context } from 'aws-lambda'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 404 }
  }

  const { id, returnUrl } = JSON.parse(event.body) || {}

  const r = await fetch('https://api.stripe.com/v1/billing_portal/sessions', {
    method: 'post',
    body: `customer=${id}&return_url=${encodeURIComponent(returnUrl)}`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(
        process.env.STRIPE_KEY + ':',
        'utf8'
      ).toString('base64')}`,
    },
  })

  const j = await r.json()

  if (r.status !== 200) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ok: false,
      }),
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ok: true, url: j.url }),
  }
}
