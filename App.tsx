import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();
import {HomeScreen, WinScreen} from './screens';


export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Home"}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Win" component={WinScreen} />
          </Stack.Navigator>
      </NavigationContainer>


  );
}

