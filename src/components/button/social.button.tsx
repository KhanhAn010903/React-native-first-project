import { Image, StyleSheet, View } from "react-native";
import TextBetweenLine from "./text.between.line";
import ShareButton from "./share.button";
import facebookLogo from '@/assets/auth/facebook.png';
import googleLogo from '@/assets/auth/google.png';
interface IProps{
    title : string
}
const SocialButton = (props : IProps) => {
    const {title} = props;
    return (
        <View style={styles.welcomeBtn}>
            <TextBetweenLine
                textColor="black" 
                title={title} />
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
                        <Image source={facebookLogo} />
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
                        <Image source={googleLogo} />
                    } />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    welcomeBtn: {
flex:1,
gap:30
    },
});
export default SocialButton;