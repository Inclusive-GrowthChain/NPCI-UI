import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import investorList from '../../../constants/investorList';
import TransactionHistoryModal from '../Modals/TransactionHistory';
import TokenHoldingsModal from '../Modals/TokenHoldings';
import BondHoldingsModal from '../Modals/BondHoldings';
import SearchBorPopup from '../../Home/SearchBorPopup';
import UserInfoModal from '../Modals/UserInfo';
import Input from '../../Home/common/Input';

function ListOfInvestors() {
  const [userName, setUserName] = useState("")
  const [mbeId, setMbeId] = useState("")
  const [open, setOpen] = useState({ state: "", data: {} })
  const { state: tokenDetails } = useLocation()

  const data = useMemo(() => {
    let cloned = [...investorList]

    if (mbeId) {
      cloned = cloned.filter(c => c.mbeId.toLowerCase().match(mbeId))
    }

    if (userName) {
      cloned = cloned.filter(c => c.name.toLowerCase().match(userName))
    }

    return cloned
  }, [mbeId, userName])

  const updateOpen = (state, data) => setOpen({ state, data })

  const closeModal = () => setOpen({ state: "", data: {} })

  return (
    <section className="dfc h-full border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
      <div className='df gap-8 p-4 border-b border-[rgba(255,255,255,.3)]'>
        {
          tokenDetails ?
            <>
              <Input
                lable='Security Code'
                value={tokenDetails.securityCode}
                inputCls="bg-slate-800 text-white border-none"
                lableCls='w-auto mb-0'
              />
              <Input
                lable='Issuer Name'
                value={tokenDetails.issuerName}
                inputCls="bg-slate-800 text-white border-none"
                lableCls='w-auto mb-0'
              />
              <Input
                lable='No Of Token'
                value={tokenDetails.noOfToken}
                inputCls="bg-slate-800 text-white border-none"
                lableCls='w-auto mb-0'
              />
            </>
            : <h1 className='mx-auto text-lg font-medium text-center'>List of Investors</h1>
        }
      </div>

      <div className="scroll-y overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="w-32 px-4 py-2">Sl.No.</td>
              <td className="w-36 px-4 py-2">
                <div className='df group'>
                  <p>MBE Id</p>
                  <SearchBorPopup
                    value={mbeId}
                    onChange={e => setMbeId(e.target.value)}
                  />
                </div>
              </td>
              <td className="w-52 px-4 py-2">
                <div className='df group'>
                  <p>Investor Name</p>
                  <SearchBorPopup
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                  />
                </div>
              </td>
              <td className="w-32 px-4 py-2 text-center">Bond holdings</td>
              <td className="w-32 px-4 py-2 text-center">Token holdings</td>
              <td className="w-28 px-4 py-2 text-center">Transactions History</td>
            </tr>
          </thead>

          <tbody>
            {
              data
                .filter((l, i) => tokenDetails ? i < 5 : true)
                .map((li, i) => (
                  <tr
                    key={li.mbeId}
                    className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group"
                  >
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {i} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.mbeId} </td>
                    <td className="px-4 py-2 text-sm font-medium opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100">
                      <p
                        className='cursor-pointer hover:text-emerald-200'
                        onClick={() => updateOpen("UserInfo", li)}
                      >
                        {li.name}
                      </p>
                    </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100">
                      <button
                        className="block w-16 mx-auto rounded border border-emerald-600 hover:bg-emerald-600"
                        onClick={() => updateOpen("BondHoldings", li)}
                      >
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100">
                      <button
                        className="block w-16 mx-auto rounded border border-emerald-600 hover:bg-emerald-600"
                        onClick={() => updateOpen("TokenHoldings", li)}
                      >
                        View
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100">
                      <button
                        className="block w-16 mx-auto rounded border border-emerald-600 hover:bg-emerald-600"
                        onClick={() => updateOpen("TransactionHistory", li)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>

      {
        open.state === "UserInfo" &&
        <UserInfoModal
          isOpen
          data={open.data}
          closeModal={closeModal}
        />
      }

      {
        open.state === "BondHoldings" &&
        <BondHoldingsModal
          isOpen
          data={open.data}
          closeModal={closeModal}
        />
      }

      {
        open.state === "TokenHoldings" &&
        <TokenHoldingsModal
          isOpen
          data={open.data}
          closeModal={closeModal}
        />
      }

      {
        open.state === "TransactionHistory" &&
        <TransactionHistoryModal
          isOpen
          data={open.data}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default ListOfInvestors