import React from 'react';
import styled, { css } from 'styled-components';
import { absoluteFill } from 'utils/style';

const Net: React.FC<{ right?: boolean }> = ({ right }) => {
    return (
        <Root right={right}>
            <Back>
                <Top right={right} />
            </Back>
            <Side></Side>
            <Side top></Side>
        </Root>
    );
};

export default Net;

const Back = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    width: 90%;
    transform: rotateY(-90deg);
    transform-origin: 0 0;
    border: 3px solid ${(p) => p.theme.colors.bgNetPost};
    border-left: 0;
    transform-style: preserve-3d;
`;

const Side = styled.div<{ top?: boolean }>`
    bottom: 0;
    width: 90%;
    left: 0;
    height: 30%;
    transform: rotateY(-90deg) rotateX(90deg);
    transform-origin: 0 100%;
    border: 2px solid ${(p) => p.theme.colors.bgNetPost};
    border-left: 0;
    border-bottom: 0;
    ${(p) => p.top && `bottom: 100%; top: auto; `}
`;

const Top = styled.div<{ right?: boolean }>`
    ${absoluteFill}
    width: 60%;
    top: -4px;
    left: 40%;
    transform: rotateY(-90deg);
    transform-origin: 100% 100%;
    transform-style: preserve-3d;
    background-color: rgba(255, 255, 255, 0.3);
    border-left: 2px solid ${(p) => p.theme.colors.bgNetPost};
    ${(p) => p.right && `transform: rotateY(90deg);`}
`;

const rootRightStyles = css`
    right: 1.2%;
    left: auto;

    ${Side} {
        transform: rotateX(-90deg);
        right: 0;
        left: auto;
        width: 60%;
        height: 50%;
        border-left: 2px solid ${(p) => p.theme.colors.bgNetPost};
    }

    ${Top} {
        width: 60%;

        &::before {
            transform: rotateX(-26deg) translateX(80%);
            border-left: 2px solid ${(p) => p.theme.colors.bgNetPost};
            border-right: 0;
        }
    }

    ${Back} {
        transform-origin: 0 0;
        transform: none;
        transform: rotateY(-90deg);
        left: 100%;
        right: auto;
        border-top: 0;
    }
`;

const Root = styled.div<{ right?: boolean }>`
    position: absolute;
    left: 1.2%;
    margin: auto;
    top: 0;
    bottom: 0;
    height: 15%;
    width: 5%;
    ${(p) => p.right && rootRightStyles};

    > * {
        position: absolute;
        background-size: 2px 2px;
        background-color: rgba(255, 255, 255, 0.3);
    }
`;
