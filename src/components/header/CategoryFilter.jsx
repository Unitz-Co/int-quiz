import { useState } from 'react'
import { useStore } from '../../store';
import Select from 'react-select';
import { filterAdvisorByCategory } from '../../store/actions'


const options = [
    { value: '', label: 'ALL' },
    { value: '6dbCsjeKiwyrUurVporPzF', label: 'Tư vấn tâm lý' },
    { value: '1I2qi7nphzc6tMvpGfhcpu', label: 'Xem phong thủy' },
    { value: 'sPpVgn9dKfmwW2OxXDI36', label: 'Tư vấn hôn nhân gia đình' },
    { value: '3FZbfOUlzD7LCWXAdyV1vu', label: 'Hon nhan va gia dinh' },
    { value: '7pqQHEl1tNTr6VtMqcm9nB', label: 'xem chỉ tay' },
    { value: '5Oio2f7QyWgEE19pkOZxgH', label: 'Xem tướng học' },
];

const CategoryFilter = () => {
    const [selectedOption] = useState(null)
    const [state, dispatch] = useStore()


    const handleOnchangeSelect = e => {
        dispatch(filterAdvisorByCategory(e.value))
    }

    return (
        <div className="xs:mt-5 lg:mt-0 ml-6 flex items-center">
            <label className="font-bold text-lg mr-3">Category Filter:</label>
            <Select
                defaultValue={selectedOption}
                onChange={e => handleOnchangeSelect(e)}
                options={options}
                getOptionValue={option => option.value}
            />
        </div>
    )
}

export default CategoryFilter