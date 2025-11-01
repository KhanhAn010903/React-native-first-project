import { router } from "expo-router"
import { Text, View } from "react-native"

const AppRoot = () => {
    const handleLogin = () => {
        router.navigate("./login");
    }
    return (
        <View>
            <Text>Hello world with expo router</Text>
        </View>
    )
}

export default AppRoot;