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

const colors = {
    bgDefault: '#1A1D2F',
    bgField: '#66b3a5',
    bgFieldActive: '#4f7c74',
    bgNetPost: 'rgba(255, 255, 255, 0.66)',
    bgSidebar: '#26283E',
    bgFieldLine: '#A1C9C0',
    bgFieldLineActive: '#70948c',
    bgFieldEdge: '#314254',
    textDefault: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    textTertiary: 'rgba(255, 255, 255, 0.4)',
    textReversedDefault: '#343237',
    textReversedSecondary: '#797a97', //343237
    textReversedSecondaryHover: '#a5a6bb',
    border: '#4C4E6A',
    borderReversed: 'rgba(0, 0, 0, 0.1)',
    borderInput: 'rgba(0, 0, 0, 0.2)',
    accent: '#770ae5',
    accentSecondary: '#5813b1',
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
