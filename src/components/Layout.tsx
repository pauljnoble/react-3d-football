import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    min-width: ${(p) => p.theme.dimensions.minWidth + p.theme.dimensions.sidebarX + 40}px;
    min-height: 600px;
    background-color: ${(p) => p.theme.colors.bgDefault};
`;

export const Sidebar = styled.aside`
    position: relative;
    flex-basis: ${(p) => p.theme.dimensions.sidebarX}px;
    background-color: ${(p) => p.theme.colors.bgSidebar};
    padding-top: 120px;
    color: ${(p) => p.theme.colors.textDefault};
    display: flex;
    flex-direction: column;

    img {
        position: absolute;
        top: 0;
        left: 16px;
        height: 120px;
        width: 70%;
        margin: auto;
    }

    &::before {
        background-color: ${(p) => p.theme.colors.accent}; /* #489ed5; */
        background-size: 70% auto;
        top: 0;
        position: absolute;
        content: '';
        left: 0;
        width: 100%;
        height: 120px;
    }
`;

export const Main = styled.main`
    position: relative;
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
`;
