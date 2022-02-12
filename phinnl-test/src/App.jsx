import clsx from 'clsx'
import { useState } from 'react'
import Filter from './components/Filter'
import Header from './components/Header'
import HorizontalList from './components/HorizontalList'
import Search from './components/Search'
import VerticalList from './components/VerticalList'
import json from './data.json'

function Button({ active, children, onClick }) {
  return (
    <button
      className={clsx(
        'outline-none border-2 border-solid border-gray-200 rounded-xl px-4 py-2 hover:border-blue-400 hover:text-blue-400',
        {
          'border-blue-400 text-blue-400': active,
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function includes(element, query) {
  if (!element) return false
  return Object.values(element).some((value) => {
    if (typeof value === 'string')
      return value.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    if (Array.isArray(value)) return value.some((val) => includes(val, query))
    if (typeof value === 'object') return includes(value, query)
    return false
  })
}

function App() {
  const [type, setType] = useState(0)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState(0)
  const list = json.data.advisorProfileCollection.items.filter(
    ({
      status: { online },
      displayName,
      email,
      phone,
      categoriesCollection,
      servicesCollection,
      skillsCollection,
    }) => {
      const isTrueStatus =
        status === 0 || (status === 1 && online) || (status === 2 && !online)
      const isIncludesQuery = includes(
        {
          displayName,
          email,
          phone,
          categoriesCollection: categoriesCollection.items.map((e) => ({
            name: e.name,
            displayName: e.displayName,
          })),
          servicesCollection: servicesCollection.items.map((e) => ({
            name: e.name,
            displayName: e.displayName,
          })),
          skillsCollection: skillsCollection.items.map((e) => ({
            name: e.name,
            displayName: e.displayName,
          })),
        },
        query
      )
      return isIncludesQuery && isTrueStatus
    }
  )
  const handleChangeType = (value) => () => setType(value)
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="text-xl md:text-2xl my-6 flex gap-4">
        <Button active={type === 0} onClick={handleChangeType(0)}>
          Vertical List
        </Button>
        <Button active={type === 1} onClick={handleChangeType(1)}>
          Horizontal List
        </Button>
      </div>
      <div className="my-6 flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-12">
        <Search value={query} onChange={setQuery} />
        <Filter status={status} setStatus={setStatus} />
      </div>
      {type === 0 && <VerticalList data={list} />}
      {type === 1 && <HorizontalList data={list} />}
    </div>
  )
}

export default App
