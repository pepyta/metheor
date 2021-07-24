import { ethers } from "ethers";
import AppLoading from "expo-app-loading";
import React, { Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PropsWithChildren } from "react";
import { createContext } from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import * as SecureStore from "expo-secure-store";

export type WalletProviderProps = PropsWithChildren<{}>;

type WalletContextType = {
    wallet: ethers.Wallet;
    setWallet: (wallet: ethers.Wallet) => void;
};

const WalletContext = createContext<WalletContextType>(null);

export const useWallet = () => {
    const { wallet, setWallet: updateWallet } = useContext(WalletContext);

    const setWallet = async (wallet: ethers.Wallet) => {
        updateWallet(wallet);
        await SecureStore.setItemAsync("wallet", wallet.mnemonic.phrase);
    };

    return {
        wallet,
        setWallet,
    };
};

const WalletProvider = (props: WalletProviderProps) => {
    const [isFinished, setFinished] = useState(false);
    const [wallet, setWallet] = useState<ethers.Wallet>();
    const [error, setError] = useState<Error>();

    const load = async () => {
        try {
            setFinished(false);

            // load from secure storage
            const mnemonic = await SecureStore.getItemAsync("wallet");

            // if already stored
            if(mnemonic) { 
                setWallet(ethers.Wallet.fromMnemonic(mnemonic));
            }

            setFinished(true);
        } catch(e) {
            console.log(e);
            setError(e);
        }
    };

    const onError = () => {

    };

    useEffect(() => {
        load();
    }, []);

    if(!isFinished) {
        return (
            <AppLoading />
        );
    }

    return (
        <WalletContext.Provider value={{ wallet, setWallet }}>
            {!wallet ? (
                // Ha még nincs wallet akkor mutassuk az üdvözlő képernyőt
                <WelcomeScreen />
            ) : (
                // Ha már van, akkor haladjon tovább
                props.children
            )}
        </WalletContext.Provider>
    );
};

export default WalletProvider;