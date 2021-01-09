import React from 'react';
import styled from 'styled-components';
import APP_PARAMS from '../utils/app-params'

const Disclaimer: React.FC = () => {
    return <Root>&copy; {String(new Date().getFullYear())} {APP_PARAMS.APP_TITLE}</Root>;
};

const Root = styled.div<{ right?: boolean }>`
    padding: 16px;
    font-size: 0.9em;
    color: ${p => p.theme.colors.textTertiary};
`;

export default Disclaimer;
