import React, { useState } from 'react';
import styled from 'styled-components';
import { actions, useTracked } from 'state';

const Tabs: React.FC = () => {
    const [{ teams, activeTeamId }, dispatch]: any = useTracked();
    const [activeTeamIdState, setActiveTeamIdState] = useState(activeTeamId);

    const handleClick = id => {
        setActiveTeamIdState(id);
        dispatch({ type: actions.SET_PLAYERS_VISIBLE, value: false });
        // wait...
        setTimeout(() => {
            // update team ...
            dispatch({ type: actions.SET_ACTIVE_TEAM, value: id });
        }, 400);

        setTimeout(() => {
            // update players ...
            dispatch({ type: actions.SET_PLAYERS_VISIBLE, value: true });
        }, 800);
    };

    return (
        <Root>
            {teams.map(t => (
                <Team
                    key={t.id}
                    onClick={() => handleClick(t.id)}
                    active={activeTeamIdState === t.id}
                >
                    {t.title}
                </Team>
            ))}
        </Root>
    );
};

const Root = styled.div`
    display: flex;
`;

const Team = styled.div<{ active: boolean }>`
    flex: 1;
    padding: 16px 0;
    text-align: center;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    ${p => !p.active && 'opacity: 0.6'};
    &:last-child {
        color: ${p => p.theme.colors.textTertiary};
    }
`;

export default Tabs;
