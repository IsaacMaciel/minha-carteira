import React, { useState } from "react";

import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu,
} from "react-icons/md";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/themes";

import {
    Container,
    Header,
    LogImg,
    MenuContainer,
    MenuItemLink,
    Title,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter,
} from "./styles";

import Toggle from "../Toggle";

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() =>
        theme.title === "dark" ? true : false
    );

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    };

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    };

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
                </ToggleMenu>
                <LogImg src={logoImg} alt="Minha Carteira" />
                <Title> Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <MenuItemLink>
                        <MdDashboard />
                        DashBoard
                    </MenuItemLink>
                </Link>

                <Link to="/list/entry" style={{ textDecoration: "none" }}>
                    <MenuItemLink>
                        <MdArrowUpward />
                        Entradas
                    </MenuItemLink>
                </Link>

                <Link to="/list/exit" style={{ textDecoration: "none" }}>
                    <MenuItemLink>
                        <MdArrowDownward />
                        Saídas
                    </MenuItemLink>
                </Link>

                <MenuItemButton onClick={() => signOut()}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
};

export default Aside;
