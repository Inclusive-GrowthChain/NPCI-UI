import Modal from '../../UIComp/Modal';
import Input from '../../Home/common/Input';

function UserInfo({ isOpen, data, closeModal }) {
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
          value={data.mbeId}
        />
        <Input
          lable='Name'
          value={data.name}
        />
        <Input
          lable='Father Name'
          value={data.personal.fatherName}
        />
        <Input
          lable='DOB'
          value={data.personal.dob}
        />
        {/* <Input
          lable='PAN Card'
          value={data.personal.pan}
        />
        <Input
          lable='Aadhar Card'
          value={data.personal.aadhar}
        /> */}
        <Input
          lable='Email'
          value={data.personal.email}
        />
        <Input
          lable='Mobile'
          value={data.personal.mobile}
        />
        <Input
          lable='Address'
          value={data.personal.address}
        />
        <Input
          lable='Nationality'
          value="Indian"
        />
      </div>
    </Modal>
  )
}

export default UserInfo