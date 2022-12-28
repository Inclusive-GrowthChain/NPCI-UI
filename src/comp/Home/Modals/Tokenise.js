import { useState } from 'react';
import Modal from '../../UIComp/Modal';
import Input from '../common/Input';

// If Tokenized “Tokenized , Visit transaction history & My token holdings for more details”.
// If pending “Transaction pending, Visit transaction history for more details”.

function Tokenise({ isOpen, data, closeModal }) {
  const [noOfLots, setNoOfLots] = useState(0)

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="dfc xs:min-w-[400px] max-h-[80vh]"
      title='Tokenize your bond'
    >
      <div className='scroll-y'>
        <div className='grid md:grid-cols-2 gap-4 mb-4'>
          <Input
            lable='ISIN'
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
            lable='LTP'
            value={data.ltp}
          />
          <Input
            lable='Maturity Date'
            value={data.maturityDate}
          />
          <Input
            lable='No. of lots'
            value="1"
          />
          <Input
            lable='Currency'
            value="Rupee"
          />

          <div className='grid-col-full'>
            <Input
              lable='Security Description'
              value={data.securityDescription}
              inputCls="w-full max-w-none"
              lableCls='w-auto'
            />
          </div>
        </div>

        <div className='grid grid-cols-3 gap-4 mb-4'>
          <div>
            <label className='mb-1 font-medium' htmlFor="">No. of lots</label>
            <input
              type="number"
              value={noOfLots || ""}
              onChange={e => setNoOfLots(e.target.value || 0)}
              className="no-number-arrows"
            />
          </div>

          <div>
            <label className='mb-1 font-medium' htmlFor="">Number of Tokens</label>
            <input type="text" value={noOfLots * 200000 || ""} disabled onChange={() => { }} />
          </div>

          <div>
            <label className='mb-1 font-medium' htmlFor="">Face value</label>
            <input type="text" defaultValue="1" disabled />
          </div>
        </div>
      </div>

      <button className='block w-1/2 mx-auto rounded-md text-white bg-emerald-400 hover:bg-emerald-700'>
        Tokenize
      </button>
    </Modal>
  )
}

export default Tokenise