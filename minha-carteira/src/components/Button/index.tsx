import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

type IInputProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Input: React.FC<IInputProps> = ({ children, ...rest }) => (
    <Container {...rest}>{children}</Container>
);

export default Input;
