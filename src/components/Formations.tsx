import React from 'react';
import styled from 'styled-components';

const Formations = () => {
    return (
        <Root>
            <Formation>
                2<span>&ndash;</span>4<span>&ndash;</span>3<span>&ndash;</span>1
            </Formation>
            <Formation>
                4<span>&ndash;</span>4<span>&ndash;</span>2
            </Formation>
            <Formation>
                4<span>&ndash;</span>5<span>&ndash;</span>1
            </Formation>
            <Formation>
                5<span>&ndash;</span>3<span>&ndash;</span>2
            </Formation>
            <Formation>
                5<span>&ndash;</span>3<span>&ndash;</span>2
            </Formation>
            <Formation>
                4<span>&ndash;</span>5<span>&ndash;</span>1
            </Formation>
        </Root>
    );
};

const Root = styled.div`
    position: absolute;
    top: 170px;
    right: 0;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    max-width: ${p => p.theme.dimensions.maxWidth}px;
    color: ${p => p.theme.colors.textDefault};
`;

const Formation = styled.div`
    position: relative;
    display: inline-block;
    padding: 12px 24px 12px 16px;
    border-top: 1px solid ${p => p.theme.colors.border};
    font-size: 1.1em;
    text-align: right;

    span {
        padding: 0 0.1em;
        opacity: 0.5;
    }

    color: ${p => p.theme.colors.textReversedSecondary};

    &:first-child {
        color: ${p => p.theme.colors.textDefault};

        &::after {
            position: absolute;
            right: 0;
            background-color: ${p => p.theme.colors.accent};
            height: 100%;
            width: 4px;
            top: 0;
            /* content: ''; */
            display: block;
        }
    }

    &:last-child {
        border-bottom: 1px solid ${p => p.theme.colors.border};
    }
`;

export default Formations;
