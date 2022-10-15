import { useState } from 'react'
import { useStore } from '../../store';
import Select from 'react-select';
import { filterAdvisorByStatus } from '../../store/actions'


const options = [
    { value: '', label: 'ALL' },
    { value: 1, label: 'Online' },
    { value: 0, label: 'Offline' },
];

const StatusFilter = () => {
    const [selectedOption] = useState(null)
    const [state, dispatch] = useStore()


    const handleOnchangeSelect = e => {
        dispatch(filterAdvisorByStatus(e.value))
    }

    return (
        <div className="xs:mt-5 lg:mt-0 ml-6 flex items-center">
            <label className="font-bold text-lg mr-3">Active Status:</label>
            <Select
                defaultValue={selectedOption}
                onChange={e => handleOnchangeSelect(e)}
                options={options}
                getOptionValue={option => option.value}
            />
        </div>
    )
}

export default StatusFilter