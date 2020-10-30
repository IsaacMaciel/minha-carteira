import React from "react";
import { ToggleLabel, Container, ToggleSelector } from "./styles";

interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
    labelLeft,
    labelRight,
    checked,
    onChange,
}) => (
    <Container>
        <ToggleLabel>{labelLeft}</ToggleLabel>
        <ToggleSelector
            uncheckedIcon={false}
            checkedIcon={false}
            checked={checked}
            onChange={onChange}
        />
        <ToggleLabel>{labelRight}</ToggleLabel>
    </Container>
);

export default Toggle;
