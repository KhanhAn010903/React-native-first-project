import { useState } from "react";
import { Alert, Button, Keyboard, StyleSheet, TextInput, TouchableNativeFeedback, View } from "react-native"

import MineButton from "../button/mine.button";
interface IProps {
    addTodo: (v: string) => void;
}
const InputTodo = (props: IProps) => {
    const { addTodo } = props;
    const [name, setName] = useState<string>("Khanh An");
    const handleAddNewTodo = () => {
        if (!name) {
            Alert.alert(
                "Thông tin không hợp lệ",
                "Tiêu đề không hợp lệ",
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log("Cancel pressed"),
                        style: 'cancel'
                    },
                    {
                        text: 'Ok con dê', onPress: () => console.log('OK pressed')
                    }
                ]
            )
        }
        addTodo(name);
        setName("")
    }
    return (
        <>
            <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ marginBottom: 20 }}>
                    <TextInput
                        onChangeText={() => { setName(name) }}
                        value={name}
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.todoInput} />

                    <Button title='Add' onPress={handleAddNewTodo} />
                </View>
                <MineButton title="add new" onPress={handleAddNewTodo} />
            </TouchableNativeFeedback>

        </>
    )
}

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    }
});

export default InputTodo