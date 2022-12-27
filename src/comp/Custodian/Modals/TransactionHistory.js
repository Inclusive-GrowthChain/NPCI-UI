import Modal from '../../UIComp/Modal';
import { ReactComponent as Print } from '../../../assets/svg/files/print.svg';
import live from '../../../constants/live';
import getTypeClr from '../../../helper/getTypeClr';
import useStore from '../../../store';

function TransactionHistory({ isOpen, data, closeModal }) {
  const role = useStore(state => state.role)
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="dfc max-h-[80vh] overflow-y-hidden"
      title={`Transactions History of ${role === "mbe" ? data.mbeId : data.name}`}
    >
      <div className='scroll-y'>
        <table className="w-full">
          <thead>
            <tr className="sticky top-0 text-sm font-medium bg-slate-100 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="pl-8 pr-4 py-2">Date</td>
              <td className="px-4 py-2">ISIN</td>
              <td className="px-4 py-2">Issuer Name</td>
              <td className="px-4 py-2">TransactionType</td>
              <td className="px-4 py-2">Number of Tokens</td>
              <td className="px-4 py-2">Amount</td>
              <td className="px-4 py-2">Status</td>
              <td className="px-4 py-2">Amount</td>
              <td className="w-32 px-4 py-2 text-center">Certificate</td>
            </tr>
          </thead>

          <tbody>
            {
              live
                .filter((li, i) => data.arr.includes(i))
                .map((li, i) => (
                  <tr
                    key={li.id}
                    className="even:bg-slate-50 hover:bg-slate-200 cursor-pointer group"
                  >
                    <td className="pl-8 pr-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.maturityDate} </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.securityCode} </td>
                    <td className="px-4 py-2 text-sm font-medium opacity-80 group-hover:opacity-100"> {li.issuerName} </td>
                    <td className={`px-4 py-2 text-sm opacity-80 group-hover:opacity-100 ${getTypeClr(li.transactionType)}`}> {li.transactionType} </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.noOfToken / 100} </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.askPrice} </td>
                    <td className={`px-4 py-2 text-xs opacity-80 group-hover:opacity-100 ${i % 5 === 0 ? "text-red-400" : "text-emerald-400"}`}>
                      {
                        i % 5 === 0
                          ? "Failure"
                          : "Success"
                      }
                    </td>
                    <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.noOfToken * 35} </td>
                    <td className='px-4 py-2 text-sm'>
                      {
                        i % 5 !== 0 &&
                        <Print
                          className="mx-auto fill-slate-900 opacity-70 hover:opacity-100"
                        />
                      }
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default TransactionHistory