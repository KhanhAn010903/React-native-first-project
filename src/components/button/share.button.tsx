import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native"
import { ReactNode } from "react";
import { APP_COLOR } from "@/utils/constant";
interface IProps {
    title : string;
    onPress : () => void;
    textStyle? : StyleProp<TextStyle>;
    pressStyle? : StyleProp<TextStyle>;
    btnStyle? : StyleProp<TextStyle>;
    icons? :ReactNode;
}
const ShareButton = (props : IProps) => {
    const {title,onPress,textStyle,pressStyle,btnStyle,icons} = props;
    return (
        <>
        <Pressable 
        style={({pressed}) => ([{
            opacity:pressed === true ? 0.5:1,
            alignSelf:"flex-start",
        }, pressStyle])}
        onPress={onPress}>
            <View style={[styles.btnContainer,btnStyle]}>
                {icons}
              
                <Text style={textStyle}>{title}</Text>
            </View>
        </Pressable>

        </>
    )
}
const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical:5,
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        backgroundColor: APP_COLOR.ORANGE
    },
})
export default ShareButton;