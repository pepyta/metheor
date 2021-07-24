import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LandingScreen from "../screens/LandingScreen";

const MainStack = createStackNavigator();

const MainNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name={"landing"}
                component={LandingScreen}
            />
        </MainStack.Navigator>
    );
};

export default MainNavigator;