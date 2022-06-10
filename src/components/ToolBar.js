import { View, StyleSheet, TouchableOpacity } from 'react-native'
import useKeyboard from '../hooks/useKeyboard'
import { Ionicons } from '@expo/vector-icons'

const general_size = 0
//IoCallOutline

const ToolBar = () => {
    const {getButtonWidth} = useKeyboard()
    return (
        <View style={[styles.Container]}>
            <TouchableOpacity style={[
                styles.BtnCall,{
                    width: getButtonWidth() + general_size, 
                    height: getButtonWidth() + general_size,
                    borderRadius: (getButtonWidth() + general_size) / 2}]}
            >
                <Ionicons name="ios-call-outline" size={35} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        //backgroundColor: "red",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    BtnCall: {
        backgroundColor: "#03A63C",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ToolBar