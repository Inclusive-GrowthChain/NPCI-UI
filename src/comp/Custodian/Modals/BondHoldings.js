import Modal from '../../UIComp/Modal';
import live from '../../../constants/live';

function BondHoldings({ isOpen, data, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="dfc h-[80vh] overflow-y-hidden"
      title={`Bond Holdings of ${data.name}`}
    >
      <div className='scroll-y'>
        <table className='w-full'>
          <thead>
            <tr className="sticky top-0 text-sm font-medium bg-slate-100 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="w-36 px-4 py-2">Security Code</td>
              <td className="w-60 px-4 py-2">Issuer Name</td>
              <td className="w-32 px-4 py-2 text-center">Maturity Date</td>
              <td className="w-32 px-4 py-2">Coupon Rate</td>
              <td className="w-28 px-4 py-2">Face Value</td>
              <td className="w-36 px-4 py-2">Purchase Price</td>
              <td className="w-80 px-4 py-2">Current Value</td>
            </tr>
          </thead>

          <tbody>
            {
              live.map(li => (
                <tr
                  key={li.id}
                  className="even:bg-slate-50 hover:bg-slate-200 cursor-pointer group"
                >
                  <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.securityCode} </td>
                  <td className="px-4 py-2 text-sm font-medium opacity-80 group-hover:opacity-100"> {li.issuerName} </td>
                  <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100 text-center"> {li.maturityDate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.couponRate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.faceValue} </td>
                  <td className="px-4 py-2 text-sm opacity-80 group-hover:opacity-100"> {li.askPrice} </td>
                  <td className="px-4 py-2 text-xs opacity-80 group-hover:opacity-100"> {li.bidPrice} </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default BondHoldings