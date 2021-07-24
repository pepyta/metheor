import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";

const MainStack = createStackNavigator();

const MainNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name={"welcome"}
                component={WelcomeScreen}
            />
        </MainStack.Navigator>
    );
};

export default MainNavigator;