import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import MainNavigator from "./components/navigators/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-paper";
import WalletProvider from "./components/providers/WalletProvider";

export default function App() {
    return (
        <NavigationContainer>
            <ThemeProvider>
                <WalletProvider>
                    <StatusBar style="auto" />
                    <MainNavigator />
                </WalletProvider>
            </ThemeProvider>
        </NavigationContainer>
    );
}
