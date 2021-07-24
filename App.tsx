import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import MainNavigator from "./components/navigators/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-paper";

export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider>
                <StatusBar style="auto" />
                <MainNavigator />
            </ThemeProvider>
        </NavigationContainer>
    );
}
