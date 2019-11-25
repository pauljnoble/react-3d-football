import React from 'react';
import styled from 'styled-components';
import { absoluteFill } from 'utils/style';

const Stage: React.FC = ({ children }) => {
    return (
        <Root>
            <Wrapper>
                <Inner>{children}</Inner>
            </Wrapper>
        </Root>
    );
};

const PERSPECTIVE_MULTIPLIER = 0.7;

const Root = styled.div`
    ${absoluteFill}
    top: -9999px;
    bottom: -9999px;
    height: auto;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
`;

const Wrapper = styled.div`
    position: relative;
    margin: auto;
    flex: 1;
    width: 100%;
    height: auto;
    max-width: ${p => p.theme.dimensions.maxWidth}px;
    transform: translateY(${p => p.theme.dimensions.yOffsetPercent}%);

    &::before {
        content: '';
        padding-top: 62%; /* 120 yards * 75 yards */
        display: block;
    }
`;

const Inner = styled.div`
    ${absoluteFill}
    perspective: ${100 * PERSPECTIVE_MULTIPLIER}vw;
    perspective-origin: 50% -100%; /* todo - this should depend on aspect ratio */

    @media (max-width: ${p => p.theme.dimensions.sidebarX + p.theme.dimensions.minWidth + 40}px) {
        perspective: ${p =>
            (p.theme.dimensions.sidebarX + p.theme.dimensions.minWidth + 40) *
            PERSPECTIVE_MULTIPLIER}px;
    }

    @media (min-width: ${p => p.theme.dimensions.sidebarX + p.theme.dimensions.maxWidth + 40}px) {
        perspective: ${p =>
            (p.theme.dimensions.sidebarX + p.theme.dimensions.maxWidth + 40) *
            PERSPECTIVE_MULTIPLIER}px;
    }
`;

export default Stage;
