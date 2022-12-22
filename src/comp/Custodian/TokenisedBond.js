import { useState } from 'react';
import live from "../../constants/live";
import InvestorsList from './Modals/InvestorsList';
import UserInfoModal from './Modals/UserInfo';

function TokenisedBond() {
  const [open, setOpen] = useState({ state: "", data: {} })

  const updateOpen = (state, data = {}) => setOpen({ state, data })
  const closeModal = () => setOpen({ state: "", data: {} })

  return (
    <section className="dfc h-full border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
      <h1 className='py-2 text-2xl text-center border-b border-[rgba(255,255,255,.6)]'>
        Tokenised Bonds
      </h1>

      <div className="scroll-y overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="w-36 px-4 py-2">ISIN</td>
              <td className="w-52 px-4 py-2">Issuer Name</td>
              <td className="w-32 px-4 py-2">Coupon Rate</td>
              <td className="w-32 px-4 py-2 text-center">Maturity Date</td>
              <td className="w-28 px-4 py-2 text-center">No. of Tokens</td>
              <td className="w-24 px-4 py-2">LTP</td>
              <td className="w-28 px-4 py-2">Current Price</td>
              <td className="w-28 px-4 py-2">List of Investors</td>
              <td className="w-40 px-4 py-2 text-center">Number of tokens detokenized</td>
              <td className="w-28 px-4 py-2 text-center">Detokenized Value</td>
            </tr>
          </thead>

          <tbody>
            {
              live.map(li => (
                <tr
                  key={li.id}
                  className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group"
                >
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.securityCode} </td>
                  <td className="px-4 py-2 text-sm font-medium opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.issuerName} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.couponRate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.maturityDate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.volumn / li.faceValue} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.ltp} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.askPrice} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                    <button
                      className="w-16 rounded border border-emerald-600 hover:bg-emerald-600"
                      onClick={() => updateOpen("InvestorsList", li)}
                    >
                      View
                    </button>
                  </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                    {Math.floor(li.volumn / 789) * 200}
                  </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                    {Math.floor(li.volumn / 676) * 150}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {
        open.state === "InvestorsList" &&
        <InvestorsList
          isOpen
          title={open.data?.issuerName || "SHRIRAM TRANSPORT"}
          updateOpen={updateOpen}
          closeModal={closeModal}
        />
      }

      {
        open.state === "UserInfo" &&
        <UserInfoModal
          isOpen
          data={open.data}
          closeModal={() => updateOpen("InvestorsList", open.data)}
        />
      }
    </section>
  )
}

export default TokenisedBond