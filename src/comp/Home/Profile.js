function Input({ lable = "", value = "" }) {
  return (
    <div className='df'>
      <p className="w-28 font-medium shrink-0">{lable}</p>
      <span className="font-medium">:</span>
      <p className="ml-6">{value}</p>
    </div>
  )
}

function Profile() {
  return (
    <section className="grid gap-4 justify-center max-w-md mx-auto px-6 py-10 bg-slate-800 rounded-b-2xl">
      <Input
        lable='Name'
        value='Raj kumar'
      />
      <Input
        lable='PAN Number'
        value='12345'
      />
      <Input
        lable='Aadhar Card'
        value='865-4309-876-6654'
      />
      <Input
        lable='Mobile'
        value='9876543210'
      />
      <Input
        lable='Email'
        value='raj@gmail.com'
      />
      <Input
        lable='Account ID'
        value='1234'
      />
      <Input
        lable='Gender'
        value='Male'
      />
      <Input
        lable='Address'
        value='Some address, chennai.'
      />
    </section>
  )
}

export default Profile