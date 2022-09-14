import { ReactNode, useState } from 'react';
import { ListItem, ListWrapper, ListHeader, Filter, FilterWrapper } from './styles';
import data from '../data.json';

interface TempObj {
    categoryID: string,
    advisorName: string,
    categoryName: string,
    status? : string
};

export const Advisor = () => {
    const [selectValue, setSelectValue] = useState<string>('');
    const [isFiltered, setFilter] = useState<boolean>(false);
    const [filterList, setFilterList] = useState<Array<TempObj>>([]);

    let tempArr: TempObj[] = [];

    const handleSelectValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.target.value);
    };

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.target.value.length > 0 ? setFilter(true) : setFilter(false);
        filterAdvisor(e.target.value, (selectValue === '') ? 'Name' : selectValue);
    };

    const modifiedData = (): TempObj[] => {
        if (data) {
            let items = data?.data?.advisorProfileCollection?.items;
            items.map((ele: any) => {
              let sysId: string [] = [];
                if (ele.categoriesCollection.items.length > 0){
                    ele.categoriesCollection.items.forEach((colItem: any) => {
                        if(!sysId.includes(colItem.sys.id)) {
                            let tempObj = {} as TempObj;
                            sysId.push(colItem.sys.id);
                            tempObj.categoryID = colItem.sys.id;
                            tempObj.advisorName = ele.displayName;
                            tempObj.categoryName = colItem.displayName;
                            tempObj.status = ele.status;
                            tempArr.push(tempObj);
                        }
                });
                } else {
                    let tempObj = {} as TempObj;
                    tempObj.advisorName = ele.displayName;
                    tempObj.categoryName = '';
                    tempObj.status = ele.status;
                    tempArr.push(tempObj);
                }
            });
        };
        return tempArr;
    };

    const filterAdvisor = (keyWord: string, category: string): TempObj[]|[]=> {
        let rs: TempObj[] = [];
        if (category === 'Name') {
            modifiedData().find((o: TempObj) => {
                if (o.advisorName.toLowerCase().includes(keyWord.toLowerCase())) {
                    rs.push(o);
                }
            });
        } else if (category == 'Category') {
            modifiedData().find((o: TempObj) => {
                if (o.categoryName.toLowerCase().includes(keyWord.toLowerCase())) {
                    rs.push(o);
                }
            });
        } else if (category == 'Status'){
            modifiedData().find((o: TempObj) => {
                if (o.status?.toLowerCase().includes(keyWord.toLowerCase())) {
                    rs.push(o);
                }
            });
        } else {
            return [];
        }
        setFilterList(rs);
        return [];
    };

    const renderAdvisor = (isFiltered: boolean = false): ReactNode|ReactNode[] => {
        let dumpData = !isFiltered ? modifiedData() : filterList;
        let count: number = 0;
        let color: string = '';
        return dumpData.map(ele => {
            count ++;
            color = (count % 2 === 0) ? '#e5eaf9' : 'white';
            return(
                <ListItem key={count} color={color}>
                    <span style={{ display: 'inline-block', width:'240px' }}>{ele.categoryID}</span>
                    <span style={{ marginLeft: '125px', display: 'inline-block', width:'150px' }}>{ele.categoryName} </span>
                    <span style={{ marginLeft: '145px', display: 'inline-block', width:'150px' }}>{ele.advisorName} </span>
                    <span style={{ marginLeft: '145px', display: 'inline-block', width:'150px' }}>{ele.status} </span>
                </ListItem>
            )
       });
    };

    return (
        <>
            <FilterWrapper> 
                <Filter onChange={handleFilter} placeholder='search'/> 
                <select style={{ height: '30px' }}onChange={handleSelectValue}>
                    <option value=''></option>
                    <option value='Name'>Name</option>
                    <option value='Category'>Category</option>
                    <option value='Status'>Status</option>
                </select>
            </FilterWrapper>
        <ListWrapper>
            <ListHeader>
                <span style={{ display: 'inline', paddingLeft: '5px', fontWeight: 'bold' }}>Category ID</span>
                <span style={{ display: 'inline', paddingLeft: '275px', fontWeight: 'bold' }}>Category Name</span>
                <span style={{ display: 'inline', paddingLeft: '185px', fontWeight: 'bold' }}>Advisor</span>
                <span style={{ display: 'inline', paddingLeft: '245px', fontWeight: 'bold' }}>Status</span>
            </ListHeader>
            {!isFiltered? renderAdvisor() : renderAdvisor(true)}
           
        </ListWrapper>
        </>
    )
  }
  