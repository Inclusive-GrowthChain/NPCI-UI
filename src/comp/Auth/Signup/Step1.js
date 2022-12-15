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
  const [isKycShown, setIsKycShown] = useState(false)

  const updateIsKycShown = () => setIsKycShown(p => !p)

  return (
    <>
      <input
        type="text"
        className="p-3 rounded mb-4"
        name="pan"
        placeholder="PAN Card Number"
      />

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

      {
        !isKycShown &&
        <button
          className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black disabled:opacity-60"
          onClick={updateIsKycShown}
        >
          Confirm
        </button>
      }

      {
        isKycShown &&
        <>
          <label htmlFor="">Verify KYC</label>
          <input
            type="text"
            className="p-3 rounded mb-4"
            name="aathar"
            placeholder="Aadhar Card Number"
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
          Not registered investor with NSE
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