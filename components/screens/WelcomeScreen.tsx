import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Subheading, Button } from "react-native-paper";
import { ethers } from "ethers";
import { useWallet } from "../providers/WalletProvider";

export type WelcomeScreenProps = {};

const WelcomeScreen = (props: WelcomeScreenProps) => {
    const { setWallet } = useWallet();

    const createWallet = async () => {
        const wallet = ethers.Wallet.createRandom();
        setWallet(wallet);
    };
    
    return (
        <View style={styles.root}>
            <Title style={styles.row}>
                Welcome to Metheor!
            </Title>
            <Subheading style={styles.row}>
                This application is an Ethereum wallet created for a Twitch stream.
            </Subheading>
            <Button
                style={[styles.row, styles.button]}
                mode={"contained"}
                onPress={() => createWallet()}
            >
                Start
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        margin: 12,
    },
    row: {
        marginVertical: 4,
    },
    button: {
        marginTop: 12,
        width: 200,
        alignSelf: "center",
    },
});

export default WelcomeScreen;