import React from 'react';
import styled from 'styled-components';
import { useTracked } from 'state';

type Props = any;

const FormationPlayers: React.FC<Props> = () => {
    const [{ teams, mouseOverPlayerId, activeTeamId }]: any = useTracked();

    const getActiveTeam = () => (teams || []).find(t => t.id === activeTeamId) || {}
    const players = getActiveTeam().players || []

    return (
        <>
            {players.map((plr, i) => (
                <FormationPlayer
                    i={i}
                    key={plr.id}
                    x={plr.posField.x}
                    y={plr.isOut ? plr.posField.y + 20 : plr.posField.y}
                    active={mouseOverPlayerId === plr.id}
                />
            ))}
        </>
    );
};

const FormationPlayer = styled.div<{ x: number; y: number; i: number; active: boolean }>`
    position: absolute;
    width: 5px;
    height: 5px
    border-radius: 50%;
    margin: auto;
    background-color: ${p => p.theme.colors.textDefault};

    top: ${p => p.y - 5}%; /* minus the sideline gap */
    left: ${p => p.x - 3}%; /* minus the sideline gap */
    transition: left 600ms, top 600ms, transform 200ms;
    transform: translateX(50%) translateY(50%) ${p => p.active && 'scale(1.5)'};
`;

export default FormationPlayers;
