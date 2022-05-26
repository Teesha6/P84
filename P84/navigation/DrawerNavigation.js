import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from "./TabNavigator"
import Profile from "../screens/Profile";
const Drawer = createDrawerNavigator ();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
 <Tab.Screen name="home" component={TabNavigator} />
        <Tab.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
       
    
  );
}

export default DrawerNavigator;