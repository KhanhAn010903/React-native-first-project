import { APP_COLOR } from "@/utils/constant";
import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo"
const HeaderHome = () => {
    return (
        <View>
            <Text>Address</Text>
            <View style={styles.container}>
                <Text style={{ paddingLeft: 5 }}>Giao den: </Text>
                <View style={styles.location}>
                    <Entypo name="location-pin" size={20} color={APP_COLOR.ORANGE} />
                    <Text>669 Hoan Kiem, Ha Noi</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        gap: 3
    },
    location: {
        flexDirection: "row",
        alignItems: "flex-end",
    }
})
export default HeaderHome;