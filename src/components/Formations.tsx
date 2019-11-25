import React from 'react';
import styled from 'styled-components';
import FieldSVG from 'components/svgs/Field';
import FormationPlayers from 'components/FormationPlayers';
import { useTracked, actions } from 'state';

const Formations = () => {
    const [{ formations, activeFormationId }, dispatch]: any = useTracked();

    const handleClick = formationId => {
        console.log('click', formationId);
        dispatch({ type: actions.SET_TEAM_FORMATION, value: formationId });
    };

    return (
        <Root>
            {/* <Heading>Formation</Heading> */}
            <Field>
                <StyledFieldSVG />
                <FormationPlayers />
            </Field>
            {formations.map(f => {
                const innerHtml = f.name.replace(/\-/g, '<span>&ndash;</span>');
                return (
                    <Formation
                        onClick={() => handleClick(f.id)}
                        active={f.id === activeFormationId}
                    >
                        <div dangerouslySetInnerHTML={{ __html: innerHtml }} />
                    </Formation>
                );
            })}
        </Root>
    );
};

const StyledFieldSVG = styled(FieldSVG)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    path {
        stroke: ${p => p.theme.colors.textReversedSecondary};
    }
`;

const Field = styled.div`
    position: relative;
    width: 100%;

    &::before {
        padding-top: 65%;
        content: '';
        display: block;
    }
`;

const Root = styled.div`
    position: absolute;
    top: 32px;
    right: 24px;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    width: 160px;
    z-index: 3;
    color: ${p => p.theme.colors.textDefault};
`;

const Formation = styled.div<{ active: boolean }>`
    position: relative;
    display: block;
    font-size: 1em;
    width: 120px;
    text-align: center;
    border-bottom: 1px solid ${p => p.theme.colors.border};
    color: ${p => (p.active ? p.theme.colors.textDefault : p.theme.colors.textReversedSecondary)};

    &:nth-child(2) {
        margin-top: 24px;
        border-top: 1px solid ${p => p.theme.colors.border};
    }

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

    div {
        padding: 12px 0;
        cursor: pointer;
    }

    span {
        padding: 0 0.1em;
        opacity: 0.5;
    }
`;

export default Formations;
