import { Slot, Stack } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {
    return (
        // <View style={{padding:50}}>
        //     <Text>Header</Text>
        //     <Slot/>
        //     <Text>Footer</Text>
        // </View>
        <Stack>
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