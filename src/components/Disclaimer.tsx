import React from 'react';
import styled from 'styled-components';

const Disclaimer: React.FC = () => {
    return <Root>&copy; 2021 Fantasy Football</Root>;
};

const Root = styled.div<{ right?: boolean }>`
    padding: 16px;
    font-size: 0.9em;
    color: ${(p) => p.theme.colors.textTertiary};
`;

export default Disclaimer;
