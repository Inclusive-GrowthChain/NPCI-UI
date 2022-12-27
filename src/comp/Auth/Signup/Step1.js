import { useState } from "react";
import { successNotify } from '../../../helper/toastifyHelp';
import useStore from "../../../store/index.js"
import { fetchNseData, fetchPanCardDetails, postNseData, sendOtp, verifyOtp } from "../../../apis/apis";

function RegisteredInvesterWithNSE({ updateStep }) {
  const [isFetched, setIsFetched] = useState(false)

  const updateIsFetched = () => {
    setIsFetched(p => !p)
  }

  const [details, setDetails] = useState(useStore((state) => state.details))

  const [kycDetails, setKycDetails] = useState({})

  const onChange = e => {
    setKycDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
    console.log(kycDetails);
  }

  const onSuccessNseDataFetch = () => {
    // updateIsFetched();
  }

  return (
    <>
      <input
        type="text"
        className="p-3 rounded mb-4"
        name="panCard"
        placeholder="PAN Card Number"
        onChange={onChange}
      />

      <input
        type="text"
        className="p-3 rounded mb-4"
        name="aadharCard"
        placeholder="Aadhar Card Number"
        onChange={onChange}
      />

      {
        !isFetched &&
        <button
          className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
          onClick={() => fetchNseData(kycDetails, onSuccessNseDataFetch)}
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

  const [details, setDetails] = useState(useStore((state) => state.details))

  const [nseData, setNseData] = useState({})

  const onChange = e => {
    setDetails(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const updateNseData = e => {
    setNseData(p => ({
      ...p,
      [e.target.name]: e.target.value
    }))
  }

  const onSuccessPanOtpSend = () => {
    successNotify("Sent a message to your registered mobile number")
    // setShowOTPForPAN(true)
  }

  const onSuccessPanOtpVerify = () => {
    setIsKycShown(true)
    delete details['enterOtp'];
  }

  const onSuccessAadharOtpSend = () => {
    successNotify("Sent a message to your registered mobile number")
    setShowOTPForAadhar(true)
  }

  const onSuccessAadharOtpVerify = () => {
    delete details['enterOtp'];
    postNseData(nseData, onSuccessNseDataPost);
  }

  const onSuccessNseDataPost = () => {
    updateStep(2)
  }

  const onBtnClk = () => {
    if (!isKycShown) {
      if (!showOTPForPAN) {
        fetchPanCardDetails({ "panCard": nseData.panCard }, onSuccessPanOtpSend)
      } else {
        verifyOtp({ "panCard": nseData.panCard, "enterOtp": details.enterOtp }, onSuccessPanOtpVerify)
      }
    } else {
      if (!showOTPForAadhar) {
        sendOtp(details, onSuccessAadharOtpSend)
      } else {
        verifyOtp(details, onSuccessAadharOtpVerify)
      }
    }
  }

  return (
    <>
      <input
        type="text"
        className={`p-3 rounded mb-4 ${isKycShown ? "border-emerald-600" : ""}`}
        name="panCard"
        placeholder="PAN Card Number"
        onChange={updateNseData}
      />

      {
        !isKycShown ? <>
          {
            showOTPForPAN &&
            <input
              type="text"
              className="p-3 rounded mb-4"
              name="enterOtp"
              placeholder="OTP"
              onChange={onChange}
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
                name="firstName"
                placeholder="First Name"
                onChange={updateNseData}
              />

              <input
                type="text"
                className="p-3 rounded"
                name="lastName"
                placeholder="Last Name"
                onChange={updateNseData}
              />
            </div>

            <div className="df max-sm:flex-col gap-4 mb-4">
              <input
                type="text"
                className="p-3 rounded"
                name="fatherName"
                placeholder="Father Name"
                onChange={updateNseData}
              />

              <input
                type="text"
                className="p-3 rounded"
                name="gender"
                placeholder="Gender"
                onChange={updateNseData}
              />
            </div>

            <div className="df max-sm:flex-col gap-4 mb-4">
              <input
                type="text"
                className="p-3 rounded"
                name="DOB"
                placeholder="Date of Birth"
                onChange={updateNseData}
              />

              <input
                type="text"
                className="p-3 rounded"
                name="Nationality"
                placeholder="Nationality"
                onChange={updateNseData}
              />
            </div>

            <label htmlFor="">KYC Verification</label>
            <input
              type="text"
              className="p-3 rounded mb-4"
              name="aadharCard"
              placeholder="Aadhar Card Number"
              onChange={updateNseData}
            />

            {
              showOTPForAadhar &&
              <input
                type="text"
                className="p-3 rounded mb-4"
                name="enterOtp"
                placeholder="OTP"
                onChange={onChange}
              />
            }

            <button
              className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
              onClick={onBtnClk}
            >
              {showOTPForAadhar ? "Verify" : "Send OTP"}
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