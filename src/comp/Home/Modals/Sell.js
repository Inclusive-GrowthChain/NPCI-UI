import Modal, { ModalHeader } from '../../UIComp/Modal';
import Input from '../common/Input';

function Sell({ isOpen, data, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="dfc xs:min-w-[400px] max-h-[80vh]"
    >
      <ModalHeader
        title='Bond Details'
        closeModal={closeModal}
      />

      <div className='scroll-y'>
        <div className='grid md:grid-cols-2 gap-4'>
          <Input
            lable='Security Code'
            value={data.securityCode}
          />
          <Input
            lable='Issuer Name'
            value={data.issuerName}
          />
          <Input
            lable='Coupon Rate'
            value={data.couponRate}
          />
          <Input
            lable='Price'
            value={data.askPrice}
          />
          <Input
            lable='Maturity Date'
            value={data.maturityDate}
          />
          <Input
            lable='Yield'
            value={data.yield}
          />
          <Input
            lable='Number of Tokens'
            value={data.volumn / data.faceValue}
          />
          <Input
            lable='Currency'
            value="Rupee"
          />
        </div>

        <div className='grid md:grid-cols-2 gap-4 my-4'>
          <div>
            <label className='mb-1 font-medium' htmlFor="">Number of Tokens</label>
            <input type="text" />
          </div>

          <div>
            <label className='mb-1 font-medium' htmlFor="">Token value</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <button className='block w-1/2 mx-auto rounded-md text-white bg-emerald-400 hover:bg-emerald-700'>
        Sell
      </button>
    </Modal>
  )
}

export default Sell