function Chip({ name }) {
  return (
    <div>
      <span className="font-normal whitespace-nowrap px-4 text-xs md:text-sm rounded-2xl border border-solid max-h-8 bg-neutral-300">
        {name}
      </span>
    </div>
  )
}

export default function Category({ data, title, property }) {
  return (
    <div>
      <h3 className="text-base md:text-xl my-2">{title}</h3>
      <div className="grid grid-cols-1 my-auto gap-2">
        {data.map((item, index) => (
          <Chip
            key={index}
            name={property ? item[property] : item.displayName}
          />
        ))}
      </div>
    </div>
  )
}
