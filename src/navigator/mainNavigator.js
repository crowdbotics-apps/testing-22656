import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile175572Navigator from '../features/UserProfile175572/navigator';
import Tutorial175571Navigator from '../features/Tutorial175571/navigator';
import NotificationList175543Navigator from '../features/NotificationList175543/navigator';
import Settings175542Navigator from '../features/Settings175542/navigator';
import Settings175534Navigator from '../features/Settings175534/navigator';
import UserProfile175532Navigator from '../features/UserProfile175532/navigator';
import Dashboard12173957Navigator from '../features/Dashboard12173957/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile175572: { screen: UserProfile175572Navigator },
Tutorial175571: { screen: Tutorial175571Navigator },
NotificationList175543: { screen: NotificationList175543Navigator },
Settings175542: { screen: Settings175542Navigator },
Settings175534: { screen: Settings175534Navigator },
UserProfile175532: { screen: UserProfile175532Navigator },
Dashboard12173957: { screen: Dashboard12173957Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
