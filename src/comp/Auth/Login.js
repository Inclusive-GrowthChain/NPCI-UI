import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../store";

function Login() {
  const [password, setPassword] = useState("")
  const [mbeId, setMBEId] = useState("investor custodian")
  const logIn = useStore(state => state.logIn)
  const navigate = useNavigate()

  const onSubmit = () => {
    if (mbeId === "custodian" || mbeId === "investor") {
      logIn(mbeId)
      navigate("/mbe-market")
    }
  }

  return (
    <div className="dc min-h-screen bg-slate-200">
      <div className="dc flex-col gap-6 container max-w-sm mx-auto flex-1 px-2">
        <div className="px-6 py-8 w-full rounded-lg shadow-md text-black bg-white ">
          <h1 className="mb-8 text-3xl font-medium text-center">Log in</h1>
          <input
            type="text"
            className="p-3 rounded mb-4"
            name="MBE_ID"
            placeholder="MBE ID"
            value={mbeId}
            onChange={e => setMBEId(e.target.value)}
          />

          <input
            type="password"
            className="p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black"
            onClick={onSubmit}
          >
            Login
          </button>

          <Link
            to="/forget-pass"
            className="block mt-4 text-right hover:text-blue-700"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="df">
          Don't have an account?
          <Link className="text-blue-600 hover:underline" to='/signup'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login