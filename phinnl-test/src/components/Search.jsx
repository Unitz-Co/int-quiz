export default function Search({ value, onChange }) {
  return (
    <div className="relative w-full">
      <i className="absolute text-gray-500 top-[50%] translate-y-[-50%] left-3 fa-solid fa-magnifying-glass"></i>
      <input
        className="placeholder:italic  focus:border-sky-500 placeholder:text-slate-400 w-full md:w-96 rounded-xl outline-none border-2 border-solid border-gray-200 pr-4 pl-8 py-2"
        type="text"
        defaultValue={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for anything..."
      />
    </div>
  )
}
