import { BigNumber, ethers, providers } from "ethers";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import { ProgressBar, Title } from "react-native-paper";
import EtehereumIcon from "../icons/EthereumIcon";
import { useWallet } from "../providers/WalletProvider";

export type BalanceInformationProps = {};

const BalanceInformation = (props: BalanceInformationProps) => {
    const [balance, setBalance] = useState<BigNumber>(null);
    const { wallet } = useWallet();
    
    const load = async () => {
        try {
            const provider = providers.getDefaultProvider();
            
            const balance = await provider.getBalance(await wallet.getAddress());
            setBalance(balance);
        } catch(e) {

        }
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <View>
            {balance ? (
                <Title>
                    {balance.toString()} ETH
                </Title>
            ) : (
                <ProgressBar />
            )}
        </View>
    );
};

export default BalanceInformation;