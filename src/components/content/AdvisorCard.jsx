import { useState } from "react"
import ButtonCard from "./ButtonCard"
import ContentAdvisorCard from "./ContentAdvisorCard"
import HeaderAdvisorCard from "./HeadAdvisorCard"

const AdvisorCard = (advisor) => {
    const [isShowBodyCard, setIsShowBodyCard] = useState(false)

    const advisorItem = { ...advisor.advisor }

    return (
        <div className="xs:w-full md:w-[48%] xl:w-[32%] h-auto rounded-lg p-2.5 shadow-md border-[2px] border-[#1dbce04a]">
            <HeaderAdvisorCard
                advisorItem={advisorItem}
            />
            <ContentAdvisorCard
                advisorItem={advisorItem}
                isShowBodyCard={isShowBodyCard}
            />
            <ButtonCard
                isShowBodyCard={isShowBodyCard}
                setIsShowBodyCard={setIsShowBodyCard}
            />
        </div>
    )
}

export default AdvisorCard