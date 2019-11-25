import React from 'react';
import styled, { css } from 'styled-components';
import posed from 'react-pose';
import { useTracked, actions } from 'state';
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

const Player: React.FC<Props> = ({
    id,
    color,
    firstName,
    lastName,
    number,
    x,
    y,
    thumbnail,
    i,
}) => {
    const [{ activePlayerId, mouseOverPlayerId, playersVisible }, dispatch]: any = useTracked();

    const handleClick = () => dispatch({ type: actions.SET_ACTIVE_PLAYER, value: id });

    const handleMouseOver = () =>
        !activePlayerId && dispatch({ type: actions.SET_MOUSEOVER_PLAYER, value: id });

    const handleMouseOut = () => !activePlayerId && dispatch({ type: actions.SET_MOUSEOUT_PLAYER });

    let pose = playersVisible ? 'visible' : 'hidden';

    if ([mouseOverPlayerId, activePlayerId].includes(id)) {
        pose = 'hover';
    }

    const name = firstName ? `${firstName} ${lastName}` : lastName;

    return (
        <Root
            i={i}
            x={x}
            y={y}
            active={activePlayerId === id}
            focusing={activePlayerId}
            mouseOver={mouseOverPlayerId === id}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={handleClick}
            visible={playersVisible}
        >
            <ShadowWrap>
                <PosedShadow pose={pose} i={i} />
            </ShadowWrap>
            <PosedPlayer pose={pose} i={i}>
                <Name>
                    <span>{name}</span>
                </Name>
                <img src={`/img/${thumbnail}`} />
                <PlayerBg />
                <Number bgColor={color}>{number}</Number>
            </PosedPlayer>
        </Root>
    );
};

type PlayerType = {
    i: number;
    x: number;
    y: number;
    active: boolean;
    focusing: boolean;
    mouseOver: boolean;
    visible?: boolean;
};

const playerInactiveStyles = css`
    opacity: 0.33;
`;

const PlayerBg = styled.div`
    ${absoluteFill}
    background-image: radial-gradient(#fff, #bbb);
    border-radius: 50%;
    backface-visibility: hidden;
    opacity: 0.9;
    transition: opacity 600ms;
`;

const playerBgHoverStyles = css`
    transition: opacity 300ms;
    opacity: 1;
`;

const nameHoverStyles = css`
    opacity: 1;
    transform: translateY(0);
`;

const Name = styled.div`
    position: absolute;
    font-size: 1.1em;
    display: block;
    bottom: 110%;
    width: 260px;
    pointer-events: none;
    left: -999px;
    right: -999px;
    margin: auto;
    white-space: nowrap;
    text-align: center;
    opacity: 0;
    transform: translateY(0.66em);
    transition: all 200ms;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
        display: inline-block;
        background: ${p => p.theme.colors.bgDefault};
        color: ${p => p.theme.colors.textDefault};
        padding-left: 0.5em;
        padding-right: 0.5em;
        border-radius: 0.6em;
        height: 1.4em;
        line-height: 1.4;
        font-weight: 600;
    }
`;

const Root = styled.div<PlayerType>`
    position: absolute;
    width: 9%;
    top: ${p => p.y}%;
    left: ${p => p.x}%;
    transform-style: preserve-3d;
    transform-origin: 50% 0;
    transform: ${getTransformString(defaultTransform)};
    opacity: ${p => (p.visible ? 1 : 0)};
    transition: opacity 600ms;
    transition-delay: ${p => p.i * 20}ms;

    ${p => !p.visible && 'pointer-events: none;'}
    ${p => p.focusing && !p.active && 'pointer-events: none'};
    ${p => (p.mouseOver || p.active) && `${PlayerBg} {${playerBgHoverStyles}}`}
    ${p => p.mouseOver && !p.active && `${Name} {${nameHoverStyles}}`}
    ${p => p.focusing && !p.active && playerInactiveStyles};
`;

const Number = styled.div<{ bgColor: string }>`
    position: absolute;
    height: 30%;
    width: 30%;
    top: 0;
    right: -10%;
    background-color: ${p => p.bgColor};
    color: #fff;
    display: flex;
    font-size: 1em;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
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
    background-color: black;
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
        translateY: '-100%',
        delay: ({ i }) => i * 20,
    },
    visible: {
        translateY: '-15%',
        duration: 150,
        scale: 1,
        transition: { type: 'spring' },
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

export default Player;
