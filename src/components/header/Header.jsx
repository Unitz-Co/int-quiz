import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useStore } from '../../store'
import { filterAdvisorByName, setInputValue } from '../../store/actions'
import StatusFilter from './StatusFilter'
import CategoryFilter from './CategoryFilter'

const Header = () => {
    const [state, dispatch] = useStore()
    const { inputValue } = state

    const handleOnchange = e => {
        dispatch(setInputValue(e.target.value))
    }

    const handleOnKeyDown = (e, inputValue) => {
        if (e.keyCode === 13) {
            dispatch(filterAdvisorByName(inputValue))
        }
    }

    const handleClick = (inputValue) => {
        dispatch(filterAdvisorByName(inputValue))
    }

    return (
        <div className="w-full h-[150px] py-2.5">
            <div className="max-w-[1170px] h-full mx-auto">
                <div className="xs:flex xs:flex-col xs:justify-center xs:items-center lg:flex-row lg:justify-center xl:justify-between h-full px-5">
                    <div className="flex items-center h-[50px]">
                        <div
                            className="max-w-[400px] h-full px-3 flex items-center rounded-md bg-white 
                    shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
                        >
                            <input
                                type="text"
                                className="inline-block w-[300px] h-full outline-none"
                                placeholder="Please enter something...!"
                                value={inputValue}
                                onChange={e => handleOnchange(e)}
                                onKeyDown={e => handleOnKeyDown(e, inputValue)}
                            />
                            <button
                                className="flex-1 inline-block h-[50px] w-[50px] hover:rounded-full hover:bg-cyan-400"
                                onClick={() => handleClick(inputValue)}
                            >
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="text-[#777]"
                                />
                            </button>
                        </div>
                    </div>
                    <StatusFilter />
                    <CategoryFilter />
                </div>
            </div>
        </div>
    )
}

export default Header