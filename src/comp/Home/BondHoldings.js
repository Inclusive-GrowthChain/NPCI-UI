import { useState } from 'react';

import live from "../../constants/live";
import Tokenise from './Modals/Tokenise';

function BondHoldings() {
  const [open, setOpen] = useState("")

  const updateOpen = id => setOpen(id)

  const closeModal = () => setOpen("")

  return (
    <section className="dfc h-full border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
      <h1 className='py-2 text-2xl text-center border-b border-[rgba(255,255,255,.6)]'>
        My Bond Holdings
      </h1>

      <div className="scroll-y overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="w-36 px-4 py-2">ISIN</td>
              <td className="w-52 px-4 py-2">Issuer Name</td>
              <td className="w-32 px-4 py-2">Coupon Rate</td>
              <td className="w-72 px-4 py-2">Credit Rating</td>
              <td className="w-32 px-4 py-2 text-center">Maturity Date</td>
              <td className="w-28 px-4 py-2 text-center">Face Value</td>
              <td className="w-24 px-4 py-2 text-center">Current Price</td>
              <td className="w-32 px-4 py-2"></td>
            </tr>
          </thead>

          <tbody>
            {
              live
                .filter((a, i) => [1, 4, 7, 11, 6].includes(i))
                .map(li => (
                  <tr
                    key={li.id}
                    className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group"
                    onClick={() => updateOpen(li.id)}
                  >
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.securityCode} </td>
                    <td className="px-4 py-2 text-sm font-medium opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.issuerName} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.couponRate} </td>
                    <td className="px-4 py-2 text-xs opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.creditRating} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.maturityDate} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.faceValue} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.volumn} </td>
                    <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                      <button className='px-3 py-1.5 rounded border border-green-500'>
                        Tokenize
                      </button>
                    </td>

                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>

      {
        open &&
        <Tokenise
          isOpen
          data={live.find(li => li.id === open)}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default BondHoldings