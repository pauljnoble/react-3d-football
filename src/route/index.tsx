import React, { useEffect, useRef, useState } from 'react';
import Field from 'components/Field';
import TeamList from 'components/TeamList';
import Players from 'components/Players';
import PositionsField from 'components/PositionsField';
import Stage from 'components/Stage';
import Drawer from 'components/Drawer';
import Tabs from 'components/Tabs';
import AppLogo from 'components/AppLogo';
import MatchTitle from 'components/MatchTitle';
import Disclaimer from 'components/Disclaimer';
import Formations from 'components/Formations';
import { Layout, Sidebar as LayoutSidebar, Main as LayoutMain } from 'components/Layout';
import { useTracked, actions } from 'state';
import MatchesLocal from '../state/matches'
import APP_PARAMS from '../utils/app-params'

const responseJsonIsOk = (response) => {
    const contentType = (response.headers || {}).get('content-type')
  
    return (response.status === 200 && contentType && contentType.indexOf('application/json') !== -1)
}

const loadMatch = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const matchIdParam = urlParams.get('match')
    console.log('window.location.search', APP_PARAMS, matchIdParam, window.location.search)

    let match:any = MatchesLocal[matchIdParam] ? MatchesLocal[matchIdParam] : MatchesLocal.mdefault

    if (APP_PARAMS.API && APP_PARAMS.API_PATH_MATCH) {
        try {
            const res = await fetch(`${APP_PARAMS.API}${APP_PARAMS.API_PATH_MATCH}/${matchIdParam}`)
            if (responseJsonIsOk(res)) {
                match = res.json()
            }
        } catch(err) {
            console.error('App::loadMatch from API', err)
        }
    } else {

    }
    return match
}

const Index = () => {
    const [{ isLoading, activePlayerId }, dispatch]: any = useTracked();
    const loaded = useRef(0);

    const [isLoadingImages, setIsLoadingImages] = useState(true);
    
    const isLoadingRef = useRef(isLoading);
    
    // p avisar componentes se a pagina esta carregando
    useEffect(() => {
        if (isLoadingImages) return;
        dispatch({ type: actions.SET_LOADING, value: false });
    }, [isLoadingImages]);


    useEffect(() => {
        if (isLoadingRef.current && !isLoading) {
            // allow the elements to animate in...
            setTimeout(() => dispatch({ type: actions.SET_PLAYERS_VISIBLE, value: true }), 600); // todo - themify
        }
        isLoadingRef.current = isLoading;
    }, [isLoading]);

    const urlParams = new URLSearchParams(window.location.search)
    const showFieldPositions = urlParams.get('field')

    useEffect(() => {
        loadMatch()
            .then(match => {
                console.log('=== loadMatch', match)
                dispatch({ type: actions.SET_MATCH, value: match });

                const { teams: loadedTeams }:any = match || {}

                const playerImages = loadedTeams.reduce((item, next) => [...item.players, ...next.players]).filter(p => p.thumbnail).map(p => p.thumbnail)

                const images = [];
            
                for (let i = 0; i < playerImages.length; i++) {
                    images[i] = new Image();
                    images[i].src = playerImages[i];
                    images[i].onload = () => {
                        loaded.current = loaded.current + 1;
            
                        if (loaded.current === playerImages.length) {
                            setIsLoadingImages(false);
                        }
                    };
                }                
            })
            .catch(err => (console.error('[AppRoute::loadMatch]', err)))
    }, []);

    const handleClick = () => {
        if (activePlayerId) {
            dispatch({ type: actions.SET_ACTIVE_PLAYER, value: null });
        }
    };

    return (
        <>
            <Layout>
                <LayoutSidebar>
                    <AppLogo />
                    <Tabs />
                    <TeamList />
                    <Disclaimer />
                </LayoutSidebar>
                <LayoutMain onClick={handleClick}>
                    <MatchTitle />
                    <Formations />
                    <Stage>
                        <Field>
                            { showFieldPositions ? <PositionsField /> : <Players />}
                        </Field>
                    </Stage>
                </LayoutMain>
                <Drawer />
            </Layout>
        </>
    );
};

export default Index;
