import { useEffect, useState } from 'react';
import Modal from '../../UIComp/Modal';
import Input from '../../Home/common/Input';
import { getUserDetails } from '../../../apis/apis';
import useStore from '../../../store';
import Loader from '../../Common/Loader';

function UserInfo({ isOpen, data, closeModal }) {
  const email = useStore(state => state.email)
  const [userDetails, setUserDetails] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const onSuccessUserDetails = (payload) => {
      setUserDetails(payload)
      setLoading(false)
    }

    getUserDetails({ "email": data.MbeId }, onSuccessUserDetails)

  }, [])

  if (loading) return <Loader wrapperCls='h-[calc(100vh-64px)]' />

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls=""
      title="User Information"
    >
      <div className='grid grid-cols-2 gap-4'>
        <Input
          lable='MBE ID'
          value={userDetails.email}
        />
        <Input
          lable='Name'
          value={userDetails.firstName + " " + userDetails.lastName}
        />
        <Input
          lable='Father Name'
          value={userDetails.fatherName}
        />
        <Input
          lable='DOB'
          value={userDetails.DOB}
        />
        <Input
          lable='Email'
          value={userDetails.email}
        />
        <Input
          lable='Mobile'
          value={userDetails.phoneNumber}
        />
        <Input
          lable='Address'
          value={userDetails.address}
        />
        <Input
          lable='Nationality'
          value={userDetails.Nationality}
        />
      </div>
    </Modal>
  )
}

export default UserInfo