import AdvisorCard from './AdvisorCard'
import { actions, useStore } from '../../store'
import { useEffect } from 'react'

const Content = () => {
    const [state, dispatch] = useStore()

    useEffect(() => {
        dispatch(actions.setDataList())
    }, [])

    const [foundAdvisorList] = state.foundAdvisorList

    return (
        <div className="w-full py-[30px]">
            <div className="max-w-[1170px] mx-auto">
                <div className="flex gap-5 flex-wrap px-5">
                    {foundAdvisorList && foundAdvisorList.length > 0
                        ?
                        foundAdvisorList.map((advisor, index) => {
                            return (
                                <AdvisorCard key={index} advisor={advisor} />
                            )
                        })
                        :
                        <h3 className="font-bold text-xl text-center w-full">
                            Không tìm thấy kết quả phù hợp
                        </h3>
                    }
                </div>
            </div>
        </div>
    )
}

export default Content