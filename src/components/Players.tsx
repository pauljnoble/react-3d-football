import React from 'react';
import { useTracked } from 'state';
import Player from './Player';

type Props = any;

const Players: React.FC<Props> = () => {
    const [{ teams, activeTeamId }]: any = useTracked();
    const team = teams.find(t => t.id === activeTeamId);

    return (
        <>
            {team.players.map((p, i) => (
                <Player {...p} key={p.id} color={team.color} i={i} />
            ))}
        </>
    );
};

export default Players;
