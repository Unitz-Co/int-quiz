import { useState } from 'react'
import Advisors from './Advisors'
import AdvData from '../data/data.json'
import '../styles/main.css'

const data = [];
AdvData.data.advisorProfileCollection.items.map(advisor => (
    data.push(advisor)
))

export default function Main() {
    const [results, setResults] = useState(data)

    function handleSearch(e) {
        function queryCheck(query) {
            if (query.displayName.toLowerCase().includes(e.target.value.toLowerCase())) {
                return query;
            } else if (query.status?.toLowerCase().includes(e.target.value.toLowerCase())) {
                return query;
            } else {
                function callbackFn(i) {
                    return i.displayName.toLowerCase().includes(e.target.value.toLowerCase())
                }
                let x = query.categoriesCollection?.items.some(callbackFn);
                if (x === true) {
                    console.log(x)
                    return query;
                }
            }
        }
        setResults(data.filter(queryCheck))
    }

    const advElement = results.map(advisor => {
        return (
            <Advisors
                key={advisor.sys.id}
                img={advisor.avatarUrl?.url}
                name={advisor.displayName}
                email={advisor.email}
                phone={advisor.phone}
                status={advisor.status}
                skills={advisor.skillsCollection?.items}
                services={advisor.servicesCollection?.items}
                cats={advisor.categoriesCollection?.items}
            />
        )
    })

    const [display, setDisplay] = useState('main_advisors');

    function toggleDisplay(e) {
        e.target.src.includes('grid') ? 
        e.target.src = './list.svg' : 
        e.target.src = './grid.svg'

        function updateDisplay() {
            display == 'main_advisors' ?
            setDisplay('main_advisors hori') : 
            setDisplay('main_advisors') ;
        }
        updateDisplay();
    }

    return (
        <div className="main">
            <div className="main_head">
                <input className="main_search" type="search" placeholder="Search name/ cats/ status!"
                    onChange={handleSearch}
                />
                <img className='icon' src='./grid.svg' onClick={toggleDisplay}/>
            </div>
            
            <div className={display}>
                {advElement}
            </div>
        </div>
    )
}