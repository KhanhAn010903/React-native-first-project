import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeDetail from './src/components/learn/home.detail';
import Home from './src/components/learn/home';
import Like from './src/components/learn/like';

const TabApp = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Like" component={Like} />
    </Tab.Navigator>
  )
}

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabApp}
          options={{ headerTitle: "Trang chủ", headerShown: false }} />
        <Stack.Screen
          name='Details'
          component={HomeDetail}
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
