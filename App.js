import React from 'react';
import { SplashScreen } from './screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GetStartedScreen } from './screens/getStarted';
import { NumberScreen } from './screens/number';
import { VerificationScreen } from './screens/verification';
import { LocationScreen } from './screens/location';
import { SinginScreen } from './screens/signin';
import { SingUpScreen } from './screens/signup';
import { Card } from './components/card';
import { Home } from './screens/home';
import { ProductDetailsScreen } from './screens/productDetails';
const stack = createNativeStackNavigator();

class App extends React.Component {
  render() {

    return (
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false, headerBackVisible: true }} initialRouteName='SplashScreen'  >
          <stack.Screen name='productDetails' component={ProductDetailsScreen} />
          <stack.Screen name='home' component={Home} />
          <stack.Screen name='card' component={Card} />
          <stack.Screen name='splash' component={SplashScreen} />
          <stack.Screen name='signup' component={SingUpScreen} />
          <stack.Screen name='signin' component={SinginScreen} />

          <stack.Screen name='getstarted' component={GetStartedScreen} />
          <stack.Screen name='verification' component={VerificationScreen} />
          <stack.Screen name='number' component={NumberScreen} />
          <stack.Screen name='location' component={LocationScreen} />
        </stack.Navigator>
      </NavigationContainer>

    )
  }
}
export default App;