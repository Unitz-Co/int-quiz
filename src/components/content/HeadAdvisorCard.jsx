
const HeaderAdvisorCard = ({ advisorItem }) => {

    const avatarUrl = advisorItem.avatarUrl

    return (
        <>
            <div className="w-full flex justify-center">
                {avatarUrl === null ?
                    <span
                        className="inline-block w-[120px] h-[120px] rounded-full bg-[#e7e7e7] 
                    shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
                    </span
                    >
                    :
                    <img
                        src={advisorItem.avatarUrl.url}
                        alt="avatar"
                        className="w-[120px] h-[120px] rounded-full shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]"
                    />
                }
            </div>
            <h3 className="font-bold mr-2 text-xl text-center my-4">
                {advisorItem.displayName}
            </h3>

        </>
    )
}

export default HeaderAdvisorCard