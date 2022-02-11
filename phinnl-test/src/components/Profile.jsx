export default function Profile(props) {
  const { name, email, phone } = props
  return (
    <div className="py-2 flex flex-col gap-1">
      <h3 className="text-base md:text-xl">{name}</h3>
      <p className="text-xs md:text-base font-normal">{phone}</p>
      <a
        className="text-xs md:text-base font-normal text-blue-500 hover:opacity-60"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>
  )
}
