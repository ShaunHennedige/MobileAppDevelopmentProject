import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext, Roles} from '../util/AuthContext';
import Icon from '@expo/vector-icons/FontAwesome';
import Home from './Home';
import Map from './Map';
import Scanner from './Scanner';
import Admin from './Admin';
import Profile from './Profile';
import Payment from './Payment';
import Checkout from '../util/Checkout';

const UserTabs = createBottomTabNavigator();
const UserTabsScreen = () => {
  const {userData} = React.useContext(AuthContext);

  return (
    <UserTabs.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color, size}) => {
          let iconname: any;

          switch (route.name) {
            case 'Dashboard':
              iconname = 'home';
              break;
            case 'Map':
              iconname = 'map';
              break;
            case 'Scanner':
              iconname = 'qrcode';
              break;
            case 'Admin':
              iconname = 'info-circle';
              break;
            case 'Profile':
              iconname = 'user';
              break;
            case 'Payment':
              iconname = 'paypal';
              break;
            case 'Checkout':
              iconname = 'check-square-o';
              break;
          }
          return <Icon name={iconname} color={color} size={size} />;
        },
      })}>
      {userData.role === Roles.Driver ? (
        <>
          <UserTabs.Screen name="Dashboard" component={Home} />
          <UserTabs.Screen name="Admin" component={Admin} />
          <UserTabs.Screen name="Profile" component={Profile} />
        </>
      ) : userData.role === Roles.User ? (
        <>
          <UserTabs.Screen name="Dashboard" component={Home} />
          <UserTabs.Screen
            name="Map"
            component={Map}
            options={{headerShown: false}}
          />
          <UserTabs.Screen name="Scanner" component={Scanner} />
          {/* <UserTabs.Screen name="Checkout" component={Checkout} /> */}
          <UserTabs.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <UserTabs.Screen name="Dashboard" component={Home} />
          <UserTabs.Screen name="Scanner" component={Scanner} />
          <UserTabs.Screen name="Profile" component={Profile} />
        </>
      )}
    </UserTabs.Navigator>
  );
};
export {UserTabsScreen};
