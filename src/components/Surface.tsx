import React from 'react';
import styled, { css } from 'styled-components';
import Net from './Net';
import { absoluteFill } from 'utils/style';

type Props = {
    active: boolean;
};

const Surface: React.FC<Props> = ({ active }) => {
    return (
        <Root active={active}>
            <Stripes>
                {Array.from(Array(17).keys()).map(s => (
                    <Stripe key={s} />
                ))}
            </Stripes>
            <Lines>
                <Perimeter />
                <Halfway />
                <Circle />
                <PenaltyBoxArc />
                <PenaltyBoxArc right />
                <PenaltyBox right />
                <PenaltyBox />
                <PenaltyBoxInner />
                <PenaltyBoxInner right />
                <Spot></Spot>
            </Lines>
            <Net />
            <Net right />
            <Overlay />
            <Edge position="top" />
            <Edge position="right" />
            <Edge position="bottom" />
            <Edge position="left" />
        </Root>
    );
};

export const PERMIETER = 4;
const LINE_WIDTH = 5;
const EDGE_HEIGHT = 12;

const Lines = styled.div`
    ${absoluteFill}
`;

const rootActiveStyles = css`
    background-color: ${p => p.theme.colors.bgFieldActive};

    ${Lines} {
        opacity: 0.3;
        transition: all 400ms;
    }
`;

const Root = styled.div<Props>`
    ${absoluteFill}
    pointer-events: none;
    background-color: ${p => p.theme.colors.bgField};
    transition: all 400ms;
    opacity: 1;
    ${p => p.active && rootActiveStyles}
`;

const Stripes = styled.div`
    ${absoluteFill}
    display: flex;

    > * {
        flex: 1;

        &:nth-child(odd) {
            background-color: rgba(0, 0, 0, 0.06);
        }
    }
`;

const Stripe = styled.div``;

const Spot = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 2%;
    height: 2%;
    border-radius: 50%;
    margin: auto;
    background-color: ${p => p.theme.colors.bgFieldLine};
`;

const Perimeter = styled.div`
    position: absolute;
    top: ${PERMIETER * 1.6}%;
    bottom: ${PERMIETER * 1.6}%;
    left: ${PERMIETER}%;
    right: ${PERMIETER}%;
    border: ${LINE_WIDTH}px solid ${p => p.theme.colors.bgFieldLine};
`;

const Halfway = styled.div`
    width: ${LINE_WIDTH}px;
    position: absolute;
    top: ${PERMIETER * 1.6}%;
    bottom: ${PERMIETER * 1.6}%;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${p => p.theme.colors.bgFieldLine};
`;

const Circle = styled.div`
    position: absolute;
    width: 15%;
    height: 15%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 50%;
    border: ${LINE_WIDTH}px solid ${p => p.theme.colors.bgFieldLine};
`;

const PenaltyBox = styled.div<{ right?: boolean }>`
    position: absolute;
    bottom: 0;
    top: 0;
    height: 48%;
    width: 15%;
    left: ${PERMIETER}%;
    margin: auto;
    border: ${LINE_WIDTH}px solid ${p => p.theme.colors.bgFieldLine};
    ${p => p.right && `right: ${PERMIETER}%; left: auto;`}
`;

const PenaltyBoxInner = styled.div<{ right?: boolean }>`
    position: absolute;
    left: ${PERMIETER}%;
    height: 15%;
    width: 5%;
    top: 0;
    bottom: 0;
    margin: auto;
    border: ${LINE_WIDTH}px solid ${p => p.theme.colors.bgFieldLine};
    ${p => p.right && `right: ${PERMIETER}%; left: auto;`}
`;

const PenaltyBoxArc = styled.div<{ right?: boolean }>`
    position: absolute;
    left: ${15 + PERMIETER}%;
    height: 15%;
    width: 5%;
    top: 0;
    bottom: 0;
    margin: auto;
    overflow: hidden;
    ${p => p.right && `right: ${15 + PERMIETER}%; left: auto;`}

    /* Use a psuedo element for the line and the parent as a mask */
    &::before {
        ${absoluteFill}
        width: 300%;
        border: ${LINE_WIDTH}px solid ${p => p.theme.colors.bgFieldLine};
        border-radius: 50%;
        content: '';
        ${p => (p.right ? `transform: translateX(5%);` : `transform: translateX(-75%);`)}
    }
`;

const edgeTopStyles = `
    height: ${EDGE_HEIGHT}px;
    width: 100%;
    bottom: 100%;
    transform-origin: 0 100%;
    transform: rotateX(90deg);
`;

const edgeRightStyles = `
    height: 100%;
    width: ${EDGE_HEIGHT}px;
    left: 100%;
    transform: rotateY(90deg);
    transform-origin: 0 100%;
`;

const edgeBottomStyles = `
    height: ${EDGE_HEIGHT}px;
    width: 100%;
    top: 100%;
    transform-origin: 0 0;
    transform: rotateX(-90deg);
`;

const edgeLeftStyles = `
    height: 100%;
    width: ${EDGE_HEIGHT}px;
    right: 100%;
    transform: rotateY(-90deg);
    transform-origin: 100% 100%;
`;

const Edge = styled.div<{ position: 'top' | 'right' | 'bottom' | 'left' }>`
    position: absolute;
    background: ${p => p.theme.colors.bgFieldEdge};
    ${p => p.position === 'top' && edgeTopStyles}
    ${p => p.position === 'right' && edgeRightStyles}
    ${p => p.position === 'bottom' && edgeBottomStyles}
    ${p => p.position === 'left' && edgeLeftStyles}
`;

const Overlay = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-image: linear-gradient(
        to bottom,
        ${p => p.theme.colors.bgDefault},
        ${p => `${p.theme.colors.bgDefault}00`}
    );
    opacity: 0.45;
    pointer-events: none;
`;

export default Surface;
