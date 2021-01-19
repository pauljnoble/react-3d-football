import React, { useState } from 'react';
import styled from 'styled-components';
import { actions, useTracked } from 'state';

const Tabs: React.FC = () => {
    const [{ teams, activeTeamId, isLoading }, dispatch]: any = useTracked();
    const [activeTeamIdState, setActiveTeamIdState] = useState(activeTeamId);

    const handleClick = (id) => {
        if (id === activeTeamId) return;

        setActiveTeamIdState(id);
        dispatch({ type: actions.SET_PLAYERS_VISIBLE, value: false });

        // Wait...
        setTimeout(() => {
            // Update team ...
            dispatch({ type: actions.SET_ACTIVE_TEAM, value: id });
        }, 400);

        setTimeout(() => {
            // Update players ...
            dispatch({ type: actions.SET_PLAYERS_VISIBLE, value: true });
        }, 800);
    };

    return (
        <Root isVisible={!isLoading}>
            {teams.map((t) => (
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

const Root = styled.div<{ isVisible: boolean }>`
    display: flex;
    opacity: 0;
    transition: opacity 300ms; /* todo: themeify */
    ${(p) => p.isVisible && 'opacity: 1;'}
`;

const Team = styled.div<{ active: boolean }>`
    padding: 16px;
    font-weight: 700;
    color: ${(p) => (p.active ? p.theme.colors.textDefault : p.theme.colors.textReversedSecondary)};
    cursor: pointer;
`;

export default Tabs;
