import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import JobDetailScreen from '../screens/JobDetailScreen';
import JobListingScreen from '../screens/JobListingScreen';
import LoginScreen from '../screens/LoginScreen';
import ColorTheme from '../theme/color.theme';
import {RootStackParamList} from './types.navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="JobListing"
        screenOptions={{
          headerStyle: {backgroundColor: ColorTheme.backgroundBrand},
          headerTintColor: ColorTheme.textReversed,
          contentStyle: {backgroundColor: ColorTheme.backgroundSecondary},
        }}>
        <RootStack.Screen
          name="JobListing"
          component={JobListingScreen}
          options={{title: 'Job Listing'}}
        />
        <RootStack.Screen
          name="JobDetail"
          component={JobDetailScreen}
          options={({
            route: {
              params: {screenTitle},
            },
          }) => ({
            title: screenTitle ? screenTitle : 'Job Detail',
          })}
        />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
          initialParams={{jobId: undefined}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
