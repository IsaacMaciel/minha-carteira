import styled from "styled-components";
import Aside from "../Aside";

// MH = Main Header
// AS = Aside
// CT =  Content

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas:
        "AS MH"
        "AS CT";

    height: 100vh;
    min-width: 315px;

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 70px auto;

        grid-template-areas:
            "MH"
            "CT";
    }
`;
