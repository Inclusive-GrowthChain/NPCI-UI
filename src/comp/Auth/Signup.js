import { Link } from "react-router-dom";
import countryCodes from '../../constants/countryCodes';

function Signup() {
  return (
    <div className="dc min-h-screen bg-slate-200">
      <div className="dc flex-col container max-w-md mx-auto flex-1 px-2">
        <div className="px-6 py-8 w-full rounded-lg shadow-md text-black bg-white ">
          <h1 className="mb-8 text-3xl font-medium text-center">Sign up</h1>

          <input
            type="text"
            className="p-3 rounded mb-4"
            name="fullname"
            placeholder="First Name"
          />

          <input
            type="text"
            className="p-3 rounded mb-4"
            name="lastname"
            placeholder="Last Name"
          />

          <input
            type="text"
            className="p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <div className="df mb-4 border border-gray-300 rounded">
            <select className="w-24 border-y-0 border-l-0 rounded-none bg-[length:18px] bg-[88%]">
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

          <input
            type="text"
            className="p-3 rounded mb-4"
            name="PAN_number"
            placeholder="PAN Number"
          />

          <button
            type="submit"
            className="w-full mt-2 px-6 py-2 font-medium bg-slate-900 text-white rounded-md shadow-xl hover:bg-black"
          >
            Create Account
          </button>
        </div>

        <div className="df text-grey-dark mt-6">
          Already have an account?
          <Link className="text-blue-600 hover:underline" to='/login'>
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup