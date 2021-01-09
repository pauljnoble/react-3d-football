import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { absoluteFill } from 'utils/style';

type Props = any;

const defaultTransform = {
    translateX: -50,
    translateY: -100,
    rotateX: -90,
    rotateY: 0,
};

const getTransformString = (styleObj: any) => {
    const properties = {
        rotateX: `(${styleObj.rotateX}deg)`,
        translateX: `(${styleObj.translateX}%)`,
        translateY: `(${styleObj.translateY}%)`,
        rotateY: `(${styleObj.rotateY}deg)`,
    };

    let transform = '';

    for (let key in properties) {
        transform = `${transform}${key}${properties[key]} `;
    }

    return transform;
};

const PlayerShadow: React.FC<Props> = ({
    id,
    color,
    nickname,
    x,
    y,
    i,
}) => {
    let pose = 'visible';

    return (
        <Root
            i={i}
            x={x}
            y={y}
            visible={true}
        >
            <ShadowWrap>
                <PosedShadow pose={pose} i={i} />
            </ShadowWrap>
            <PosedPlayer pose={pose} i={i}>
                <Number bgColor={color}>{`${x}x${y}`}</Number>
            </PosedPlayer>
        </Root>
    );
};

type PlayerType = {
    i: number;
    x: number;
    y: number;
    visible?: boolean;
};

const Root = styled.div<PlayerType>`
    position: absolute;
    width: 9%;
    top: ${p => p.y}%;
    left: ${p => p.x}%;
    transform-style: preserve-3d;
    transform-origin: 50% 0;
    transform: translateY(15%) ${getTransformString(defaultTransform)};
    opacity: ${p => (p.visible ? 1 : 0)};
    transition: all 600ms;
    transition-delay: ${p => p.i * 20}ms;
`;

const Number = styled.div<{ bgColor: string }>`
    position: absolute;
    // height: 50%;
    text-align: center;
    width: 100%;
    top: 35%;
    // right: 0;
    background-color: ${p => p.bgColor};
    color: #fff;
    display: flex;
    font-size: 1.2em;
    align-items: center;
    justify-content: center;
    // border-radius: 50%;
    z-index: 3;
    border: 1px solid #fff;
    font-weight: 700;
`;

const PlayerInner = styled.div<any>`
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: 50% 50%;
    border: 2px solid #fff;
    border-radius: 50%;
    transform-origin: 50% 100%;
    cursor: pointer;
    backface-visibility: hidden;
    // background-color: black;
    will-change: transform;

    img {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        z-index: 1;
        backface-visibility: hidden;
    }

    &::after {
        content: '';
        padding-top: 100%;
        display: block;
    }
`;

const PosedPlayer = posed(PlayerInner)({
    hidden: {
        translateY: '-50%',
        delay: ({ i }) => i * 20,
    },
    visible: {
        translateY: '-15%',
        duration: 150,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 10 },
        delay: ({ i }) => i * 20,
    },
    hover: {
        scale: 1.1,
        duration: 300,
    },
});

const ShadowWrap = styled.div`
    ${absoluteFill}
    transform-origin: 0 100%;
    transform: translateY(-15%) rotateX(89deg);
`;

const Shadow = styled.div`
    ${absoluteFill}
    border-radius: 50%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    z-index: 1;
    backface-visibility: hidden;
`;

const PosedShadow = posed(Shadow)({
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        delay: 600,
        duration: 300,
    },
});

export default PlayerShadow;
