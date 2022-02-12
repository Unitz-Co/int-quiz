import Avatar from './Avatar'
import Category from './Category'
import Profile from './Profile'

function Item({ data }) {
  return (
    <div
      className="border-solid border-gray-300 rounded-xl border-2 cursor-pointer hover:bg-cyan-50 flex flex-col lg:flex-row justify-between gap-4 font-semibold p-4"
      style={{
        marginTop: '-1px',
      }}
    >
      <div className="flex gap-4 min-w-[17rem] md:min-w-[22rem]">
        <Avatar url={data.avatarUrl?.url} online={data.status?.online} />
        <Profile
          name={data.displayName}
          phone={data.phone}
          email={data.email}
        />
      </div>
      <div className="flex-1 grid gap-4 grid-cols-2 md:grid-cols-3 justify-items-start">
        <Category data={data.categoriesCollection.items} title="Category" />
        <Category data={data.skillsCollection.items} title="Skill" />
        <Category
          data={data.servicesCollection.items}
          title="Service"
          property="name"
        />
      </div>
    </div>
  )
}

export default function VerticalList({ data }) {
  return (
    <section className="flex gap-3 flex-col">
      {data.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </section>
  )
}
