import { useMemo, useState } from 'react';
import { ReactComponent as Filter } from '../../../assets/svg/common/filter.svg';
import { DropDownWrapper } from '../../UIComp/DropDown';
import FilterByDate from '../TransactionList/FilterByDate';
import live from '../../../constants/report';

function Report() {
  const [dateFilter, setDateFilter] = useState(null)
  const [type, setType] = useState("")

  const data = useMemo(() => {
    let cloned = [...live]

    if (dateFilter) {
      let start = new Date(dateFilter.start).getTime()
      let end = new Date(dateFilter.end).getTime()
      cloned = cloned.filter(l => {
        let currDate = new Date(l.maturityDate).getTime()
        return currDate >= start && currDate <= end
      })
    }

    if (type) {
      cloned = cloned.filter(l => l.transactionType.match(type))
    }

    return cloned
  }, [type, dateFilter])

  const updateType = val => setType(p => p === val ? "" : val)

  return (
    <section className="dfc h-full border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
      <div className='df gap-4 p-4 border-b border-[rgba(255,255,255,.3)] relative'>
        <DropDownWrapper
          list={["List of Tokenized Bonds", "List of Detokenized Bonds", "Trade Report"]}
          onClk={updateType}
          active={type}
          activeCls="bg-slate-600 text-white"
          rootCls="p-0"
          needArrow
        >
          <Filter className={`fill-white ${type ? "opacity-100" : "opacity-70"}`} />
        </DropDownWrapper>

        <FilterByDate
          setDateFilter={setDateFilter}
        />

        <h1 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-medium text-center'>
          Report
        </h1>
      </div>

      <div className="scroll-y overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
              <td className="w-32 px-4 py-2">Trade Date</td>
              <td className="w-36 px-4 py-2">ISIN</td>
              <td className="w-52 px-4 py-2">Issuer Name</td>
              <td className="w-32 px-4 py-2">Coupon Rate</td>
              <td className="w-32 px-4 py-2">Maturity Date</td>
              <td className="w-28 px-4 py-2">No. of Tokens</td>
              <td className="w-28 px-4 py-2">Trade Value</td>
            </tr>
          </thead>

          <tbody>
            {
              data.map(li => (
                <tr
                  key={li.id}
                  className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group"
                >
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.maturityDate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.securityCode} </td>
                  <td className="px-4 py-2 text-sm font-medium opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.issuerName} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.couponRate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.maturityDate} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.volumn / 1000} </td>
                  <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.volumn} </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Report