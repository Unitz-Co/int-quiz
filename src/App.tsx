import {ChangeEvent, useEffect, useState, useTransition} from "react"
import AdvisorItem from "./components/AdvisorItem"
import {Advisor} from "./types"
import advisorList from '../data.json'
import './App.css'

function App() {
  const [originalAdvisors, setOriginalAdvisors] = useState<Advisor[]>([])
  const [filteredAdvisors, setFilteredAdvisors] = useState<Advisor[]>([])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [view, setView] = useState<"horizontal" | "vertical">("horizontal")
  const [, startTransition] = useTransition()

  const changeView = () => {
    setView(cw => cw === "horizontal" ? "vertical" : "horizontal")
  }

  const changeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    changeFilter(newValue, status)
    setSearch(newValue)
  }

  const changeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value
    changeFilter(search, newValue)
    setStatus(newValue)
  }

  const changeFilter = (searchParam: string, statusParam: string) => {
    startTransition(() => {
      const filteredAd = originalAdvisors.filter(adv => adv.displayName.toLowerCase().includes(searchParam.toLowerCase()) && adv.status.includes(statusParam))
      setFilteredAdvisors(filteredAd)
    })
  }

  useEffect(() => {
    const adVisorData = advisorList.data.advisorProfileCollection.items as unknown as Advisor[]
    setOriginalAdvisors(adVisorData)
    setFilteredAdvisors(adVisorData)
  }, []);

  return (
    <main className="container">
      <h1>Advisor List</h1>
      <div className="filter">
        <input type="text" placeholder="Search by name, category..." value={search} onChange={changeSearch}/>
        <select value={status} onChange={changeStatus}>
          <option value="">All</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <button onClick={changeView}>Switch view</button>
      </div>
      <div className={`list ${view}`}>
        {filteredAdvisors?.length === 0 ? (
          <h5>No item matched</h5>
        ) : filteredAdvisors?.map(advisor => (
          <AdvisorItem key={advisor.sys.id} advisor={advisor}/>
        ))}
      </div>
    </main>
  )
}

export default App
