import { Link } from "react-router-dom";

function Login() {
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
          />

          <input
            type="password"
            className="p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black"
          >
            Login
          </button>

          <Link
            to="/forget-pass"
            className="block mt-4 text-right hover:text-blue-700"
          >
            Forget Password?
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