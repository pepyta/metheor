import React from "react";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { useWallet } from "../providers/WalletProvider";

export type LandingScreenProps = {};

const LandingScreen = (props: LandingScreenProps) => {
    const { wallet } = useWallet();

    return (
        <View>
            <Title>
                Welcome!
            </Title>
        </View>
    );
};

export default LandingScreen;