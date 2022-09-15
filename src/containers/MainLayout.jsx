import { CardLayout } from './Card'
import mockdata from '../data.json'
import { STATUS } from '../constant/status'
import { Search } from '../components/Search'
import styles from './MainLayout.module.scss'
import { Select } from '../components/Select'
import React, { useEffect, useState } from 'react'

const { data: { advisorProfileCollection: { items: newdata } } } = mockdata

export const MainLayout = () => {
    const defaultData = newdata.map(item => {
        return {
            id: item.sys.id,
            email: item.email,
            phone: item.phone,
            status: item.status,
            name: item.displayName,
            url: item.avatarUrl?.url,
            skillsList: item.skillsCollection.items,
            servicesList: item.categoriesCollection.items,
            categoriesList: item.categoriesCollection.items,
        }
    })
    const [filterList, setFilterList] = useState(defaultData)


    const handleSearch = (value) => {
        const categoriesList = []
        defaultData.map(val => val.categoriesList.map(i => {
            if (i.displayName.toLowerCase().includes(value)) {
                categoriesList.push(val)
            } else if (value === "") {
                setFilterList(defaultData)
            }
        }))
        const filterName = filterList.filter(item => {
            if (item.name.toLowerCase().includes(value)) {
                return item
            } else if (value === "") {
                setFilterList(defaultData)
            }
        })
        if (value === "") {
            setFilterList(defaultData)
        } else {
            setFilterList(filterName.length === 0 ? categoriesList : filterName)
        }
    }
    const handleChange = (value) => {
        const newList = defaultData.filter(list => value == 2 ? list.status === "ONLINE" : value == 1 ? list.status === "OFFLINE" : defaultData)
        setFilterList(newList)
    }
    return (
        <>
            <div className={styles.HeaderTop}>
                <div className={styles.logo} />
                <h1 className={styles.title}>
                    Unitz Test
                </h1>
                <div className={styles.search}>
                    <Search onOk={handleSearch} />
                </div>
            </div>
            <div className={styles.select}>
                <Select option={STATUS} onOk={handleChange} />
            </div>
            <CardLayout dataList={filterList} />
        </>
    )
}
