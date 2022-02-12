function Chip({ name }) {
  return (
    <div className="truncate  rounded-2xl">
      <span className="font-normal px-4 text-xs md:text-sm rounded-2xl border border-solid max-h-8 bg-neutral-300">
        {name}
      </span>
    </div>
  )
}

export default function Category({
  data,
  title,
  property,
  col = 1,
  className,
}) {
  return (
    <div className={className}>
      <h3 className="text-base md:text-xl my-2">{title}</h3>
      <div className={`grid grid-cols-${col} my-auto gap-2`}>
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
