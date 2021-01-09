import React from 'react';
import { useTracked } from 'state';
import Player from './Player';

type Props = any;

// add to center circle
// const PAD_Y = 4.5

const Players: React.FC<Props> = () => {
    // track activeFormationId to re-render when formation is changed
    const [{ teams, activeTeamId, activeFormationId }]: any = useTracked();

    const getActiveTeam = () => (teams || []).find(t => t.id === activeTeamId) || {}
    const team = getActiveTeam()
    const players = team.players || []

    return (
        <>
            {players.map((plr, i) => (
                <Player
                    {...plr}
                    key={plr.id}
                    x={plr.posField.x}
                    y={plr.posField.y}
                    color={plr.color || team.color}
                    i={i}
                />
            ))}
        </>
    );
};

export default Players;
