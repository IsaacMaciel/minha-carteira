import React from 'react';
import { ToggleLabel, Container,ToggleSelector } from './styles'


const Toggle: React.FC = () => (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector 
        uncheckedIcon={false} 
        checkedIcon={false} 
        checked 
        onChange={() => console.log('mudou')} /
        >
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)

export default Toggle;