import HomeScreen from './screens/HomeScreen/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './app/store';
import {Provider} from 'react-redux';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const tabImages = {
  home: {
    filled: require('./assets/home.png'),
    outline: require('./assets/home-outline.png'),
  },
};

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? tabImages.home.filled
                  : tabImages.home.outline;
              }

              return (
                <Image
                  source={iconName}
                  style={{
                    height: 30,
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              );
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarShowLabel: false,
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);

export default App;
