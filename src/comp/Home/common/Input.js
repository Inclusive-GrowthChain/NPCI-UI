function Input({ lable = "", value = "", inputCls = "", lableCls = "" }) {
  return (
    <div className='df'>
      <label className={`c-lable ${lableCls}`}>{lable}</label>
      <span className="font-medium">:</span>
      <input
        disabled
        type="text"
        defaultValue={value}
        className={`c-input ${inputCls}`}
      />
    </div>
  )
}

export default Input