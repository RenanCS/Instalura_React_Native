/** @format */

//import {AppRegistry} from 'react-native';
import {createStackNavigator,} from 'react-navigation';
  
import Feed from './src/screens/Feed/index';
import Login from './src/screens/Login/Login';
import {name as appName} from './app.json';


const App = createStackNavigator({
    Login: { screen: Login },
    Feed: { screen: Feed },
  });

export default App;
// AppRegistry.registerComponent(appName, () => Login);
