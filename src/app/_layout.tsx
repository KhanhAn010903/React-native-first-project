import { Slot, Stack } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{headerShown:false}}/>
            <Stack.Screen
                name="(tabs)"
                options={{ headerTitle: "Trang chủ" }} />
            <Stack.Screen
                name="product/index"
                options={{ headerTitle: "Sản phẩm" }} />
        </Stack>
    )
}
export default RootLayout;