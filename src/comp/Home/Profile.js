function Input({ lable = "", value = "" }) {
  return (
    <div className='flex text-xs md:text-base'>
      <p className="w-32 md:ml-8 shrink-0 opacity-70">{lable}</p>
      <span className="font-medium md:mx-4 opacity-70">:</span>
      <p className="ml-6">{value}</p>
    </div>
  )
}

function Profile() {
  return (
    <section className="grid gap-4 max-w-xl mx-4 sm:mx-auto px-6 py-10 bg-slate-800 rounded-b-2xl">
      <Input
        lable='Name'
        value='Raj kumar'
      />
      <Input
        lable='Account ID'
        value='1234'
      />
      <Input
        lable='CBDC Balance'
        value='100000'
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
        lable='Gender'
        value='Male'
      />
      <Input
        lable='Address'
        value='Some door No, Some street, Some Village, Some City, Some, State.'
      />
    </section>
  )
}

export default Profile