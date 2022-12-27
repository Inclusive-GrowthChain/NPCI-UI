import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../UIComp/Modal';
import Input from '../common/Input';
import useStore from '../../../store';

// If executed “Trade executed, Visit transaction history for more details
// If pending “Transaction pending, Visit transaction history for more details
// If wallet is not having enough money “You don’t have enough balance to make the payment, Add money to your wallet”
// Show Add Money (Button) (Lead to CBDC interface to add money into wallet)

function Buy({ isOpen, data, closeModal }) {
  const isLoggedIn = useStore(state => state.isLoggedIn)
  const role = useStore(state => state.role)

  const [isTradeOpen, setIsTradeOpen] = useState(false)
  const navigate = useNavigate()

  const [numberOfTokens, setNumberOfTokens] = useState(null)
  const [bidPricePerToken, setBidPricePerToken] = useState(null)
  const [total, setTotal] = useState(null)

  const onClick = () => {
    const total = Number(numberOfTokens) * Number(bidPricePerToken)
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
            value={data.askPrice}
          />
          <Input
            lable='Maturity Date'
            value={data.maturityDate}
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

          {
            role === "investor" ? <>
              <div>
                <label className='mb-1 font-medium' htmlFor="">Number of Tokens</label>
                <input type="text" onChange={(e) => {
                  setNumberOfTokens(e.target.value)
                }} />
              </div>

              <div>
                <label className='mb-1 font-medium' htmlFor="">Bid price (Per token)</label>
                <input type="text" onChange={(e) => {
                  setBidPricePerToken(e.target.value)
                }} />
              </div>
            </> : <>
              <Input
                lable='Number of Tokens'
                value="500"
                lableCls='w-auto'
                inputCls='ml-2'
              />

              <div className='dc gap-8 grid-col-full'>
                <button
                  className='rounded-md text-white bg-slate-600 hover:bg-slate-700'
                  onClick={() => navigate(`/${role}/investors-list`, { state: data })}
                >
                  List of Investors
                </button>

                <button
                  className='rounded-md text-white bg-slate-600 hover:bg-slate-700'
                  onClick={() => navigate(`/${role}/transactions-hitory`, { state: data })}
                >
                  Transactions List
                </button>
              </div>
            </>
          }
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
              <input type="text" value={bidPricePerToken} readOnly />
            </div>

            <div>
              <label className='mb-1 font-medium' htmlFor="">Total</label>
              <input type="text" value={total} readOnly />
            </div>
          </div>
        }
      </div>

      {
        isTradeOpen &&
        <div className='mb-1 text-xs text-slate-700'>
          Click here to make payment from your CBDC wallet
        </div>
      }

      {
        role === "investor" && isLoggedIn &&
        <button
          className='block w-1/2 mx-auto rounded-md text-white bg-emerald-400 hover:bg-emerald-700'
          onClick={onClick}
        >
          {isTradeOpen ? "Execute Trade" : "Buy"}
        </button>
      }
    </Modal>
  )
}

export default Buy