import React from 'react'

import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Minha Carteira" />
                <Title> Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <Link to="/dashboard" style={{textDecoration:"none"}}>
                    <MenuItemLink >
                        <MdDashboard />
                    DashBoard
                </MenuItemLink>
                </Link>


                <Link to="/list/entry" style={{textDecoration:"none"}}>
                    <MenuItemLink>
                        <MdArrowUpward />
                   Entradas
                </MenuItemLink>
                </Link>

                <Link to="/list/exit" style={{textDecoration:"none"}}>
                    <MenuItemLink >
                        <MdArrowDownward />
                    Saídas
                </MenuItemLink>
                </Link>

                <MenuItemLink href="#">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>

        </Container>
    )
}

export default Aside;
