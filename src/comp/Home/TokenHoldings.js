import { useEffect, useState } from 'react';
import useStore from "../../store";

import { fetchTokenHoldings } from '../../apis/apis';

import Detokenzise from './Modals/Detokenzise';
import Loader from '../Common/Loader';
import Sell from './Modals/Sell';

function TokenHoldings() {
  const email = useStore(state => state.email)
  const token = useStore(state => state.token)

  const [tokenHoldings, setTokenHoldings] = useState([])
  const [loading, setLoading] = useState(true)
  const [type, setType] = useState("")
  const [open, setOpen] = useState("")

  useEffect(() => {
    const onSuccess = (payload) => {
      setTokenHoldings(payload.message)
      setLoading(false)
    }

    fetchTokenHoldings({ "MbeId": email }, token, onSuccess)
  }, [email])

  const updateOpen = (id, category) => {
    setOpen(id)
    setType(category)
  }

  const closeModal = () => {
    setOpen("")
    setType('')
  }

  if (loading) return <Loader wrapperCls='h-[calc(100vh-64px)]' />

  return (
    <section className="dfc gap-0 h-[calc(100vh-64px)] overflow-y-hidden">
      <h1 className='py-2 text-2xl text-center border-b border-[rgba(255,255,255,.6)]'>
        My Token Holdings
      </h1>

      <div className="scroll-y overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-200 shadow-[0_1px_3px_0_rgba(0,0,0,.1)] z-1">
              <td className="w-36 px-4 py-2">ISIN</td>
              <td className="w-52 px-4 py-2">Issuer Name</td>
              <td className="w-32 px-4 py-2">Coupon Rate</td>
              <td className="w-28 px-4 py-2">Face Value</td>
              <td className="w-24 px-4 py-2">Ltp</td>
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
              tokenHoldings
                .filter((a, i) => (tokenHoldings[i].IsTokenized === true && tokenHoldings[i].TokenizedLot !== "0"))
                .map(li => (
                  <tr
                    key={li._id}
                    className="text-sm even:bg-slate-50 hover:bg-slate-100 cursor-pointer"
                    onClick={() => updateOpen(li.Isin, "Sell")}
                  >
                    <td className="px-4 py-2"> {li.Isin} </td>
                    <td className="px-4 py-2 font-medium"> {li.IssuerName} </td>
                    <td className="px-4 py-2"> {li.CouponRate} </td>
                    <td className="px-4 py-2"> {li.FaceValue} </td>
                    <td className="px-4 py-2"> {li.Ltp} </td>
                    <td className="px-4 py-2text-xs"> {li.CreditRating} </td>
                    <td className="px-4 py-2 text-center"> {li.MaturityDate} </td>
                    <td className="px-4 py-2 text-center">
                      <button className="w-20 px-3 py-1.5 rounded border border-emerald-600">
                        {li.bidPrice || 0}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button className="w-20 px-3 py-1.5 rounded border border-yellow-600">
                        {li.askPrice || 0}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-center"> {li.TotalTokenQty} </td>
                    <td className="px-4 py-2 text-center"> {li.TokenizedLot} </td>
                    <td className="px-4 py-2 text-center"> {li.purchasePrice || "-"} </td>
                    <td className="px-4 py-2 text-center"> {li.currentPrice || "-"} </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        className='px-3 py-1.5 rounded border border-red-500 hover:bg-red-500 hover:text-white'
                        onClick={e => {
                          e.stopPropagation()
                          updateOpen(li.Isin, "Detokenzise")
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
          data={tokenHoldings.find(li => li.Isin === open)}
          closeModal={closeModal}
        />
      }

      {
        type === 'Detokenzise' &&
        <Detokenzise
          isOpen
          data={tokenHoldings.find(li => li.Isin === open)}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default TokenHoldings