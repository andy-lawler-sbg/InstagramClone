import HomeScreen from './screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './app/store';
import {Provider} from 'react-redux';

const Tab = createBottomTabNavigator();

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);

export default App;
