import { StyleSheet, Text, View } from "react-native";

const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item3}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item4}>
                <Text>Item 1</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        borderWidth: 1,
        borderColor: "red",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item1: {
        padding:20,
        borderWidth: 1,
        backgroundColor: 'violet'
    },
    item2: {
        padding:20,
        borderWidth: 1,
        backgroundColor: 'green'
    },
    item3: {
        padding:20,
        borderWidth: 1,
        backgroundColor: 'orange'
    },
    item4: {
        padding:20,
        borderWidth: 1,
        backgroundColor: 'grey'
    },
})
export default FlexBox;