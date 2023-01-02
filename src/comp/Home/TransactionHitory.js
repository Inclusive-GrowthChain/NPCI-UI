import { useEffect, useState } from 'react';
import useStore from "../../store";

import { fetchTransactions } from '../../apis/apis';
import getTypeClr from '../../helper/getTypeClr';

import { ReactComponent as Print } from '../../assets/svg/files/print.svg';
import CertificateAsPdf from './Modals/CertificateAsPdf';
import Loader from '../Common/Loader';

function TransactionHitory() {
  const email = useStore(state => state.email)

  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onSuccess = (payload) => {
      const timestamp = Date.now();
      console.log(new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp));
      setTransactions(payload.message)
      setLoading(false)
    }

    fetchTransactions({ email }, onSuccess)
  }, [email])

  const updateOpen = () => setOpen(p => !p)

  if (loading) return <Loader wrapperCls='h-[calc(100vh-64px)]' />

  return (
    <section className="dfc h-[calc(100vh-64px)] border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
      <h1 className='py-2 text-2xl text-center border-b border-[rgba(255,255,255,.6)]'>
        Transactions History
      </h1>

      <div className="scroll-y overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="w-24 pl-8 pr-4 py-2">Date</td>
              <td className="w-28 px-4 py-2">ISIN</td>
              <td className="w-28 px-4 py-2">Transaction Id</td>
              <td className="w-56 px-4 py-2">Issuer Name</td>
              <td className="w-32 px-4 py-2">TransactionType</td>
              <td className="w-32 px-4 py-2">No. of Tokens</td>
              <td className="w-24 px-4 py-2">Amount</td>
              <td className="w-24 px-4 py-2">Status</td>
              <td className="w-24 px-4 py-2 text-center">Certificate</td>
            </tr>
          </thead>

          <tbody>
            {
              transactions.map((li, i) => (
                <tr
                  key={li._id}
                  className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group"
                >
                  <td className="pl-8 pr-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.maturitydate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.isin} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.BuyOrderId || li.SellOrderId} </td>
                  <td className="px-4 py-2 text-sm font-medium opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.issuerName} </td>
                  <td className={`px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 ${getTypeClr(li.transactionType)}`}> {li.transactionType} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.NumOfToken} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.TradeValue} </td>
                  <td className={`px-4 py-2 text-xs opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-emerald-400`}>
                    {
                      li.Purchased ? "Purchased" : li.isAuthorized ? "Authorized" : li.isProcessed ? "Processed" : "Failure"
                    }
                  </td>
                  <td className='px-4 py-2 text-sm border-b border-[rgba(255,255,255,.3)]'>
                    {
                      <Print
                        className="mx-auto fill-white opacity-70 hover:opacity-100"
                        onClick={updateOpen}
                      />
                    }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <CertificateAsPdf
        isOpen={open}
        closeModal={updateOpen}
      />
    </section>
  )
}

export default TransactionHitory