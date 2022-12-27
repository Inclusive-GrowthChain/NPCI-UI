import { useState } from 'react';
import { offset, autoUpdate, useFloating } from '@floating-ui/react-dom-interactions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ReactComponent as Cal } from '../../../assets/svg/common/calender.svg';
import { ReactComponent as Search } from '../../../assets/svg/common/seach.svg';

function FilterByDate({ setDateFilter }) {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [open, setOpen] = useState(false)

  const { x, y, reference, floating, strategy } = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    middleware: [
      offset({ mainAxis: 5 }),
    ],
    whileElementsMounted: autoUpdate
  })

  const onChange = ([start, end]) => {
    setStartDate(start)
    setEndDate(end)

    if (start && end) {
      setDateFilter({ start, end })
      setOpen(false)
    }
  }

  const clear = () => {
    setStartDate(null)
    setEndDate(null)
    setOpen(false)
    setDateFilter(null)
  }

  return (
    <>
      <div
        className='text-[11px] px-1.5 py-0.5 bg-slate-700 rounded'
      >
        From
      </div>

      <div
        className="range-picker animate-enter bg-slate-800 z-10 rounded-lg shadow-sm shadow-slate-300 origin-top-left"
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          startDate={startDate}
          dateFormat="dd-MM-yyyy"
        />
      </div>

      <div
        className='text-[11px] px-1.5 py-0.5 bg-slate-700 rounded'
      >
        To
      </div>

      <div
        className="range-picker animate-enter bg-slate-800 z-10 rounded-lg shadow-sm shadow-slate-300 origin-top-left"
      >
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          endDate={endDate}
          dateFormat="dd-MM-yyyy"
        />
      </div>

      <button
        ref={reference}
        onClick={() => setOpen(p => !p)}
        className="p-0"
      >
        <Search className={`fill-white ${false ? "opacity-100" : "opacity-70"}`} />
      </button>
    </>
  )
}

export default FilterByDate