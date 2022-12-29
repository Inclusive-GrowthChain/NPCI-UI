import { useEffect, useState } from 'react';
import { fetchTokenHoldings } from '../../apis/apis';

import live from "../../constants/live";
import Detokenzise from './Modals/Detokenzise';
import Sell from './Modals/Sell';
import useStore from "../../store";

function TokenHoldings() {
  const [type, setType] = useState("")
  const [open, setOpen] = useState("")
  const [loading, setLoading] = useState(false)
  const email = useStore(state => state.email)
  const [tokenHoldings, setTokenHoldings] = useState([])

  const updateOpen = (id, category) => {
    setOpen(id)
    setType(category)
  }

  const closeModal = () => {
    setOpen("")
    setType('')
  }

  useEffect(() => {
    setLoading(true)

    const onSuccess = (payload) => {
      setTokenHoldings(payload.message)
      setLoading(false)
    }

    fetchTokenHoldings({ "mbeId": email }, onSuccess)
  }, [])

  return (
    <section className="dfc h-[calc(100vh-64px)] border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
      <h1 className='py-2 text-2xl text-center border-b border-[rgba(255,255,255,.6)]'>
        My Token Holdings
      </h1>

      <div className="scroll-y overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="w-36 px-4 py-2">ISIN</td>
              <td className="w-52 px-4 py-2">Issuer Name</td>
              <td className="w-32 px-4 py-2">Coupon Rate</td>
              <td className="w-28 px-4 py-2">Face Value</td>
              <td className="w-24 px-4 py-2">LTP</td>
              <td className="w-72 px-4 py-2">Credit Rating</td>
              <td className="w-32 px-4 py-2 text-center">Maturity Date</td>
              <td className="w-28 px-4 py-2 text-center">Bid Price</td>
              <td className="w-28 px-4 py-2 text-center">Ask Price</td>
              <td className="w-32 px-4 py-2 text-center">No. of Tokens</td>
              <td className="w-32 px-4 py-2 text-center">No. of Lots</td>
              <td className="w-32 px-4 py-2 text-center">Purchase Price</td>
              <td className="w-32 px-4 py-2 text-center">Current Price</td>
              <td className="w-32 px-4 py-2"></td>
            </tr>
          </thead>

          <tbody>
            {
              // live
              tokenHoldings
                .filter((a, i) => tokenHoldings[i].isTokenized === true)
                .map(li => (
                  <tr
                    key={li.id}
                    className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group"
                    onClick={() => updateOpen(li.id, "Sell")}
                  >
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.isin} </td>
                    <td className="px-4 py-2 text-sm font-medium opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.issuerName} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.couponrate} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.faceValue} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.ltp} </td>
                    <td className="px-4 py-2 text-xs opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.creditrating} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.maturitydate} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                      <button className="w-20 px-3 py-1.5 rounded border border-emerald-600">
                        {li.bidPrice || 0}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                      <button className="w-20 px-3 py-1.5 rounded border border-yellow-600">
                        {li.askPrice || 0}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.TotalTokenQty} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.LotQty} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.purchasePrice || "-"} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.currentPrice || "-"} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                      <button
                        className='px-3 py-1.5 rounded border border-red-500 hover:bg-red-500 hover:text-white'
                        onClick={e => {
                          e.stopPropagation()
                          updateOpen(li.id, "Detokenzise")
                        }}
                      >
                        Detokenize
                      </button>
                    </td>

                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>

      {
        type === 'Sell' &&
        <Sell
          isOpen
          data={tokenHoldings.find(li => li.id === open)}
          closeModal={closeModal}
        />
      }

      {
        type === 'Detokenzise' &&
        <Detokenzise
          isOpen
          data={tokenHoldings.find(li => li.id === open)}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default TokenHoldings