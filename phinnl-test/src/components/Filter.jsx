function RadioButton({ checked, onChange, label, name, id }) {
  return (
    <div>
      <input
        name={name}
        id={id}
        type="radio"
        checked={checked}
        onChange={onChange}
        className="cursor-pointer"
      />
      <label onClick={onChange} htmlFor={name} className="cursor-pointer">
        {label}
      </label>
    </div>
  )
}

export default function Filter({ status, setStatus }) {
  return (
    <div className="flex gap-4 min-w-[16rem]">
      <RadioButton
        checked={status === 0}
        onChange={() => setStatus(0)}
        name="status"
        label="All"
        id="all"
      />
      <RadioButton
        checked={status === 1}
        onChange={() => setStatus(1)}
        name="status"
        label="Online"
        id="online"
      />
      <RadioButton
        checked={status === 2}
        onChange={() => setStatus(2)}
        name="status"
        label="Offline"
        id="offline"
      />
    </div>
  )
}
