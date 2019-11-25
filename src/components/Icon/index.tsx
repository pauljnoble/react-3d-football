import * as React from 'react';
import paths from './paths';

export type IconType = keyof typeof paths;

interface Props {
    type: IconType;
    size?: number;
    className?: string;
}

const Icon: React.SFC<Props> = props => (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" className={props.className}>
        <path d={paths[props.type]} fill="currentColor" />
    </svg>
);

Icon.defaultProps = {
    size: 24,
};

export default Icon;
