import countryCodes from '../../../constants/countryCodes';
import { useState } from "react";

function Step0({ updateStep }) {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91")
  const [showOtp, setShowOtp] = useState(false)

  const updateShowOtp = () => setShowOtp(p => !p)

  return (
    <div className='xs:w-[350px]'>
      <input
        type="text"
        className="p-3 rounded mb-2"
        name="email"
        placeholder="Email"
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
          name="mobileNumber"
          placeholder="Mobile Number"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
        onClick={updateShowOtp}
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
            name="otp"
            placeholder="OTP"
          />

          <button
            className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black"
            onClick={() => updateStep(1)}
          >
            Verify
          </button>
        </>
      }
    </div>
  )
}

export default Step0