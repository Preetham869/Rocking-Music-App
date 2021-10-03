import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import EnglishSongs from '../screens/EnglishSongs';
import TeluguSongs from '../screens/TeluguSongs';
import HindiSongs from '../screens/HindiSongs'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="EnglishSongs" component={EnglishSongs} />
            <Drawer.Screen name="TeluguSongs" component={TeluguSongs} />
            <Drawer.Screen name="HindiSongs" component={HindiSongs} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;