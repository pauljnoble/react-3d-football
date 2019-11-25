import React from 'react';
import { useTracked } from 'state';
import Player from './Player';

type Props = any;

const Players: React.FC<Props> = () => {
    // track activeFormationId to re-render when formation is changed
    const [{ teams, formations, activeTeamId, activeFormationId }]: any = useTracked();
    const team = teams.find(t => t.id === activeTeamId);
    const formation = formations.find(f => f.id === team.formationId);

    return (
        <>
            {team.players.map((p, i) => (
                <Player
                    {...p}
                    key={p.id}
                    x={formation.positions[i].x}
                    y={formation.positions[i].y}
                    color={team.color}
                    i={i}
                />
            ))}
        </>
    );
};

export default Players;
