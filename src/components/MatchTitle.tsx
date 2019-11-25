import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';
import { useTracked } from 'state';

const MatchTitle = () => {
    const [{ match, teams, isLoading, activePlayerId }]: any = useTracked();

    return (
        <Title isVisible={!isLoading} isFaded={!!activePlayerId}>
            <h1>
                {teams[0].title}
                <small>VS</small>
                {teams[1].title}
            </h1>
            <p>
                <Icon type="time" /> {match.time}&nbsp;&nbsp;&nbsp;
                <Icon type="location" /> {match.venue}
            </p>
        </Title>
    );
};

const Title = styled.div<{ isVisible: boolean; isFaded: boolean }>`
    z-index: 1;
    background-image: linear-gradient(
        to bottom,
        ${p => `${p.theme.colors.bgDefault}, ${p.theme.colors.bgDefault}00`}
    );
    padding-bottom: 32px;
    opacity: 0;
    transition: opacity 300ms; /* todo - themfiy */
    ${p => p.isVisible && 'opacity: 1;'}
    ${p => p.isFaded && 'opacity: 0.33;'}


    h1 {
        padding-top: 0.5em;
        font-weight: 900;
        margin: 0;
        font-size: 3.4em;

        small {
            color: #fff;
            font-size: 0.5em;
            padding: 0 0.5em;
        }
    }

    p {
        color: #797a97;
        font-family: Georgia;
        font-size: 1.4em;
        margin: 0.2em 0 0;
        display: flex;
        align-items: center;

        svg {
            margin-right: 0.2em;
        }
    }

    position: absolute;
    top: 0;
    left: 32px;
    right: 32px;
    text-align: left;
    max-width: ${p => p.theme.dimensions.maxWidth}px;
    margin: auto;
    color: #fff;
`;

export default MatchTitle;
