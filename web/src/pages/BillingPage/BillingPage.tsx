import CustomerCell from 'src/components/CustomerCell'

type BillingPageProps = {
  id: string
}

const BillingPage = ({ id }: BillingPageProps) => {
  return (
    <div className="container mx-auto">
      <div className="w-full max-w-3xl mx-auto">
        <header className="py-8 text-center border-b">
          <h1 className="font-extrabold text-2xl ">☦ DataExMachina</h1>
          <p className="italic">Your data. Here to save the day.</p>
        </header>
        <main className="my-8">
          <p className="text-xl pl-4">Hello!</p>
          <CustomerCell id={id} />
        </main>
      </div>
    </div>
  )
}

export default BillingPage
