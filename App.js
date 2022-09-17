import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginForm from './src/components/LoginForm';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={LoginForm} options={{ headerShown: false }}/> */}
            <Stack.Screen name="HomeScreen" component={ HomeScreen } />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;