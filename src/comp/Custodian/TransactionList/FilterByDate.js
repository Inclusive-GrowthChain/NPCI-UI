import { useState } from 'react';
import { offset, autoUpdate, useFloating } from '@floating-ui/react-dom-interactions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ReactComponent as Cal } from '../../../assets/svg/common/calender.svg';

function FilterByDate({ setDateFilter }) {
  const [startDate, setStartDate] = useState(new Date())
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
    setStartDate(new Date())
    setEndDate(null)
    setOpen(false)
    setDateFilter(null)
  }

  return (
    <>
      <button
        ref={reference}
        onClick={() => setOpen(p => !p)}
        className="p-0"
      >
        <Cal className={`fill-white ${false ? "opacity-100" : "opacity-70"}`} />
      </button>

      {
        endDate &&
        <button
          className='text-[11px] px-1.5 py-0.5 bg-slate-700 rounded hover:bg-slate-800'
          onClick={clear}
        >
          Clear Date Filter
        </button>
      }

      {
        open &&
        <div
          ref={floating}
          style={{
            position: strategy,
            top: y ?? "",
            left: x ?? "",
          }}
          className="range-picker animate-enter p-2 bg-slate-800 z-10 rounded-lg shadow-sm shadow-slate-300 origin-top-left"
        >
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd-MM-yyyy"
          />
        </div>
      }
    </>
  )
}

export default FilterByDate