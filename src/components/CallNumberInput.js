import { View, Text, StyleSheet } from 'react-native'

const CallNumberInput = ({phoneNumber = "(+52) 2216292266"}) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.textStyle}>{phoneNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        //backgroundColor: "red",
        width: "95%",
    },
    textStyle: {
        color: "#fff",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: '500',
        textAlign: "center",
        //backgroundColor: "#000000c0"
    } 
})

export default CallNumberInput