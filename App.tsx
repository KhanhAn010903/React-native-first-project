import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("Khanh An");
  const [age, setAge] = useState<number>(30);
  const [person, setPerson] = useState({
    name: "Khánh An",
    age: 25
  });

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Khanh An IT" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7 " },
    { id: 8, title: "Tony Kross" }
  ])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
        <TextInput
          onChangeText={() => { setName(name) }}
          value={name}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='numeric'
          maxLength={2}
          multiline
          style={{
            borderColor: "violet",
            borderWidth: 1,
            padding: 10
          }} />
      </View>
      <Button title='Add' onPress={() => alert("tap me")} />
      <View style={{ marginTop: 20,overflow:"scroll" }}>
        {todoList.map(todo => {
          return (
            <Text style={styles.todo}>{todo.title}</Text>
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 15,
  },
  hoidanit: {
    color: "green",
  },
  text: {
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60, color: "red",
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 150
  },
});
