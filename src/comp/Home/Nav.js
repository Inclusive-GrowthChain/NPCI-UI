import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../store';

import { ReactComponent as UserProfile } from '../../assets/svg/users/profile.svg';
import { DropDownWrapper } from '../UIComp/DropDown';

function Nav() {
  const isLoggedIn = useStore(state => state.isLoggedIn)
  const logOut = useStore(state => state.logOut)
  const [list] = useState(["Profile", "My token holdings", "My bond holdings", "CBDC Wallet", "Transaction Hitory", "Log Out"])
  const navigate = useNavigate()

  const onClk = val => {
    if (val === list[0]) {
      navigate('/profile')
    } else if (val === list[1]) {
      navigate('/token-holdings')
    } else if (val === list[2]) {
      navigate('/bond-holdings')
    } else if (val === list[3]) {
      navigate('/cbdc-wallet')
    } else if (val === list[4]) {
      navigate('/transaction-hitory')
    } else if (val === list[5]) {
      logOut()
      navigate('/')
    }
  }

  return (
    <>
      <nav className="df gap-4 sm:gap-8 h-16 px-8 border-b border-[rgba(255,255,255,.6)]">
        <Link
          className='mr-auto py-4 text-xl sm:text-[26px] lg:text-[40px] font-semibold bg-gradient-to-r from-emerald-300 to-emerald-700 bg-clip-text text-transparent'
          to="/"
        >
          Micro Bond Exchange
        </Link>

        <Link
          className='text-white hover:text-emerald-300'
          to="/mbe-market"
        >
          MBE Market
        </Link>

        {
          isLoggedIn ? <>
            <DropDownWrapper
              list={list}
              onClk={onClk}
              rootCls="p-0"
              needArrow
            >
              <UserProfile />
            </DropDownWrapper>
          </> : <>
            <Link
              className='hover:text-emerald-500'
              to="/login"
            >
              Login
            </Link>

            <Link
              className='hover:text-emerald-500'
              to="/signup"
            >
              Signup
            </Link>
          </>
        }
      </nav>
    </>
  )
}

export default Nav