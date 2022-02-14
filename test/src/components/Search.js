import React, { useState } from 'react';

function Search(props) {
    let [input, setInput] = useState('')
    
    function searchHandle() {
        let result = []
        props.profiles.forEach(item => {
            // Check name trước -> OK thì qua item khac
            // Nếu không có -> Check tiếp Category
            if (searchByName(item.displayName.toLowerCase())) {
                result = [... result, item]
                return
            }
            let categorys = item.categoriesCollection.items
            categorys.length > 0 && categorys.forEach(category => {
                if (searchByCategory(category.displayName.toLowerCase())) {
                    result = [... result, item]
                }
            })
        })
        props.searchHandle(result)
    }

    function searchByName(name) {
        if ( name.indexOf(input.toLowerCase()) === -1 ) {
            return
        }  
        return true
    }

    function searchByCategory(categoryName) {
        if (categoryName.indexOf(input.toLowerCase()) === -1 ) {
            return
        }
        return true
    }


    return (
        <div className="search">
            <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyUp={e => e.code === 'Enter' && searchHandle()}
                placeholder="Tìm kiếm tên/danh mục ..."
            />
            <i 
                className="fa-solid fa-magnifying-glass"
                onClick={searchHandle}
            ></i>
        </div>
    )
}

export default Search