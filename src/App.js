import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import Loader from './comp/Common/Loader';

const ForgetPass = lazy(() => import("./comp/Auth/ForgetPass"))
const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const MyAccount = lazy(() => import("./comp/Home/MyAccount"))
const Tokenize = lazy(() => import("./comp/Home/Tokenize"))
const LiveC = lazy(() => import("./comp/Home/LiveC"))
const Home = lazy(() => import("./comp/Home"))

function App() {
  return (
    <Suspense fallback={<Loader wrapperCls='h-screen' />}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forget-pass" element={<ForgetPass />} />

        <Route path="/" element={<Home />}>
          <Route index element={<div></div>} />
          <Route path="mbe-market" element={<LiveC />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="tokenize" element={<Tokenize />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;
