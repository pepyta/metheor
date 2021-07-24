import React from "react";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { useWallet } from "../providers/WalletProvider";
import BalanceInformation from "../wallet/BalanceInformation";

export type LandingScreenProps = {};

const LandingScreen = (props: LandingScreenProps) => {
    const { wallet } = useWallet();

    return (
        <View>
            <BalanceInformation />
        </View>
    );
};

export default LandingScreen;