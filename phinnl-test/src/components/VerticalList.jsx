import Avatar from './Avatar'
import Category from './Category'
import Profile from './Profile'

function Item({ data }) {
  console.log(data)
  return (
    <div
      className="border-solid border-gray-500 cursor-pointer hover:bg-cyan-50 flex flex-col lg:flex-row justify-between gap-4 font-semibold p-4"
      style={{
        borderWidth: '1px 0',
        marginTop: '-1px',
      }}
    >
      <div className="flex gap-4 min-w-[17rem] md:min-w-[22rem]">
        <Avatar url={data.avatarUrl?.url} status />
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
    <section>
      <h2 className="text-2xl md:text-3xl my-6">Vertical List</h2>
      {data.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </section>
  )
}
