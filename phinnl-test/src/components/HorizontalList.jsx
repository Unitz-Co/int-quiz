import { useRef } from 'react'
import Avatar from './Avatar'
import Category from './Category'
import Profile from './Profile'

function Item({ data }) {
  return (
    <div className="inline-block">
      <div
        className="border-2 rounded-xl border-solid border-gray-300 cursor-pointer hover:bg-cyan-50 flex flex-col justify-between gap-4 font-semibold p-4"
        style={{
          marginTop: '-1px',
          height: '100%',
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
        <Category
          className="flex-1"
          data={data.categoriesCollection.items}
          title="Category"
          col={2}
        />
        <Category
          className="flex-1"
          data={data.skillsCollection.items}
          title="Skill"
          col={2}
        />
        <Category
          className="flex-1"
          data={data.servicesCollection.items}
          title="Service"
          property="name"
          col={2}
        />
      </div>
    </div>
  )
}

export default function HorizontalList({ data }) {
  const ref = useRef()
  return (
    <section>
      <div
        ref={ref}
        className="w-full align-middle flex gap-3 whitespace-nowrap overflow-x-auto overflow-y-hidden"
      >
        {data.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    </section>
  )
}
