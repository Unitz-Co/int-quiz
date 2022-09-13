import React, {useEffect, useState} from "react";
import style from "./Members.module.scss";
import Advisors from "./Advisors";
import data from "../../data.json";
import Search from "./Search";
import Select from "./Select";

const advisors = data.data.advisorProfileCollection.items;
const Members = () => {
    const [data, setData] = useState(advisors)
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("all")
    const handleChangeSearch = (e) => {
        const value = e.target.value;
        setSearch(value)
    }
    const handleChangeSelect = (e) => {
        const valueSelect =  e.target.value;
        console.log({valueSelect})
        setSelect(valueSelect)

    }

    const handleFilter = () => {
        if (search !== "") {
            const searchText = search.toLocaleLowerCase();
            const filterName = advisors.filter((item) => {
                return item.displayName.toLocaleLowerCase().includes(searchText)
            });
            const filterCategories = advisors.filter((item) => {
                const categories = item.categoriesCollection.items;
                // console.log({categories});
                const matches = categories.filter((category) => {
                    return category.displayName.toLocaleLowerCase().includes(searchText);
                });

                // console.log({matches});
                return matches.length > 0;
            });
            // console.log({filterCategories})
            setData([...filterName, ...filterCategories])
        } else {
            setData(advisors)
        }
    }

    const selectFilter = () => {
        if(select === "all" || select === ""){
            setData(advisors)
        }
        if(select === "online"){
            const filterOnline = advisors.filter((item)=>{
                return item.online === true
            })
            setData([...filterOnline])
            console.log({select,filterOnline})
        }if(select === "offline"){
            const filterOffline = advisors.filter((item)=>{
                return item.online === false
            })
            setData([...filterOffline])
            console.log({select,filterOffline})
        }
    }

    useEffect(()=>{
        selectFilter()
    },[select])

    useEffect(() => {
        handleFilter()
    }, [search])


    return (
        <div className={style.members}>
            <h3 className={style.title}>Our Advisors</h3>
            <Search handleChange={handleChangeSearch}/>
            <Select handleChangeSelect={handleChangeSelect}/>
            <Advisors advisors={data}/>
        </div>
    );
};
export default Members;
