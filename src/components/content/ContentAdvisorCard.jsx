
const ContentAdvisorCard = ({ advisorItem, isShowBodyCard }) => {

    const email = advisorItem.email !== null ? advisorItem.email : 'N/A'
    const phone = advisorItem.phone !== null ? advisorItem.phone : 'N/A'
    const skills = advisorItem.skillsCollection.items
    const services = advisorItem.servicesCollection.items
    const categories = advisorItem.categoriesCollection.items
    const isOnline = advisorItem.isOnline

    return (
        <>
            {isShowBodyCard === true &&
                <div className="w-full my-2.5">
                    <p className="font-bold text-lg my-1.5">
                        Email:
                        <span className="font-normal ml-3">
                            {email}
                        </span>
                    </p>
                    <p className="font-bold text-lg my-1.5">
                        Phone:
                        <span className="font-normal ml-3">
                            {phone}
                        </span>
                    </p>
                    <p className="font-bold text-lg my-1.5">
                        Skills:
                        <span className="font-normal ml-3">
                            {skills && skills.length > 0 ?
                                skills.map((item, index) => {
                                    return (
                                        <span key={index}>
                                            {item.displayName} {index === skills.length - 1 ? '' : ', '}
                                        </span>
                                    )
                                })
                                :
                                <span>N/A</span>
                            }
                        </span>
                    </p>
                    <p className="font-bold text-lg my-1.5">
                        Services:
                        <span className="font-normal ml-3">
                            {services && services.length > 0 ?
                                services.map((item, index) => {
                                    return (
                                        <span key={index}>
                                            {item.name} {index === services.length - 1 ? '' : ', '}
                                        </span>
                                    )
                                })
                                :
                                <span>N/A</span>
                            }
                        </span>
                    </p>
                    <p className="font-bold text-lg my-1.5">
                        Categories:
                        <span className="font-normal ml-3">
                            {categories && categories.length > 0 ?
                                categories.map((item, index) => {
                                    return (
                                        <span key={index}>
                                            {item.displayName} {index === categories.length - 1 ? '' : ', '}
                                        </span>
                                    )
                                })
                                :
                                <span>N/A</span>
                            }
                        </span>
                    </p>
                    <p className="font-bold text-lg my-1.5">
                        Active Status:
                        {isOnline === true ?
                            <span className="ml-3 inline-block w-[10px] h-[10px] rounded-full bg-green-500 mt-1.5">
                            </span>
                            :
                            <span className="ml-3 inline-block w-[10px] h-[10px] rounded-full bg-red-500 mt-1.5">
                            </span>
                        }
                        <span className="font-normal ml-1.5">
                            {isOnline === true ? 'Online' : 'Offline'}
                        </span>
                    </p>
                </div>
            }
        </>
    )
}

export default ContentAdvisorCard