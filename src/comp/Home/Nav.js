import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../store';

import { ReactComponent as UserProfile } from '../../assets/svg/users/profile.svg';
import { DropDownWrapper } from '../UIComp/DropDown';
import AddBalance from './Modals/AddBalance';

function Nav() {
  const isLoggedIn = useStore(state => state.isLoggedIn)
  const logOut = useStore(state => state.logOut)
  const [open, setOpen] = useState(false)
  const [list] = useState(["Profile", "My token holdings", "My bond holdings", "Transaction Hitory", "Log Out"])
  const navigate = useNavigate()

  const onClk = val => {
    if (val === "Profile") {
      navigate('/profile')
    } else if (val === "My token holdings") {
      navigate('/token-holdings')
    } else if (val === "My bond holdings") {
      navigate('/bond-holdings')
    } else if (val === "Transaction Hitory") {
      navigate('/transaction-hitory')
    } else if (val === "Log Out") {
      logOut()
      navigate('/')
    }
  }

  const updateOpen = () => setOpen(p => !p)

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
            <button
              className='p-0 text-sm hover:underline'
              onClick={updateOpen}
              title="Add balance"
            >
              CBDC Balance : 10000
            </button>

            <DropDownWrapper
              list={list}
              onClk={onClk}
              rootCls="p-0"
              needArrow
              btnCls="whitespace-nowrap"
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

      <AddBalance
        isOpen={open}
        closeModal={updateOpen}
      />
    </>
  )
}

export default Nav