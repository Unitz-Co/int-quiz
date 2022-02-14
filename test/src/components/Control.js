import React, { useState } from 'react';

function Control(props) {
    let [online, setOnline] = useState(false)

    function onlineHandle() {
        let result = []
        setOnline(!online)
        if (!online) {
            props.profilesDefault.forEach(item => {
                if (item.status === 'on') {
                    result = [...result, item]
                }
            })
            props.onlineHandle(result)
            return
        }
        props.onlineHandle(props.profilesDefault)
    }

    return (
        <div className="filter">
            <p
                className={`${online ? 'online' : ''}`}
                onClick={() => onlineHandle()}
            >Online</p>
            <i
                className={`fa-solid fa-bars ${props.control === 'row' ? 'active' : ''}`}
                onClick={() => props.changeControl('row')}
            ></i>
            <i
                className={`fa-solid fa-align-left ${props.control === 'column' ? 'active' : ''}`}
                onClick={() => props.changeControl('column')}
            ></i>
        </div>
    )
}

export default Control