import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { useTracked } from 'state';

const Player = ({ name, number, active, visible, i }) => {
    const pose = visible ? 'visible' : 'hidden';

    return (
        <PosedListItem
            number={number}
            data-number={number}
            active={active}
            visible={visible}
            i={i}
            pose={pose}
        >
            {name}
        </PosedListItem>
    );
};

const TeamList: React.FC = () => {
    const [
        { teams, playersVisible, mouseOverPlayerId, activePlayerId, activeTeamId },
    ]: any = useTracked();

    const players = [...teams.find(t => t.id === activeTeamId).players];

    return (
        <Root>
            {players.map((p, i) => (
                <Player
                    name={`${p.firstName} ${p.lastName}`}
                    number={p.number}
                    key={p.id}
                    active={[mouseOverPlayerId, activePlayerId].includes(p.id)}
                    visible={playersVisible}
                    i={i}
                />
            ))}
        </Root>
    );
};

const Root = styled.div`
    border-top: 1px solid ${p => p.theme.colors.border};
    overflow: hidden;
`;

const ListItem = styled.div<{ number: number; active: boolean }>`
    position: relative;
    color: rgba(255, 255, 255, 0.8);
    color: ${p => (p.active ? p.theme.colors.textDefault : p.theme.colors.textSecondary)};
    font-weight: 400;
    font-size: 16px;
    padding: 12px 14px;
    display: flex;
    align-items: center;

    &::before {
        height: 24px;
        width: 24px;
        background-color: ${p => p.theme.colors.border};
        content: attr(data-number);
        border-radius: 50%;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8em;
        font-weight: 600;
        ${p => p.active && `background-color: ${p.theme.colors.accent};`}
    }

    &::after {
        position: absolute;
        height: 1px;
        background-color: ${p => p.theme.colors.border};
        content: '';
        bottom: 0;
        left: 12px;
        right: 12px;
        display: block;
    }
`;

const PosedListItem = posed(ListItem)({
    hidden: {
        opacity: 0,
        translateY: '-200%',
        delay: ({ i }) => i * 20,
    },
    visible: {
        opacity: 1,
        translateY: 0,
        duration: 150,
        delay: ({ i }) => i * 20,
    },
});

export default TeamList;
