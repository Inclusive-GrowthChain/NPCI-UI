import { useState } from 'react';
import Modal from '../../UIComp/Modal';
import Input from '../common/Input';

// If executed “Trade executed, Visit transaction history for more details”.
// If pending “Transaction pending, Visit transaction history for more details

function Sell({ isOpen, data, closeModal }) {
  const [isTradeOpen, setIsTradeOpen] = useState(false)

  const [numberOfTokens, setNumberOfTokens] = useState(null)
  const [sellPricePerToken, setSellPricePerToken] = useState(null)
  const [total, setTotal] = useState(null)

  const onClick = () => {
    console.log(numberOfTokens);
    console.log(sellPricePerToken);
    const total = Number(numberOfTokens) * Number(sellPricePerToken)
    setTotal(total)
    if (!isTradeOpen) return setIsTradeOpen(true)
  }

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="dfc xs:min-w-[400px] max-h-[80vh]"
      title='Bond Details'
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
            lable='Currency'
            value="Rupee"
          />
          <Input
            lable='Total Number of Tokens'
            value={data.noOfToken}
            lableCls="w-auto"
            wrapperCls='grid-col-full'
          />

          <div>
            <label className='mb-1 font-medium' htmlFor="">Number of Tokens</label>
            <input type="text" onChange={(e) => {
              setNumberOfTokens(e.target.value)
            }} />
          </div>

          <div>
            <label className='mb-1 font-medium' htmlFor="">Ask price (per token)</label>
            <input type="text" onChange={(e) => {
              setSellPricePerToken(e.target.value)
            }} />
          </div>
        </div>

        {
          isTradeOpen &&
          <div className='grid grid-cols-3 gap-4 mb-4'>
            <div>
              <label className='mb-1 font-medium' htmlFor="">Quantity</label>
              <input type="text" value={numberOfTokens} readOnly />
            </div>

            <div>
              <label className='mb-1 font-medium' htmlFor="">Price Per Token (LTP)</label>
              <input type="text" value={sellPricePerToken} readOnly />
            </div>

            <div>
              <label className='mb-1 font-medium' htmlFor="">Total</label>
              <input type="text" value={total} readOnly />
            </div>
          </div>
        }
      </div>

      <button
        className='block w-1/2 mx-auto rounded-md text-white bg-emerald-400 hover:bg-emerald-700'
        onClick={onClick}
      >
        {isTradeOpen ? "Execute Trade" : "Sell"}
      </button>
    </Modal>
  )
}

export default Sell