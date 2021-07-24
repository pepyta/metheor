import { ethers } from "ethers";
import AppLoading from "expo-app-loading";
import React, { Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PropsWithChildren } from "react";
import { createContext } from "react";
import WelcomeScreen from "../screens/WelcomeScreen";

export type WalletProviderProps = PropsWithChildren<{}>;

type WalletContextType = {
    wallet: ethers.Wallet;
    setWallet: (wallet: ethers.Wallet) => void;
};

const WalletContext = createContext<WalletContextType>(null);

export const useWallet = () => useContext(WalletContext);

const WalletProvider = (props: WalletProviderProps) => {
    const [isFinished, setFinished] = useState(false);
    const [wallet, setWallet] = useState<ethers.Wallet>();
    const [error, setError] = useState<Error>();

    const load = async () => {
        try {
            setFinished(false);

            // TODO: loading mechanism

            setFinished(true);
        } catch(e) {
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