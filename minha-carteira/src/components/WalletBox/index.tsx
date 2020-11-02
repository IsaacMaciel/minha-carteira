import React, { useMemo } from "react";

import dollarImg from "../../assets/dollar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

import { Container } from "./styles";
import CountUp from "react-countup";

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerlabel: string;
    icon: "dolar" | "arrowUp" | "arrowDown";
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color,
}) => {
    const iconSelected = useMemo(() => {
        if (icon === "dolar") return dollarImg;
        if (icon === "arrowUp") return arrowUpImg;
        if (icon === "arrowDown") return arrowDownImg;
    }, [icon]);

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp
                    end={amount}
                    duration={1}
                    prefix={""}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title} />
        </Container>
    );
};

export default WalletBox;
