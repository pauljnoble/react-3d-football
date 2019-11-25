import React from 'react';
import styled, { css } from 'styled-components';
import { absoluteFill } from 'utils/style';

const Disclaimer: React.FC = () => {
    return <Root>&copy; 2019 Fantasy Football</Root>;
};

const Root = styled.div<{ right?: boolean }>`
    padding: 16px;
    font-size: 0.9em;
    color: ${p => p.theme.colors.textTertiary};
`;

export default Disclaimer;
