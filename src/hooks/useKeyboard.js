import { Dimensions } from "react-native"

const WIDTH = Dimensions.get("window").width

const useKeyboard = () => {

    const getButtonWidth = () => {
        return ((WIDTH / 3) - 40)
    }

    return {
        getButtonWidth
    }
}

export default useKeyboard