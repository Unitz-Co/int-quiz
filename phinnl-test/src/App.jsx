import Header from './components/Header'
import VerticalList from './components/VerticalList'
import json from './data.json'

function App() {
  const { items } = json.data.advisorProfileCollection
  return (
    <div className="container mx-auto px-5">
      <Header />
      <VerticalList data={items} />
    </div>
  )
}

export default App
