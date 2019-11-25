import React, { useEffect, useRef, useState } from 'react';
import { flatten } from 'lodash';
import Field from 'components/Field';
import TeamList from 'components/TeamList';
import Players from 'components/Players';
import Stage from 'components/Stage';
import Drawer from 'components/Drawer';
import Tabs from 'components/Tabs';
import MatchTitle from 'components/MatchTitle';
import { Layout, Sidebar as LayoutSidebar, Main as LayoutMain } from 'components/Layout';
import { useTracked, actions } from 'state';

const Index = () => {
    const [{ teams, isLoading, activePlayerId }, dispatch]: any = useTracked();
    const loaded = useRef(0);
    const [isLoadingImages, setIsLoadingImages] = useState(true);
    const isLoadingRef = useRef(isLoading);
    const playerImages = flatten([...teams.map(t => [...t.players.map(p => p.thumbnail)])]);
    const images = [];

    for (let i = 0; i < playerImages.length; i++) {
        images[i] = new Image();
        images[i].src = `/img/${playerImages[i]}`;
        images[i].onload = () => {
            loaded.current = loaded.current + 1;

            if (loaded.current === playerImages.length) {
                setIsLoadingImages(false);
            }
        };
    }

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

    const handleClick = () => {
        if (activePlayerId) {
            dispatch({ type: actions.SET_ACTIVE_PLAYER, value: null });
        }
    };

    return (
        <>
            <Layout>
                <LayoutSidebar>
                    <Tabs />
                    <TeamList />
                </LayoutSidebar>
                <LayoutMain onClick={handleClick}>
                    <MatchTitle />
                    <Stage>
                        <Field>
                            <Players />
                        </Field>
                    </Stage>
                </LayoutMain>
                <Drawer />
            </Layout>
        </>
    );
};

export default Index;
