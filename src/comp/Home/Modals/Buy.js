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

  const onClick = () => {
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
            lable='Currency'
            value="Rupee"
          />

          <div></div>

          <select>
            <option value="">Bond Details</option>
          </select>

          <select disabled>
            <option value="">Price Details</option>
          </select>

          <div>
            <label className='mb-1 font-medium' htmlFor="">Number of Tokens</label>
            <input
              type="text"
              defaultValue={role === "custodian" ? "500" : ""}
              disabled={role === "custodian"}
            />
          </div>

          {
            role === "investor" &&
            <div>
              <label className='mb-1 font-medium' htmlFor="">Token value</label>
              <input type="text" />
            </div>
          }

          {
            role === "custodian" &&
            <div className='dc'>
              <button
                className='w-full rounded-md text-white bg-emerald-400 hover:bg-emerald-700'
                onClick={() => navigate("/custodian/investors-list")}
              >
                List of Investors
              </button>
            </div>
          }
        </div>

        {
          isTradeOpen &&
          <div className='grid grid-cols-3 gap-4 mb-4'>
            <div>
              <label className='mb-1 font-medium' htmlFor="">Quantity</label>
              <input type="text" />
            </div>

            <div>
              <label className='mb-1 font-medium' htmlFor="">Price Per Token (LTP)</label>
              <input type="text" />
            </div>

            <div>
              <label className='mb-1 font-medium' htmlFor="">Price (LTP)</label>
              <input type="text" />
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