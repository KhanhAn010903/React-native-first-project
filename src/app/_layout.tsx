import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaView } from "react-native-safe-area-context";


const RootLayout = () => {
    return (
        <GestureHandlerRootView>
            <RootSiblingParent>
                <SafeAreaView style={{ flex: 1 }}>
                    <Stack>
                        <Stack.Screen
                            name="index"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            name="(auth)/login"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            name="(auth)/signup"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            name="(auth)/verify"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            name="(tabs)"
                            options={{ headerShown: false }} />
                        <Stack.Screen
                            name="product/index"
                            options={{ headerTitle: "Sản phẩm" }} />
                    </Stack>
                </SafeAreaView>

            </RootSiblingParent>
        </GestureHandlerRootView>


    )
}
export default RootLayout;