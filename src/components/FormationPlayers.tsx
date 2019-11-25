import React from 'react';
import styled from 'styled-components';
import { useTracked } from 'state';

type Props = any;

const FormationPlayers: React.FC<Props> = () => {
    const [{ teams, formations, activeTeamId }]: any = useTracked();
    const team = teams.find(t => t.id === activeTeamId);
    const formation = formations.find(f => f.id === team.formationId);

    return (
        <>
            {team.players.map((p, i) => (
                <FormationPlayer x={formation.positions[i].x} y={formation.positions[i].y} i={i} />
            ))}
        </>
    );
};

const FormationPlayer = styled.div<{ x: number; y: number; i: number }>`
    position: absolute;
    width: 5px;
    height: 5px
    border-radius: 50%;
    margin: auto;
    background-color: ${p => p.theme.colors.textDefault};
    top: ${p => p.y - 5}%; /* minus the sideline gap */
    left: ${p => p.x - 3}%; /* minus the sideline gap */
    transition: all 600ms;
    transform: translateX(50%) translateY(50%);
`;

export default FormationPlayers;
