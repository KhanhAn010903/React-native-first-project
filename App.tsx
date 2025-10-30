import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  const HomeScreen = (props: any) => {
    const navigation = props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("Details")}
            title='Go to Detail' />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("Details",
              { userId: 1, name: "Khanh An" }
            )}
            title='Go user id = 1' />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button
            onPress={() => navigation.navigate("Details", {
              userId: 2, name: "An Dang"
            })}
            title='Go user id = 2' />
        </View>

      </View>
    );
  }
  const DetailsScreen = (props: any) => {
    const route: any = useRoute();
    const navigation: any = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>user id = {route.params.userId}</Text>
        <Button
          onPress={() => navigation.goBack()}
          title='Go back Home' />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "Trang chủ" }} />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={({ route }: { route: any }) => ({
            headerTitle: `Xem chi tiết ${route?.params?.userId ?? ""}`,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
