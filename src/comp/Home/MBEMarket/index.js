import { useMemo, useState } from 'react';
import live from "../../../constants/live";
// import useStore from '../../store';

import FiltersBy from './FiltersBy';
import Buy from '../Modals/Buy';

function MBEMarket() {
  // const role = useStore(state => state.role)
  const [securityCode, setSecurityCode] = useState("")
  const [issuerName, setIssuerName] = useState("")
  const [open, setOpen] = useState("")

  const data = useMemo(() => {
    let cloned = [...live]

    if (securityCode) {
      cloned = cloned.filter(c => c.securityCode.toLowerCase().match(securityCode))
    }

    if (issuerName) {
      cloned = cloned.filter(c => c.issuerName.toLowerCase().match(issuerName))
    }

    return cloned
  }, [issuerName, securityCode])

  const updateOpen = id => setOpen(id)

  const closeModal = () => setOpen("")

  return (
    <section className="dfc h-[calc(100vh-64px)] border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
      <div className="df py-2 px-6 border-b border-[rgba(255,255,255,.3)]">
        <FiltersBy
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
          issuerName={issuerName}
          setIssuerName={setIssuerName}
        />
        <h1 className="flex-auto text-lg font-medium text-center">MBE Market</h1>

        <div className="df">
          <span className="w-4 h-4 rounded-full bg-emerald-400"></span>
          <p>Market Open</p>
        </div>
      </div>

      <div className="scroll-y overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="w-36 px-4 py-2">ISIN</td>
              <td className="w-52 px-4 py-2">Issuer Name</td>
              <td className="w-32 px-4 py-2">Coupon Rate</td>
              <td className="w-28 px-4 py-2">Face Value</td>
              <td className="w-24 px-4 py-2">LTP</td>
              <td className="w-80 px-4 py-2">Credit Rating</td>
              <td className="w-32 px-4 py-2 text-center">Maturity Date</td>
              <td className="w-28 px-4 py-2 text-center">Bid Price</td>
              <td className="w-28 px-4 py-2 text-center">Ask Price</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map(li => (
                <tr
                  key={li.id}
                  className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group"
                  onClick={() => updateOpen(li.id)}
                >
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.securityCode} </td>
                  <td className="px-4 py-2 text-sm font-medium opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.issuerName} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.couponRate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.faceValue} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.ltp} </td>
                  <td className="px-4 py-2 text-xs opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.creditRating} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.maturityDate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                    <button className="w-20 px-3 py-1.5 rounded border border-emerald-600">
                      {li.bidPrice}
                    </button>
                  </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                    <button className="w-20 px-3 py-1.5 rounded border border-yellow-600">
                      {li.askPrice}
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      {
        (open || open === 0) &&
        <Buy
          isOpen
          data={live.find(li => li.id === open)}
          closeModal={closeModal}
        />
      }
    </section>
  )
}

export default MBEMarket