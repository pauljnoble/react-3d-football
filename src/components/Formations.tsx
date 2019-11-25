import React from 'react';
import styled from 'styled-components';

const Formations = () => {
    return (
        <Root>
            {/* <Heading>Formation</Heading> */}
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
            {/* <Formation>
                <i>2</i> <i>4</i> <i>3</i> <i>1</i>
            </Formation>
            <Formation>
                <i>3</i> <i>5</i> <i>2</i>
            </Formation>
            <Formation>
                <i>4</i> <i>2</i> <i>3</i>
            </Formation>
            <Formation>
                <i>5</i> <i>3</i> <i>2</i>
            </Formation>
            <Formation>
                <i>5</i> <i>2</i> <i>3</i>
            </Formation> */}
        </Root>
    );
};

const Root = styled.div`
    position: absolute;
    top: 140px;
    right: 0;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    max-width: ${p => p.theme.dimensions.maxWidth}px;
    color: ${p => p.theme.colors.textDefault};
`;

const Heading = styled.div`
    color: ${p => p.theme.colors.textReversedSecondary};
    text-align: right;
    font-weight: 600;
    margin-bottom: 8px;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid ${p => p.theme.colors.border};
`;

const Formation = styled.div`
    position: relative;
    display: inline-block;
    padding: 6px 0 6px 16px;
    padding: 12px 24px 12px 16px;
    font-size: 1em;
    text-align: right;
    border-top: 1px solid ${p => p.theme.colors.border};

    i {
        display: inline-block;
        height: 32px;
        border-radius: 16px;
        border: 1px dashed ${p => p.theme.colors.border};
        text-align: center;
        line-height: 32px;
        width: 32px;
        font-style: normal;
        margin-left: 4px;
    }

    span {
        padding: 0 0.1em;
        opacity: 0.5;
    }

    color: ${p => p.theme.colors.textReversedSecondary};

    &:first-child {
            color: ${p => p.theme.colors.textDefault};
        span {
            /* border: 1px solid ${p => p.theme.colors.border}; */
        }

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
