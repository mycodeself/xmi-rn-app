import { StackNavigator } from 'react-navigation'
import LoginScreen from '../containers/LoginContainer'
import SignUpScreen from '../containers/SignUpContainer'
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const AuthStack = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  SignUp: {
    screen: SignUpScreen
  },
  ForgotPassword: {
    screen: ForgotPasswordScreen
  },
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

export default AuthStack