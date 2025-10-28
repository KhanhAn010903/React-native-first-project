import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"
interface IProps {
    todoList: ITodo[],
    deleteTodo: (v: number) => void;
}
const ListTodo = (props: IProps) => {
    const {todoList,deleteTodo} = props;
    return (
        <>
            <FlatList
                data={todoList}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                             <Text key={item.id} style={styles.todo}>{item.title}</Text>
                        </TouchableOpacity>
                       
                    )
                }}
            />
        </>
    )
}
const styles = StyleSheet.create({

    todo: {
        fontSize: 30,
        backgroundColor: "pink",
        marginBottom: 20,
        padding: 15,
    },

})
export default ListTodo