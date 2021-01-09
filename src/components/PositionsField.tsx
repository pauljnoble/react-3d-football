import React from 'react';
import PlayerShadow from './PlayerShadow';

type Props = any;
// add to center circle
// const PAD_Y = 4.5

const fillArray = (nr, pad) => Array(nr).fill('').map((_, idx) => (idx + 1) * pad)

const PositionsField: React.FC<Props> = () => {

    const players = []
    const buildp = (x, y, id, colorZone) => (players.push({
        posField: {x,y},
        id, color: colorZone,
    }))

    // gol
    buildp(10, 50, 1, 'blue')

    const Y_PAD = 12.5

    const verticalList = fillArray(7, Y_PAD)
    
    // def
    verticalList.forEach(vl => buildp(25, vl, 1, 'green'))
    fillArray(4, 5).forEach(vl => buildp(vl + 15, 50, 1, 'green'))
   
    // mc
    verticalList.forEach(vl => buildp(50, vl, 1, '#b9b95a'))
    fillArray(6, 5).forEach(vl => buildp(vl + 35, 75, 1, '#b9b95a'))
   
    // atk
    verticalList.forEach(vl => buildp(75, vl, 1, '#e869e5'))
    fillArray(4, 5).forEach(vl => buildp(vl + 65, 37.5, 1, '#e869e5'))

    return (
        <>
            {players.map((plr, i) => (
                <PlayerShadow
                    {...plr}
                    key={i}
                    x={plr.posField.x}
                    y={plr.posField.y}
                    color={plr.color}
                    i={i}
                />
            ))}
        </>
    );
};

export default PositionsField;
