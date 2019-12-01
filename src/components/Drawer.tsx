import React from 'react';
import styled, { css } from 'styled-components';
import { useTracked, actions } from 'state';
import Icon from 'components/Icon';
import countries from 'utils/countries';

type Props = any;
const Drawer: React.FC<Props> = () => {
    const [{ teams, activeTeamId, activePlayerId }, dispatch]: any = useTracked();
    const players = [...teams.find(t => t.id === activeTeamId).players];

    const renderPlayer = () => {
        const player = players.find(p => p.id === activePlayerId);

        const handleClickPrev = e => {
            e.preventDefault();
            const index = players.findIndex(p => p.id === activePlayerId);
            const player = players[index - 1] || players[players.length - 1];
            const { id } = player;
            dispatch({ type: actions.SET_ACTIVE_PLAYER, value: id });
        };

        const handleClickNext = e => {
            e.preventDefault();
            const index = players.findIndex(p => p.id === activePlayerId);
            const player = players[index + 1] || players[0];
            const { id } = player;
            dispatch({ type: actions.SET_ACTIVE_PLAYER, value: id });
        };

        const countryCode = player.nationality.split(',')[1].trim();
        const emoji = countryCode && countries[countryCode] && countries[countryCode].emoji;

        return (
            <Profile>
                <Image>
                    <img src={`/img/${player.hero}`} />
                </Image>
                <Details>
                    <Controls>
                        <Button onClick={handleClickPrev}>
                            <Icon type="leftChevron" size={32} />
                        </Button>
                        <Button onClick={handleClickNext}>
                            <Icon type="rightChevron" size={32} />
                        </Button>
                    </Controls>
                    <Name>
                        {player.firstName} {player.lastName}
                    </Name>
                    <BigStats>
                        <Stat>
                            {player.matches}
                            <span>Matches</span>
                        </Stat>
                        <Stat>
                            {player.goals}
                            <span>Goals</span>
                        </Stat>
                        <Stat>
                            {player.assists}
                            <span>Assists</span>
                        </Stat>
                    </BigStats>
                    <DefinitionList>
                        <Term>DOB</Term>
                        <Definition>{player.dob}</Definition>
                        <Term>Weight</Term>
                        <Definition>{player.weight}kg</Definition>
                        <Term>Height</Term>
                        <Definition>{player.height}cm</Definition>
                        <Term>Birthplace</Term>
                        <Definition>{emoji}</Definition>
                    </DefinitionList>
                    <Abstract>{player.bio}</Abstract>
                </Details>
            </Profile>
        );
    };

    return <Root active={!!activePlayerId}>{activePlayerId && renderPlayer()}</Root>;
};

const rootActiveStyles = css`
    transform: translateX(0);

    &::before {
        opacity: 1;
    }
`;

const Controls = styled.div`
    position: absolute;
    right: 24px;
    top: 24px;
    width: 100px;
    height: 46px;
    display: flex;
    justify-content: space-between;
`;

const BigStats = styled.div`
    display: flex;
    margin-top: 24px;
`;

const Stat = styled.dt`
    font-size: 32px;
    flex-basis: 25%;

    span {
        display: block;
        font-size: 16px;
        color: ${p => p.theme.colors.textReversedSecondary};
    }
`;

const Button = styled.button`
    background: transparent;
    padding: 0;
    height: 46px;
    font-size: 32px;
    width: 46px;
    display: flex;
    line-height: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid ${p => p.theme.colors.borderInput};
    color: ${p => p.theme.colors.textDefault};
    outline: none;
    background-color: ${p => p.theme.colors.accent};

    &:hover {
        background-color: ${p => p.theme.colors.accentSecondary};
    }
`;

const DefinitionList = styled.dl`
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid ${p => p.theme.colors.borderReversed};
`;

const definitionStyles = css`
    flex-basis: 50%;
    margin: 0;
    padding: 0.66em 0;
    border-top: 1px solid ${p => p.theme.colors.borderReversed};
    color: #77747c;
    font-size: 18px;
`;

const Term = styled.dt`
    ${definitionStyles}
`;
const Definition = styled.dd`
    ${definitionStyles}
    text-align: right;
`;

const Root = styled.div<{ active: boolean }>`
    position: fixed;
    height: 100vh;
    width: 480px;
    right: 0;
    background: #f7f7f7;
    transition: transform ${p => p.theme.transitions.drawer}ms;
    transform: translateX(100%);
    z-index: 9;
    color: ${p => p.theme.colors.textReversedDefault};

    &::before {
        position: absolute;
        top: 0;
        right: 100%;
        width: 20%;
        background-image: linear-gradient(to right, #1a1d2f00, #1a1d2f33);
        height: 100%;
        display: block;
        opacity: 0;
        pointer-events: none;
        transition: opacity ${p => p.theme.transitions.drawer}ms;
        content: '';
    }

    ${p => p.active && rootActiveStyles};
`;

const Abstract = styled.p`
    color: #77747c;
    font-size: 20px;
    line-height: 1.4;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;

const Name = styled.h2`
    font-size: 2.4em;
    font-weight: 900;
    margin: 0;
    padding-right: 120px;
`;

const Profile = styled.div``;

const Image = styled.div`
    overflow: hidden;
    position: relative;

    &::before {
        padding-top: 50%;
        content: '';
        display: block;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`;

const Details = styled.div`
    position: relative;
    padding: 32px;
`;

export default Drawer;
