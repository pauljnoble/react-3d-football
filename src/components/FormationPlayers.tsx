import React from 'react';
import styled from 'styled-components';
import { useTracked } from 'state';

type Props = any;

const FormationPlayers: React.FC<Props> = () => {
    const [{ teams, formations, mouseOverPlayerId, activeTeamId }]: any = useTracked();
    const team = teams.find(t => t.id === activeTeamId);
    const formation = formations.find(f => f.id === team.formationId);

    return (
        <>
            {team.players.map((p, i) => (
                <FormationPlayer
                    i={i}
                    key={p.id}
                    x={team.home ? formation.positions[i].x : 100 - formation.positions[i].x}
                    y={team.home ? formation.positions[i].y : 100 - formation.positions[i].y}
                    active={mouseOverPlayerId === p.id}
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
