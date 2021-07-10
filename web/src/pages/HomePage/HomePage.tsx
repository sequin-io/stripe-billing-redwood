import CustomersCell from 'src/components/CustomersCell'

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <main className="my-8">
        <div className="relative overflow-hidden mb-8">
          <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-purple-50 to-purple-100 p-10">
            <p className="mb-4 text-sm text-purple-600">
              Select a customer to view their billing portal.
            </p>
            <CustomersCell />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
