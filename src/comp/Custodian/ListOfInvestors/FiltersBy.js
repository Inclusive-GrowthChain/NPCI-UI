import { useState } from 'react';
import { offset, autoUpdate, useFloating } from '@floating-ui/react-dom-interactions';
import { ReactComponent as Filter } from '../../../assets/svg/common/filter.svg';

function FiltersBy({
  mbeId,
  setMbeId,
  userName,
  setUserName,
}) {
  const [open, setOpen] = useState(false)

  const { x, y, reference, floating, strategy } = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement: 'bottom-end',
    middleware: [
      offset({ mainAxis: 5 }),
    ],
    whileElementsMounted: autoUpdate
  })

  const clear = () => {
    setUserName("")
    setMbeId("")
    setOpen(false)
  }

  return (
    <div className='relative'>
      <button
        ref={reference}
        onClick={() => setOpen(p => !p)}
        className="p-0"
      >
        <Filter className={`fill-white ${mbeId || userName ? "opacity-100" : "opacity-70"}`} />
      </button>

      {
        open &&
        <div
          ref={floating}
          style={{
            position: strategy,
            top: y ?? "",
            left: x ?? "",
          }}
          className="animate-enter w-60 p-2 bg-slate-800 z-10 rounded-lg shadow-sm shadow-slate-300 origin-top-left"
        >
          <div className='df justify-between mb-2'>
            <p className='text-sm font-medium'>Filter by</p>
            <button
              className='px-2 py-0.5 text-xs bg-slate-600 hover:bg-slate-700'
              onClick={clear}
            >
              Clear
            </button>
          </div>

          <div className='my-1.5'>
            <label
              className='mb-1 text-[13px] font-medium'
              htmlFor="Security_Code_filter"
            >
              MBE Id
            </label>
            <input
              className='px-1.5 py-1 bg-slate-700 text-white border-none'
              type="text"
              id='Security_Code_filter'
              value={mbeId}
              onChange={e => setMbeId(e.target.value)}
            />
          </div>

          <div className='my-1.5'>
            <label
              className='mb-1 text-[13px] font-medium'
              htmlFor="Issuer_Name_filter"
            >
              Investor Name
            </label>
            <input
              className='px-1.5 py-1 bg-slate-700 text-white border-none'
              type="text"
              id='Issuer_Name_filter'
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </div>
        </div>
      }
    </div>
  )
}

export default FiltersBy