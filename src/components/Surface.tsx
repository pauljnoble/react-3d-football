import React from 'react';
import styled, { css } from 'styled-components';
import Net from './Net';
import FieldSVG from 'components/svgs/Field';
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
                <StyledFieldSVG />
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

const StyledFieldSVG = styled(FieldSVG)`
    position: absolute;
    width: ${100 - PERMIETER * 2}%;
    top: 2%;
    left: ${PERMIETER}%;
    right: ${PERMIETER}%;

    /* width: 100px;
    height: 100px; */
    path {
        stroke: ${p => p.theme.colors.bgFieldLine};
    }
`;

const Lines = styled.div`
    ${absoluteFill}
    transition: all 400ms;
`;

const rootActiveStyles = css`
    background-color: ${p => p.theme.colors.bgFieldActive};

    ${Lines} {
        opacity: 0.3;
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
    opacity: 0.5;
    pointer-events: none;
`;

export default Surface;
