import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import ShareButton from "components/button/share.button"
import { APP_COLOR } from "utils/constant"
import bg from '@/assets/auth/welcome-background.png';
import facebookLogo from '@/assets/auth/facebook.png';
import googleLogo from '@/assets/auth/google.png';
import { LinearGradient } from "expo-linear-gradient";
import TextBetweenLine from "@/components/button/text.between.line";
const WelcomePage = () => {
    return (
        <ImageBackground
            style={{
                flex: 1
            }}
            source={bg}
        >
            <LinearGradient
                style={{flex:1}}
                colors={['transparent' , '#191B2F']}
                locations={[0.2,0.8]}
            >
            <View style={styles.container}>
                <View style={styles.welcomeText}>
                    <Text style={styles.heading}>
                        Welcome to
                    </Text>
                    <Text style={styles.body}>
                        @Kan - Food
                    </Text>
                    <Text style={styles.footer}>
                        Nền tảng giao đồ ăn trực tuyến hàng đầu Việt Nam
                    </Text>
                </View>
                <View style={styles.welcomeBtn}>
                    <TextBetweenLine title="Đăng nhập với"/>
                    {/* <View style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "red",
                        marginHorizontal: 50
                    }}>
                        <Text style={{
                            padding: 10,
                            textAlign: "center",
                            backgroundColor: "white",
                            alignSelf: "center",
                            position: "relative",
                            top: 20
                        }}>Đăng nhập với</Text>
                    </View> */}
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 30,
                    }}>
                        <ShareButton
                            title="facebook"
                            onPress={() => { alert("me") }}
                            textStyle={{ textTransform: "lowercase" }}
                            btnStyle={{
                                justifyContent: "center",
                                borderRadius: 30,
                                backgroundColor: "#fff"
                            }}
                            icons={
                               <Image source={facebookLogo}/>
                            } />
                        <ShareButton
                            title="google"
                            onPress={() => { alert("me") }}
                            textStyle={{ textTransform: "lowercase" }}

                            btnStyle={{
                                justifyContent: "center",
                                borderRadius: 30,
                                paddingHorizontal: 20,
                                backgroundColor: "#fff"
                            }}
                            icons={
                               <Image source={googleLogo}/>
                            } />
                    </View>
                    <View>
                        <ShareButton
                            title="Đăng nhập với email"
                            onPress={() => { alert("me") }}
                            textStyle={{ color: "#fff", paddingVertical: 5 }}
                            btnStyle={{
                                justifyContent: "center",
                                borderRadius: 30,
                                marginHorizontal: 50,
                                paddingVertical: 10,
                                backgroundColor: "#2c2c2c",
                                borderColor:"#505050",
                                borderWidth:1
                            }}
                            pressStyle={{ alignSelf: "stretch" }}
                        />
                    </View>
                    <View style={{
                        flexDirection:"row",
                        gap:10,
                        justifyContent:"center"
                    }}>
                        <Text style={{color:"white" }}>Chưa có tài khoản?</Text>
                        <Text style={{color:"white",textDecorationLine:"underline"}}>

                        </Text>
                    </View>
                </View>
            </View>
            </LinearGradient>
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:15
    },
    welcomeText: {
        flex: 0.6,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 20
    },
    welcomeBtn: {
        flex: 0.4,
        gap: 20
    },
    heading: {
        fontSize: 40,
        fontWeight: "600"
    },
    body: {
        fontSize: 30,
        color: APP_COLOR.ORANGE,
        marginVertical: 10,
    },
    footer: {

    },
})

export default WelcomePage;