import React, { useState } from "react";

import logoImg from "../../assets/logo.svg";
import { Container, FormContainer, FormTitle, LogoContainer } from "./styles";

import { useAuth } from "../../hooks/auth";

import Input from "../../components/Input";
import Button from "../../components/Button";

const SingIng: React.FC = () => {
    const { signIn } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <Container>
            <LogoContainer>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </LogoContainer>

            <FormContainer
                onSubmit={() => {
                    signIn(email, password);
                }}
            >
                <FormTitle>Entrar</FormTitle>

                <Input
                    placeholder="e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                />
                <Input
                    placeholder="senha"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                />

                <Button type="submit">Acessar</Button>
            </FormContainer>
        </Container>
    );
};

export default SingIng;
