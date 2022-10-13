
const ButtonCard = ({ isShowBodyCard, setIsShowBodyCard }) => {
    return (
        <div className="w-full flex justify-center mt-4">
            <button
                className="font-bold text-base text-white bg-[#1ebadda3] inline-block px-[10px] py-1.5 border-[1px] rounded-xl
                    hover:bg-white hover:text-[#1ebadda3]"
                onClick={() => setIsShowBodyCard(!isShowBodyCard)}
            >
                {isShowBodyCard === false ? 'Xem thêm' : 'Ẩn bớt'}
            </button>
        </div>
    )
}

export default ButtonCard