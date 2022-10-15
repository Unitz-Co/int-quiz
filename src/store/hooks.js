import { useContext } from "react"
import Context from "./Context"

const useStore = () => {
    const [state, dispatch] = useContext(Context)

    return [state, dispatch]
}

export { useStore }