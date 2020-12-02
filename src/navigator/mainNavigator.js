import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps181148Navigator from '../features/Maps181148/navigator';
import Settings181126Navigator from '../features/Settings181126/navigator';
import Settings181111Navigator from '../features/Settings181111/navigator';
import NotificationList181110Navigator from '../features/NotificationList181110/navigator';
import Maps181109Navigator from '../features/Maps181109/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps181148: { screen: Maps181148Navigator },
Settings181126: { screen: Settings181126Navigator },
Settings181111: { screen: Settings181111Navigator },
NotificationList181110: { screen: NotificationList181110Navigator },
Maps181109: { screen: Maps181109Navigator },

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
