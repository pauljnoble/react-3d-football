import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    min-width: ${p => p.theme.dimensions.minWidth + p.theme.dimensions.sidebarX + 40}px;
    min-height: 600px;
    background-color: ${p => p.theme.colors.bgDefault};

    * {
        /* outline: 1px dotted rgba(255, 255, 255, 0.4); */
    }
`;

export const Sidebar = styled.aside`
    position: relative;
    flex-basis: ${p => p.theme.dimensions.sidebarX}px;
    background-color: ${p => p.theme.colors.bgSidebar};
    padding-top: 120px;
    color: #fff;

    &::before {
        background-image: url('/img/tmp-logo-2.svg');
        background-repeat: no-repeat;
        background-position: 16px center;
        background-color: ${p => p.theme.colors.accent}; /* #489ed5; */
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
