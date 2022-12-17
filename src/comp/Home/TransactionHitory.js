import live from "../../constants/live";

function getTypeClr(type) {
  if (type === "Tokenized") return "text-green-400"
  if (type === "Detokenized") return "text-red-400"
  if (type === "Sale") return "text-orange-400"
  return "text-emerald-400"
}

function TransactionHitory() {
  return (
    <section className="dfc h-full border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
      <h1 className='py-2 text-2xl text-center border-b border-[rgba(255,255,255,.6)]'>
        Transaction Hitory
      </h1>

      <div className="scroll-y overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="pl-8 pr-4 py-2">Date</td>
              <td className="px-4 py-2">Security Code</td>
              <td className="px-4 py-2">Issuer Name</td>
              <td className="px-4 py-2">TransactionType</td>
              <td className="px-4 py-2">Number of Tokens</td>
              <td className="px-4 py-2">Price</td>
              <td className="px-4 py-2">Status</td>
            </tr>
          </thead>

          <tbody>
            {
              live.map((li, i) => (
                <tr
                  key={li.id}
                  className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group"
                >
                  <td className="pl-8 pr-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.maturityDate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.securityCode} </td>
                  <td className="px-4 py-2 text-sm font-medium opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.issuerName} </td>
                  <td className={`px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 ${getTypeClr(li.transactionType)}`}> {li.transactionType} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.noOfToken / 100} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.askPrice} </td>
                  <td className={`px-4 py-2 text-xs opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 ${i % 5 === 0 ? "text-red-400" : "text-emerald-400"}`}>
                    {
                      i % 5 === 0
                        ? "Failure"
                        : "Success"
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default TransactionHitory