import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../store';

import { ReactComponent as UserProfile } from '../../assets/svg/users/profile.svg';
import { DropDownWrapper } from '../UIComp/DropDown';

function Nav() {
  const isLoggedIn = useStore(state => state.isLoggedIn)
  const [list] = useState(["Profile", "My token holdings", "My bond holdings"])
  const navigate = useNavigate()

  const onClk = val => {
    if (val === list[0]) {
      navigate('/')
    } else if (val === list[1]) {
      navigate('/tokenize')
    } else if (val === list[2]) {
      navigate('/my-account')
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