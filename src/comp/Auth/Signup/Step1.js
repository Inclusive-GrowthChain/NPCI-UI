import { useState } from "react";

function RegisteredInvesterWithNSE({ updateStep }) {
  const [isFetched, setIsFetched] = useState(false)

  const updateIsFetched = () => setIsFetched(p => !p)

  return (
    <>
      <input
        type="text"
        className="p-3 rounded mb-4"
        name="pan"
        placeholder="PAN Card Number"
      />

      <input
        type="text"
        className="p-3 rounded mb-4"
        name="aathar"
        placeholder="Aadhar Card Number"
      />

      {
        !isFetched &&
        <button
          className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
          onClick={updateIsFetched}
          disabled={isFetched}
        >
          Fetch Data
        </button>
      }

      {
        isFetched &&
        <>
          <input
            type="text"
            className="p-3 rounded mb-4"
            name=""
            placeholder="First Name"
          />

          <input
            type="text"
            className="p-3 rounded mb-4"
            name=""
            placeholder="Last Name"
          />

          <input
            type="text"
            className="p-3 rounded mb-4"
            name=""
            placeholder="Father Name"
          />

          <input
            type="text"
            className="p-3 rounded mb-4"
            name="Nationality"
            placeholder="Nationality"
          />

          <button
            className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
            onClick={() => updateStep(2)}
          >
            Confirm
          </button>
        </>
      }
    </>
  )
}

function NewUser({ updateStep }) {
  const [showOTPForAadhar, setShowOTPForAadhar] = useState(false)
  const [showOTPForPAN, setShowOTPForPAN] = useState(false)
  const [isKycShown, setIsKycShown] = useState(false)

  const onBtnClk = () => {
    if (!isKycShown) {
      if (!showOTPForPAN) {
        setShowOTPForPAN(true)
      } else {
        setIsKycShown(true)
      }
    } else {
      if (!showOTPForAadhar) {
        setShowOTPForAadhar(true)
      } else {
        updateStep(2)
      }
    }
  }

  return (
    <>
      <input
        type="text"
        className={`p-3 rounded mb-4 ${isKycShown ? "border-emerald-600" : ""}`}
        name="pan"
        placeholder="PAN Card Number"
      />

      {
        !isKycShown ? <>
          {
            showOTPForPAN &&
            <input
              type="text"
              className="p-3 rounded mb-4"
              name="otp"
              placeholder="OTP"
            />
          }

          <button
            className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
            onClick={onBtnClk}
          >
            {showOTPForPAN ? "Verify" : "Send OTP"}
          </button>
        </>
          : <>
            <div className="df max-sm:flex-col gap-4 mb-4">
              <input
                type="text"
                className="p-3 rounded"
                name=""
                placeholder="First Name"
              />

              <input
                type="text"
                className="p-3 rounded"
                name=""
                placeholder="Last Name"
              />
            </div>

            <div className="df max-sm:flex-col gap-4 mb-4">
              <input
                type="text"
                className="p-3 rounded"
                name=""
                placeholder="Father Name"
              />

              <input
                type="text"
                className="p-3 rounded"
                name=""
                placeholder="Gender"
              />
            </div>

            <div className="df max-sm:flex-col gap-4 mb-4">
              <input
                type="text"
                className="p-3 rounded"
                name=""
                placeholder="Date of Birth"
              />

              <input
                type="text"
                className="p-3 rounded"
                name="Nationality"
                placeholder="Nationality"
              />
            </div>

            <label htmlFor="">KYC Verification</label>
            <input
              type="text"
              className="p-3 rounded mb-4"
              name="aathar"
              placeholder="Aadhar Card Number"
            />

            {
              showOTPForAadhar &&
              <input
                type="text"
                className="p-3 rounded mb-4"
                name="otp"
                placeholder="OTP"
              />
            }

            <button
              className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
              onClick={onBtnClk}
            >
              {showOTPForPAN ? "Verify" : "Send OTP"}
            </button>
          </>
      }
    </>
  )
}

function Step1({ updateStep }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <div className="df mb-6">
        <button
          className={`${selectedIndex === 0 ? "bg-slate-100 border-slate-900" : "text-slate-600"} text-sm sm:text-base border-b-2 rounded-b-none`}
          onClick={() => setSelectedIndex(0)}
        >
          Registered investor with NSE
        </button>

        <button
          className={`${selectedIndex === 1 ? "bg-slate-100 border-slate-900" : "text-slate-600"} text-sm sm:text-base border-b-2 rounded-b-none`}
          onClick={() => setSelectedIndex(1)}
        >
          Not a registered investor with NSE
        </button>
      </div>

      {
        selectedIndex === 0
          ? <RegisteredInvesterWithNSE updateStep={updateStep} />
          : <NewUser updateStep={updateStep} />
      }
    </>
  )
}

export default Step1