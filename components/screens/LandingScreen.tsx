import React from "react";
import { View } from "react-native";
import BalanceInformation from "../wallet/BalanceInformation";

export type LandingScreenProps = {};

const LandingScreen = (props: LandingScreenProps) => {
    return (
        <View>
            <BalanceInformation />
        </View>
    );
};

export default LandingScreen;