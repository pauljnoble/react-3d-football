import colors from './colors'

export type ThemeInterface = any;

export const bp = (size: number | string, clamp = 'min') => {
    const sizePx = typeof size === 'number' ? size : sizes[size];
    return `@media (${clamp}-width: ${sizePx}px)`;
};

const sizes: Record<string, number> = {
    xs: 320,
    sm: 375,
    md: 768,
    lg: 1024,
    xl: 1280,
};

const dimensions = {
    sidebarX: 240,
    maxWidth: 1200,
    minWidth: 900,
    yOffsetPercent: 45,
};

const transitions = {
    focus: 800,
    hover: 200,
    drawer: 400,
};

export default {
    colors,
    transitions,
    dimensions,
    sizes,
};
