import Modal from '../../UIComp/Modal';
import nsdl from '../../../assets/img/nsdl.png';

function CertificateAsPdf({ isOpen, data = {}, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="w-11/12 sm:w-4/5"
      title='Certificate'
    >
      <img className='mx-auto' src={nsdl} alt="" />
      <div className='df justify-between mb-4 text-sm'>
        <p>MBE Id: <span className='font-medium'>{data.MbeId}</span></p>
        <p>Date: <span className='font-medium'>{Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(Date.parse(data?.createdAt))}</span></p>
      </div>

      <table className='w-full text-sm'>
        <thead>
          <tr className='bg-slate-100'>
            <td className='px-4 py-2'>Transaction Id</td>
            <td className='px-4 py-2'>Security Code</td>
            <td className='w-60 px-4 py-2'>Issuer Name</td>
            <td className='px-4 py-2'>Type of Transaction</td>
            <td className='px-4 py-2'>Number of token</td>
            <td className='px-4 py-2'>Amount</td>
          </tr>
        </thead>

        <tbody>
          <tr className='even:bg-slate-50'>
            <td className='px-4 py-2'>{data?.OrderId || data?.BuyOrderId || data?.SellOrderId || data?._id || ""}</td>
            <td className='px-4 py-2'>{data?.Isin || ""}</td>
            <td className='px-4 py-2'>{data?.IssuerName || ""}</td>
            <td className='px-4 py-2'>Trade</td>
            <td className='px-4 py-2'>{data?.NumOfToken || ""}</td>
            <td className='px-4 py-2'>{Number(data?.NumOfToken || 0) * Number(data?.Price || 0)}</td>
          </tr>
        </tbody>
      </table>
    </Modal>
  )
}

export default CertificateAsPdf