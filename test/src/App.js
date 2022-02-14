import { useEffect, useState } from 'react';
import './App.css';
import Control from './components/Control';
import Item from './components/Item';
import Search from './components/Search';
import data from './data.json'

function App() {
  let profilesDefault = data.data.advisorProfileCollection.items
  let [control, setControl] = useState('row')
  let [profiles, setProfiles] = useState(profilesDefault)

  function changeControl(value) {
    setControl(value)
  }

  function searchHandle(result) {
    setProfiles(result)
  }
  
  function onlineHandle(result) {
    setProfiles(result)
  }

  return (
    <div className="app">
      <header className="header">
        <Search profiles={profilesDefault} searchHandle={searchHandle}/>
      </header>
      <div className="content">
        <Control 
          control={control} 
          profilesDefault={profilesDefault}
          changeControl={changeControl} 
          onlineHandle={onlineHandle}
        />
        <div className={`list ${control}`}>
          {
            profiles && profiles.map((profile, index) => {
              return <Item profile={profile} key={index} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
