import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ReactComponent as Search } from '../../../assets/svg/common/seach.svg';

function FilterByDate({ setDateFilter }) {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [searched, setSearched] = useState(null)

  const search = () => {
    setSearched(true)
    setDateFilter({ startDate, endDate })
  }

  const clear = () => {
    setSearched(false)
    setStartDate(null)
    setEndDate(null)
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
        onClick={() => search()}
        className="p-0"
      >
        <Search className={`fill-white ${false ? "opacity-100" : "opacity-70"}`} />
      </button>

      {
        searched &&
        <button
          className='text-[11px] px-1.5 py-0.5 bg-slate-700 rounded hover:bg-slate-800'
          onClick={clear}
        >
          Clear Date Filter
        </button>
      }
    </>
  )
}

export default FilterByDate