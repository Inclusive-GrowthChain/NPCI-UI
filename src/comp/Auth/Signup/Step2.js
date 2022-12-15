import { useState } from "react";

function Step2() {
  const [isConfiremed, setIsConfirmed] = useState(false)

  return (
    <div className='xs:w-[350px] text-center'>
      <h3 className="text-2xl">Create account with MBE</h3>

      <button
        className="w-full my-4 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
        onClick={() => setIsConfirmed(p => !p)}
      >
        Confirm
      </button>

      {
        isConfiremed &&
        <p className="text-sm">
          MBE User ID and Password sent to your registered mobile number and mail
        </p>
      }
    </div>
  )
}

export default Step2