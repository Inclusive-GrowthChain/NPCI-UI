import { useState } from 'react';
import useStore from "../../../store";

import { sellOrder } from '../../../apis/apis';

import Modal from '../../UIComp/Modal';
import Input from '../common/Input';

// If executed “Trade executed, Visit transaction history for more details”.
// If pending “Transaction pending, Visit transaction history for more details

function Sell({ isOpen, data, closeModal }) {
  const email = useStore(state => state.email)

  const [isTradeOpen, setIsTradeOpen] = useState(false)

  // const [numberOfTokens, setNumberOfTokens] = useState(null)
  // const [sellPricePerToken, setSellPricePerToken] = useState(null)
  // const [total, setTotal] = useState(null)

  const [details, setDetails] = useState({
    "orderId": "S_ORDER" + data.isin,
    "mbeId": email,
    "isin": data.isin
  })

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onClick = () => {
    if (!isTradeOpen) return setIsTradeOpen(true)
    else {
      console.log(details)
      sellOrder(details, onSuccess)
    }
  }

  const onSuccess = () => {
    console.log("Sell order added")
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
            value={data.isin}
          />
          <Input
            lable='Issuer Name'
            value={data.issuerName}
          />
          <Input
            lable='Coupon Rate'
            value={data.couponrate}
          />
          <Input
            lable='LTP'
            value={data.ltp}
          />
          <Input
            lable='Maturity Date'
            value={data.maturitydate}
          />
          <Input
            lable='Currency'
            value="Rupee"
          />
          <Input
            lable='Total Number of Tokens'
            value={data.TotalTokenQty}
            lableCls="w-auto"
            wrapperCls='grid-col-full'
          />

          <div>
            <label className='mb-1 font-medium' htmlFor="">Number of Tokens</label>
            <input type="text" onChange={onChange} name="NumOfToken" />
          </div>

          <div>
            <label className='mb-1 font-medium' htmlFor="">Ask price (per token)</label>
            <input type="text" onChange={onChange} name="Price" />
          </div>
        </div>

        {
          isTradeOpen &&
          <div className='grid grid-cols-3 gap-4 mb-4'>
            <div>
              <label className='mb-1 font-medium' htmlFor="">Quantity</label>
              <input type="text" value={details.NumOfToken} readOnly />
            </div>

            <div>
              <label className='mb-1 font-medium' htmlFor="">Price Per Token (LTP)</label>
              <input type="text" value={details.Price} readOnly />
            </div>

            <div>
              <label className='mb-1 font-medium' htmlFor="">Total</label>
              <input type="text" value={Number(details.NumOfToken) * Number(details.Price)} readOnly />
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