import { createContext, useContext, useReducer, Reducer } from 'react';
import { createContainer } from 'react-tracked';
import initialStateValue from './initial-state';

export const StateContext = createContext([]);

export type State = typeof initialState;

export const initialState = initialStateValue;

export enum actions {
    SET_MATCH,
    SET_ACTIVE_PLAYER,
    SET_MOUSEOVER_PLAYER,
    SET_MOUSEOUT_PLAYER,
    SET_LOADING,
    SET_PLAYERS_VISIBLE,
    SET_ACTIVE_TEAM,
    SET_TEAM_FORMATION,
}

type Action = {
    type: actions;
    value: any;
};

const OUT_POS_INITIAL = {
    x: 0,
    y: -40,
}
// const OUT_POSITIONS_MAX = 15
const OUT_POSITION_DIST_X = 10

const processPlayersFormation = (team) => {
    const formations = team.formations || []
    const formation = formations.find(f => f.id === team.formationId);

    const outPositions = []
    const nextOutPos = () => {
        const lastIndex = outPositions.length - 1
        const pos = lastIndex >= 0 ? { x: outPositions[lastIndex].x + OUT_POSITION_DIST_X, y: OUT_POS_INITIAL.y } : OUT_POS_INITIAL
        outPositions.push(pos)
        return pos
    }

    const players = (team.players || []).map(player => {
        let playerPos = formation.positions.find(pos => String(pos.playerId) === String(player.id))
        const isOut = !playerPos
        playerPos = playerPos || nextOutPos()

        return {
            ...player,
            posField: {
                x: team.home || isOut ? playerPos.x : 100 - playerPos.x,
                y: team.home || isOut ? playerPos.y : 100 - playerPos.y,
            },
            isOut,
        }
    })

    return players
}

const getActiveTeam = (teams, activeTeamId) => (
    teams[teams.findIndex(t => t.id === activeTeamId) || 0 ]
)

export const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case actions.SET_MATCH: {
            const { match, teams } = action.value;
            const teamsP = teams.map(team => ({
                ...team,
                players: processPlayersFormation(team),
            }))

            const teamActive = getActiveTeam(teams, state.activeTeamId)
            const activeFormationId = teamActive && teamActive.formationId ? teamActive.formationId : state.activeFormationId

            return { ...initialState, match, teams: teamsP, activeFormationId };
        }

        case actions.SET_ACTIVE_PLAYER: {
            const activePlayerId = action.value === state.activePlayerId ? null : action.value;
            return { ...state, activePlayerId, mouseOverPlayerId: null };
        }

        case actions.SET_MOUSEOVER_PLAYER: {
            return { ...state, mouseOverPlayerId: action.value };
        }

        case actions.SET_MOUSEOUT_PLAYER: {
            return { ...state, mouseOverPlayerId: null };
        }

        case actions.SET_LOADING: {
            return { ...state, isLoading: action.value as boolean };
        }

        case actions.SET_PLAYERS_VISIBLE: {
            return { ...state, playersVisible: action.value as boolean };
        }

        case actions.SET_ACTIVE_TEAM: {
            const { teams } = state;
            const teamActive = getActiveTeam(teams, action.value)

            return {
                ...state,
                activeTeamId: action.value as number,
                activeFormationId: teamActive.formationId,
                teamActive
            };
        }

        case actions.SET_TEAM_FORMATION: {
            const { teams, activeTeamId } = state;
            const team = getActiveTeam(teams, activeTeamId)
            team.formationId = action.value
            team.players = processPlayersFormation(team)

            return { ...state, teams, activeFormationId: action.value as number };
        }

        default:
            return state;
    }
};

const useValue = ({ reducer, initialState }) => useReducer(reducer, initialState);

export const useStateValue = () => useContext(StateContext);

export const { Provider, useTracked } = createContainer(useValue);
