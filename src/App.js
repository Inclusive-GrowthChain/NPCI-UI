import { lazy, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

import Loader from './comp/Common/Loader';

const ForgetPass = lazy(() => import("./comp/Auth/ForgetPass"))
const Signup = lazy(() => import("./comp/Auth/Signup"))
const Login = lazy(() => import("./comp/Auth/Login"))

const TransactionHitory = lazy(() => import("./comp/Home/TransactionHitory"))
const TokenHoldings = lazy(() => import("./comp/Home/TokenHoldings"))
const BondHoldings = lazy(() => import("./comp/Home/BondHoldings"))
// const CBDCWallet = lazy(() => import("./comp/Home/CBDCWallet"))
const MBEMarket = lazy(() => import("./comp/Home/MBEMarket"))
const Profile = lazy(() => import("./comp/Home/Profile"))
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
          <Route path="mbe-market" element={<MBEMarket />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/investor/cbdc-wallet" element={<CBDCWallet />} /> */}
          <Route path="/investor/bond-holdings" element={<BondHoldings />} />
          <Route path="/investor/token-holdings" element={<TokenHoldings />} />
          <Route path="/investor/transaction-hitory" element={<TransactionHitory />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;
