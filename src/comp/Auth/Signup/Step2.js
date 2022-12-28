import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { registerUser } from "../../../apis/apis.js";
import useStore from "../../../store/index.js"

function Step2() {
  const [isConfiremed, setIsConfirmed] = useState(false)
  const navigate = useNavigate()
  const nseData = useState(useStore((state) => state.nseData))

  const onClk = () => {
    setIsConfirmed(p => !p)
    registerUser({
      "panCard": nseData.panCard,
      "phoneNumber": nseData.phoneNumber
    }, onSuccess)
    // setTimeout(() => {
    //   navigate("/login")
    // }, 3000)
  }

  const onSuccess = () => {
    setTimeout(() => {
      navigate("/login")
    }, 3000)
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