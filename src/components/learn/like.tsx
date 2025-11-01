import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const Like = () => {
    const navigation : any = useNavigation();
    return (
        <View>
            <Text>Like Component</Text>
             <Button
                            onPress={() => navigation.navigate("LikeDetail")}
                            title="go to like detail"/>
        </View>
    )
}
export default Like;