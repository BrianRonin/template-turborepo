import * as react from 'react';
import react__default, { ReactNode, MouseEvent, LegacyRef, ButtonHTMLAttributes, MouseEventHandler, HTMLAttributes } from 'react';
import * as _emotion_react from '@emotion/react';
import { Theme as Theme$1 } from '@emotion/react';
export { ThemeProvider, useTheme } from '@emotion/react';
import * as _emotion_styled from '@emotion/styled';
import { IconType } from 'react-icons';

type hslProps = {
    length: number;
    color: [number, number, number, number] | string;
    position?: 'start' | 'middle' | 'end';
    inverse?: boolean;
    orderMatrix?: boolean;
    orderSaturation?: boolean;
    orderLight?: boolean;
    orderAlpha?: boolean;
    incMatrix?: number;
    incSaturation?: number;
    incLight?: number;
    incAlpha?: number;
};
declare const makeHsl: (settings: hslProps) => string[];

declare const DefaultTheme: {
    name: string;
    colors: {
        primary: string[];
        _primary: string[];
        secondary: string[];
        _secondary: string[];
        text: string[];
        _text: string[];
        bg: string[];
        _bg: string[];
        warning: string[];
        _warning: string[];
        success: string[];
        _success: string[];
        info: string[];
        _info: string[];
        black: string[];
        _black: string[];
        white: string[];
        _white: string[];
    };
    fonts: {
        family: {
            default: string;
            secondary: string;
        };
        sizes: {
            xxsmall: string;
            xsmall: string;
            small: string;
            normal: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            huge: string;
            xhuge: string;
            xxhuge: string;
            hero: string;
            xhero: string;
            xxhero: string;
        };
        lineHeight: {
            tiny: string;
            small: string;
            medium: string;
            large: string;
        };
        weight: {
            light: string;
            regular: string;
            semiBold: string;
            bold: string;
            extraBold: string;
        };
    };
    sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        max: string;
        content: string;
    };
    media: {
        lSmallest: string;
        lSmall: string;
        lMedium: string;
        lLarge: string;
        gSmallest: string;
        gSmall: string;
        gMedium: string;
        gLarge: string;
    };
    spacings: {
        xxtiny: string;
        xtiny: string;
        tiny: string;
        xxsmall: string;
        xsmall: string;
        small: string;
        mediumSmall: string;
        medium: string;
        mediumLarge: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        hero: string;
        xhero: string;
        xxhero: string;
    };
    frameSizes: {
        xxsmall: string;
        xsmall: string;
        small: string;
        smallMedium: string;
        medium: string;
        largeMedium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        max: string;
    };
    transitions: string[];
    radius: {
        none: number;
        tiny: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        circle: string;
    };
    layers: string[];
};

type Props = {
    children: ReactNode;
    _theme?: typeof DefaultTheme;
};
type ContextValues = {
    theme: typeof DefaultTheme;
    setTheme: (mode: 'light' | 'dark') => void;
};

declare const GlobalStyles: () => JSX.Element;

declare namespace globals {
  export {
    GlobalStyles as default,
  };
}

declare const Main$7: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

declare namespace styles$8 {
  export {
    Main$7 as Main,
  };
}

type TextProps = {
    children: string | react__default.ReactNode;
};
declare const Text: ({ children }: TextProps) => JSX.Element;

declare const index$7_Text: typeof Text;
type index$7_TextProps = TextProps;
declare namespace index$7 {
  export {
    styles$8 as S,
    index$7_Text as Text,
    index$7_TextProps as TextProps,
  };
}

type props = Omit<HeadingProps, 'children'>;
declare const Main$6: _emotion_styled.StyledComponent<{
    theme?: Theme$1 | undefined;
    as?: react.ElementType<any> | undefined;
} & props, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

declare namespace styles$7 {
  export {
    Main$6 as Main,
  };
}

type HeadingProps = {
    children: ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: 'huge' | 'big' | 'medium' | 'small';
    uppercase?: boolean;
};
declare const Heading: ({ children, as, size, uppercase, }: HeadingProps) => JSX.Element;

declare const index$6_Heading: typeof Heading;
type index$6_HeadingProps = HeadingProps;
declare namespace index$6 {
  export {
    index$6_Heading as Heading,
    index$6_HeadingProps as HeadingProps,
    styles$7 as S,
  };
}

declare const Main$5: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Label: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
declare const Input: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
declare const Slider: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;

declare const styles$6_Input: typeof Input;
declare const styles$6_Label: typeof Label;
declare const styles$6_Slider: typeof Slider;
declare namespace styles$6 {
  export {
    styles$6_Input as Input,
    styles$6_Label as Label,
    Main$5 as Main,
    styles$6_Slider as Slider,
  };
}

declare const mock_toggle: toggleProps;

declare const mock$4_mock_toggle: typeof mock_toggle;
declare namespace mock$4 {
  export {
    mock$4_mock_toggle as mock_toggle,
  };
}

type toggleProps = {
    text?: string;
    onChange?: (checked: boolean) => any;
    ifChecked?: () => any;
    ifNoChecked?: () => any;
    initialValue?: () => boolean;
};
declare const Toggle: ({ text, onChange, ifChecked, ifNoChecked, initialValue, }: toggleProps) => JSX.Element;

declare const index$5_Toggle: typeof Toggle;
type index$5_toggleProps = toggleProps;
declare namespace index$5 {
  export {
    styles$6 as S,
    index$5_Toggle as Toggle,
    mock$4 as mock,
    index$5_toggleProps as toggleProps,
  };
}

declare const Main$4: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

declare namespace styles$5 {
  export {
    Main$4 as Main,
  };
}

declare const mock_toggle_theme: {
    ToggleProps: toggleProps;
};

declare const mock$3_mock_toggle_theme: typeof mock_toggle_theme;
declare namespace mock$3 {
  export {
    mock$3_mock_toggle_theme as mock_toggle_theme,
  };
}

declare const ToggleTheme: () => JSX.Element;

declare const index$4_ToggleTheme: typeof ToggleTheme;
declare namespace index$4 {
  export {
    styles$5 as S,
    index$4_ToggleTheme as ToggleTheme,
    mock$3 as mock,
  };
}

type mainProps = {
    onlyIcon: boolean;
    custom: buttonCustom;
    outline: boolean;
    iconDirection: 'left' | 'right';
};
declare const Main$3: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
} & mainProps, react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;

declare namespace styles$4 {
  export {
    Main$3 as Main,
  };
}

declare const mock_button$1: buttonProps$1;

declare namespace mock$2 {
  export {
    mock_button$1 as default,
  };
}

type Settings = {
    children?: ReactNode;
    disabled?: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
    icon?: ReactNode;
    ref?: LegacyRef<HTMLButtonElement>;
    custom?: buttonCustom;
    outline?: boolean;
    iconDirection?: 'left' | 'right';
    meta?: ButtonHTMLAttributes<HTMLButtonElement>;
};
type buttonCustom = {
    enabled: {
        color: string;
        bg: string;
    };
    disabled: {
        color: string;
        bg: string;
    };
};
type buttonProps$1 = {
    loadingSettings?: Settings;
    isLoading?: boolean;
} & Settings;
declare const Button$2: (userSettings: buttonProps$1) => JSX.Element;

type index$3_buttonCustom = buttonCustom;
declare namespace index$3 {
  export {
    styles$4 as S,
    index$3_buttonCustom as buttonCustom,
    buttonProps$1 as buttonProps,
    Button$2 as default,
    mock$2 as mock,
  };
}

declare const Main$2: _emotion_styled.StyledComponent<{
    theme?: Theme$1 | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Button$1: _emotion_styled.StyledComponent<{
    theme?: Theme$1 | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const Content: _emotion_styled.StyledComponent<{
    theme?: Theme$1 | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const IconContainer: _emotion_styled.StyledComponent<{
    theme?: Theme$1 | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const TextContainer: _emotion_styled.StyledComponent<{
    theme?: Theme$1 | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;

declare const styles$3_Content: typeof Content;
declare const styles$3_IconContainer: typeof IconContainer;
declare const styles$3_TextContainer: typeof TextContainer;
declare namespace styles$3 {
  export {
    Button$1 as Button,
    styles$3_Content as Content,
    styles$3_IconContainer as IconContainer,
    Main$2 as Main,
    styles$3_TextContainer as TextContainer,
  };
}

declare const mock_button: buttonProps;

declare namespace mock$1 {
  export {
    mock_button as default,
  };
}

type buttonProps = {
    text: string;
    Icon: IconType | any;
};
declare const Button: ({ text, Icon }: buttonProps) => JSX.Element;

type index$2_buttonProps = buttonProps;
declare namespace index$2 {
  export {
    styles$3 as S,
    index$2_buttonProps as buttonProps,
    Button as default,
    mock$1 as mock,
  };
}

declare const Main$1: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

declare namespace styles$2 {
  export {
    Main$1 as Main,
  };
}

type roundButtonProps = {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
};
declare const RoundButton: ({ children, onClick, }: roundButtonProps) => JSX.Element;

type index$1_roundButtonProps = roundButtonProps;
declare namespace index$1 {
  export {
    styles$2 as S,
    RoundButton as default,
    index$1_roundButtonProps as roundButtonProps,
  };
}

declare const Container$1: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

declare namespace styles$1 {
  export {
    Container$1 as Container,
  };
}

declare const Inside: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
} & Custom, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const Main: _emotion_styled.StyledComponent<{
    theme?: _emotion_react.Theme | undefined;
    as?: react.ElementType<any> | undefined;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

declare const styles_Inside: typeof Inside;
declare const styles_Main: typeof Main;
declare namespace styles {
  export {
    styles_Inside as Inside,
    styles_Main as Main,
  };
}

declare const mock_container: containerProps;

declare namespace mock {
  export {
    mock_container as default,
  };
}

type Custom = {
    boxShadowOnHover?: 'bg' | 'primary';
    isForm?: boolean;
};
type containerProps = {
    children: ReactNode;
    custom?: Custom;
    meta?: HTMLAttributes<HTMLDivElement>;
};
declare const Container: ({ children, custom, meta, }: containerProps) => JSX.Element;

declare const index_Container: typeof Container;
type index_Custom = Custom;
type index_containerProps = containerProps;
declare const index_mock: typeof mock;
declare namespace index {
  export {
    index_Container as Container,
    index_Custom as Custom,
    styles as S,
    index_containerProps as containerProps,
    index_mock as mock,
  };
}

declare const Theme: {
    themes: {
        default: {
            name: string;
            colors: {
                primary: string[];
                _primary: string[];
                secondary: string[];
                _secondary: string[];
                text: string[];
                _text: string[];
                bg: string[];
                _bg: string[];
                warning: string[];
                _warning: string[];
                success: string[];
                _success: string[];
                info: string[];
                _info: string[];
                black: string[];
                _black: string[];
                white: string[];
                _white: string[];
            };
            fonts: {
                family: {
                    default: string;
                    secondary: string;
                };
                sizes: {
                    xxsmall: string;
                    xsmall: string;
                    small: string;
                    normal: string;
                    medium: string;
                    large: string;
                    xlarge: string;
                    xxlarge: string;
                    huge: string;
                    xhuge: string;
                    xxhuge: string;
                    hero: string;
                    xhero: string;
                    xxhero: string;
                };
                lineHeight: {
                    tiny: string;
                    small: string;
                    medium: string;
                    large: string;
                };
                weight: {
                    light: string;
                    regular: string;
                    semiBold: string;
                    bold: string;
                    extraBold: string;
                };
            };
            sizes: {
                xsmall: string;
                small: string;
                medium: string;
                large: string;
                xlarge: string;
                xxlarge: string;
                huge: string;
                xhuge: string;
                max: string;
                content: string;
            };
            media: {
                lSmallest: string;
                lSmall: string;
                lMedium: string;
                lLarge: string;
                gSmallest: string;
                gSmall: string;
                gMedium: string;
                gLarge: string;
            };
            spacings: {
                xxtiny: string;
                xtiny: string;
                tiny: string;
                xxsmall: string;
                xsmall: string;
                small: string;
                mediumSmall: string;
                medium: string;
                mediumLarge: string;
                large: string;
                xlarge: string;
                xxlarge: string;
                huge: string;
                xhuge: string;
                xxhuge: string;
                hero: string;
                xhero: string;
                xxhero: string;
            };
            frameSizes: {
                xxsmall: string;
                xsmall: string;
                small: string;
                smallMedium: string;
                medium: string;
                largeMedium: string;
                large: string;
                xlarge: string;
                xxlarge: string;
                max: string;
            };
            transitions: string[];
            radius: {
                none: number;
                tiny: string;
                small: string;
                medium: string;
                large: string;
                xlarge: string;
                xxlarge: string;
                circle: string;
            };
            layers: string[];
        };
        dark: {
            name: string;
            colors: {
                primary: string[];
                _primary: string[];
                secondary: string[];
                _secondary: string[];
                text: string[];
                _text: string[];
                bg: string[];
                _bg: string[];
                warning: string[];
                _warning: string[];
                success: string[];
                _success: string[];
                info: string[];
                _info: string[];
                black: string[];
                _black: string[];
                white: string[];
                _white: string[];
            };
            fonts: {
                family: {
                    default: string;
                    secondary: string;
                };
                sizes: {
                    xxsmall: string;
                    xsmall: string;
                    small: string;
                    normal: string;
                    medium: string;
                    large: string;
                    xlarge: string;
                    xxlarge: string;
                    huge: string;
                    xhuge: string;
                    xxhuge: string;
                    hero: string;
                    xhero: string;
                    xxhero: string;
                };
                lineHeight: {
                    tiny: string;
                    small: string;
                    medium: string;
                    large: string;
                };
                weight: {
                    light: string;
                    regular: string;
                    semiBold: string;
                    bold: string;
                    extraBold: string;
                };
            };
            sizes: {
                xsmall: string;
                small: string;
                medium: string;
                large: string;
                xlarge: string;
                xxlarge: string;
                huge: string;
                xhuge: string;
                max: string;
                content: string;
            };
            media: {
                lSmallest: string;
                lSmall: string;
                lMedium: string;
                lLarge: string;
                gSmallest: string;
                gSmall: string;
                gMedium: string;
                gLarge: string;
            };
            spacings: {
                xxtiny: string;
                xtiny: string;
                tiny: string;
                xxsmall: string;
                xsmall: string;
                small: string;
                mediumSmall: string;
                medium: string;
                mediumLarge: string;
                large: string;
                xlarge: string;
                xxlarge: string;
                huge: string;
                xhuge: string;
                xxhuge: string;
                hero: string;
                xhero: string;
                xxhero: string;
            };
            frameSizes: {
                xxsmall: string;
                xsmall: string;
                small: string;
                smallMedium: string;
                medium: string;
                largeMedium: string;
                large: string;
                xlarge: string;
                xxlarge: string;
                max: string;
            };
            transitions: string[];
            radius: {
                none: number;
                tiny: string;
                small: string;
                medium: string;
                large: string;
                xlarge: string;
                xxlarge: string;
                circle: string;
            };
            layers: string[];
        };
    };
    Context: react.Context<ContextValues>;
    Provider: ({ children, _theme, }: Props) => JSX.Element;
};

export { index$3 as Button0, index$2 as Button1, styles$1 as Container0, index as Container1, globals as GlobalStyles, index$6 as Heading0, index$1 as RoundButton0, index$7 as Text0, Theme, index$5 as Toggle0, index$4 as ToggleTheme0, hslProps, makeHsl };
