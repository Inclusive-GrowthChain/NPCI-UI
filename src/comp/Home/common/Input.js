function Input({ lable = "", value = "" }) {
  return (
    <div className='df'>
      <label className="w-28 font-medium shrink-0">{lable}</label>
      <span className="font-medium">:</span>
      <input
        disabled
        type="text"
        defaultValue={value}
        className="md:max-w-[180px] ml-4"
      />
    </div>
  )
}

export default Input