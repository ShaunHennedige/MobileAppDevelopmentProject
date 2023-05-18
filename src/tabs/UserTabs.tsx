import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext, Roles} from '../util/AuthContext';
import Icon from '@expo/vector-icons/FontAwesome';
import Home from './Home';
import Calender from './Calender';
import Admin from './Admin';
import Profile from './Profile';
import Courses from './Courses';

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
            case 'Calender':
              iconname = 'calendar';
              break;
            case 'Admin':
              iconname = 'info-circle';
              break;
            case 'Courses':
              iconname = 'info-circle';
              break;
            case 'Profile':
              iconname = 'user';
              break;
            case 'Checkout':
              iconname = 'check-square-o';
              break;
          }
          return <Icon name={iconname} color={color} size={size} />;
        },
      })}>
      {userData.role === Roles.Teacher ? (
        <>
          <UserTabs.Screen name="Dashboard" component={Home} />
          <UserTabs.Screen name="Admin" component={Admin} />
          <UserTabs.Screen name="Profile" component={Profile} />
          <UserTabs.Screen name="Courses" component={Courses} />
        </>
      ) : userData.role === Roles.Student ? (
        <>
          <UserTabs.Screen name="Dashboard" component={Home} />
          <UserTabs.Screen name="Courses" component={Courses} />
          <UserTabs.Screen name="Calender" component={Calender} />
          <UserTabs.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <UserTabs.Screen name="Dashboard" component={Home} />
          <UserTabs.Screen name="Calender" component={Calender} />
          <UserTabs.Screen name="Profile" component={Profile} />
        </>
      )}
    </UserTabs.Navigator>
  );
};
export {UserTabsScreen};
