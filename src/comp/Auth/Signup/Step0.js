import { useState } from "react";
import { successNotify } from '../../../helper/toastifyHelp';
import countryCodes from '../../../constants/countryCodes';
import { sendOtp, verifyOtp } from "../../../apis/Step1";

function Step0({ updateStep }) {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91")
  const [showOtp, setShowOtp] = useState(false)

  const [details, setDetails] = useState({})

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onSuccessOtpSend = () => {
    updateShowOtp();
  }

  const onSuccessOtpVerify = () => {
    updateStep(1);
  }

  const updateShowOtp = () => {
    successNotify("Sent a message to your number/email")
    setShowOtp(p => !p)
  }

  return (
    <div className='xs:w-[350px]'>
      <input
        type="text"
        className="p-3 rounded mb-2"
        name="email"
        placeholder="Email"
        onChange={onChange}
      />

      <div className='mb-2 text-lg text-center text-slate-500'>or</div>

      <div className="df mb-4 border border-gray-300 rounded">
        <select
          className="w-24 border-y-0 border-l-0 rounded-none bg-[length:18px] bg-[88%]"
          value={selectedCountryCode}
          onChange={e => setSelectedCountryCode(e.target.value)}
        >
          {
            countryCodes.map((country, i) => (
              <option
                key={i}
                value={country.dial_code}
              >
                {country.dial_code}
              </option>
            ))
          }
        </select>

        <input
          type="number"
          className="no-number-arrows p-3 border-none"
          name="phoneNumber"
          placeholder="Mobile Number"
          onChange={onChange}
        />
      </div>

      <button
        className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
        onClick={() => sendOtp(details, onSuccessOtpSend)}
        disabled={showOtp}
      >
        Send OTP
      </button>

      {
        showOtp &&
        <>
          <input
            type="text"
            className="p-3 rounded mb-4 mt-8"
            name="enterOtp"
            placeholder="OTP"
            onChange={onChange}
          />

          <button
            className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black"
            onClick={() => verifyOtp(details, onSuccessOtpVerify)}
          >
            Verify
          </button>
        </>
      }
    </div>
  )
}

export default Step0