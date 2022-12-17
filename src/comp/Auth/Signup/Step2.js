import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Step2() {
  const [isConfiremed, setIsConfirmed] = useState(false)
  const navigate = useNavigate()

  const onClk = () => {
    setIsConfirmed(p => !p)
    setTimeout(() => {
      navigate("/login")
    }, 2500)
  }

  return (
    <div className='xs:w-[350px] text-center'>
      <h3 className="text-2xl">Create MBE account</h3>

      <button
        className="w-full my-4 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
        onClick={onClk}
      >
        Login/Confirm
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