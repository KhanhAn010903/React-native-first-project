import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { APP_COLOR } from "@/utils/constant";
import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpPage = () => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <View style={styles.container}>
                <View>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 600,
                        margin: 30
                    }}>Đăng ký tài khoản</Text>
                </View>
                <ShareInput
                    title="Họ và tên"
                />
                <ShareInput
                    title="Email"
                    keyboardType="email-address"
                />
                <ShareInput
                    title="Password"
                />
                <View style={{ marginVertical: 10 }}></View>
                <ShareButton
                    title="Đăng ký"
                    onPress={() => { alert("me") }}
                    textStyle={{
                        color: "#fff",
                        paddingVertical: 5,
                        textTransform: "uppercase"
                    }}
                    btnStyle={{
                        justifyContent: "center",
                        borderRadius: 30,
                        marginHorizontal: 50,
                        paddingVertical: 10,
                        backgroundColor: APP_COLOR.ORANGE,
                    }}
                    pressStyle={{ alignSelf: "stretch" }}
                />
                <View style={{
                    marginVertical:15,
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "center"
                }}>
                    <Text style={{ color: "black" }}>Đã có tài khoản?</Text>
                    <Link href={"/(auth)/signup"}>
                        <Text style={{ color: "black", textDecorationLine: "underline" }}>
                            Đăng ký.
                        </Text>
                    </Link>

                </View>
                <SocialButton />
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        gap: 10
    },
})
export default SignUpPage;