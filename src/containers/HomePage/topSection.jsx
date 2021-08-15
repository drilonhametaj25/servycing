import React from "react"
import styled from "styled-components"

import TopSectionBackground from "../../images/landing-page.jpg"
import TheBestSpecialistsImg from "../../images/Work only with the best.png"

const TopSectionContainer = styled.div`
    width: 100%;
    height: 600px;
    background: url(${TopSectionBackground});
    background-position: 0px -50px;
    background-size: cover;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(38,70,83,0.9);
    display: flex;
    flex-direction: column;
`

const TopSectionInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const StandoutImage = styled.div`
    widht: 44em;
    height: 34em;
    img {
        width: 100%;
        height: 100%;
    }
`

export function TopSection(props) {
    return (
    <TopSectionContainer>
        <BackgroundFilter>
            <StandoutImage>
                <img src={TheBestSpecialistsImg} />
            </StandoutImage>
        </BackgroundFilter>
    </TopSectionContainer>
    )
}