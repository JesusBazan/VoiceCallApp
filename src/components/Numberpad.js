import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import useKeyboard from "../hooks/useKeyboard"

const keyboard = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    ["*",0,"#"]
]

const Rowboard = ({arrButtons = []}) => {
    return(
        <View style={styles.ContainerRow}>
            {
                arrButtons.map((item,index) => {
                    return (
                        <ButtonBoard key={index} buttonValue={item} />
                    )
                })
            }
        </View>
    )
}

const ButtonBoard = ({buttonValue = ""}) => {
    const { getButtonWidth } = useKeyboard()

    return (
        <TouchableOpacity style={[
            styles.ContainerColumn,
            {
                width: getButtonWidth(), 
                height: getButtonWidth(), 
                borderRadius: getButtonWidth() / 2
            }]}>
            <Text style={styles.TextButtonStyle} >{buttonValue}</Text>
        </TouchableOpacity>
    )
}

const Numberpad = () => {
    return(
        <View style={styles.Container}>
            {
                keyboard.map((item, index) => {
                    return (
                        <Rowboard arrButtons={item} key={index}/>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        //backgroundColor: "red",
        width: "95%",
        height: "50%",
        display: "flex",
        flexDirection: "column"
    },
    ContainerRow: {
        //backgroundColor: "white",
        height: "25%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    ContainerColumn: {
        //backgroundColor: "green",
        //height: "100%",
        //width: "33%",
        alignItems: "center",
        justifyContent: "center"
    },
    TextButtonStyle: {
        color: "#fff",
        fontSize: 30,
        lineHeight: 84,
        fontWeight: '500',
        textAlign: "center",
    }
})

export default Numberpad