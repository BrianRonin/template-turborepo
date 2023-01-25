var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.tsx
import { ThemeProvider as ThemeProvider2 } from "@emotion/react";

// src/utils/make-hsl.ts
var withLimit = (value, increment, limit, subtraction = false) => {
  let newLight;
  if (increment > 0) {
    newLight = subtraction ? value - increment : value + increment;
  } else {
    newLight = value;
  }
  newLight = newLight > limit ? limit : newLight;
  newLight = newLight < 0 ? 0 : newLight;
  return String(
    Number.isInteger(newLight) ? newLight : newLight.toFixed(2)
  );
};
var getMatrix = (hot, increments, current) => {
  const after = current >= 250;
  let value;
  if (hot) {
    value = after ? current + increments : current - increments;
  } else {
    value = after ? current - increments : current + increments;
  }
  return String(withLimit(value, 0, 360));
};
var extractColorValues = (value) => {
  const [_matrix, _saturation, _light, _alpha] = value.split(",");
  const filter = (value2) => Number(
    value2 ? value2.replace(/[^\d.]/g, "") : "1"
  );
  return [
    filter(_matrix),
    filter(_saturation),
    filter(_light),
    filter(_alpha)
  ];
};
var makeHsl = (settings) => {
  var _a;
  const template = "hsl($m, $s, $l, $a)";
  const makeHsl2 = (matrix, saturation, light, alpha) => template.replace("$m", matrix).replace("$s", saturation + "%").replace("$l", light + "%").replace("$a", alpha);
  const {
    color,
    length,
    position = "middle",
    inverse = false,
    incMatrix = 0,
    incSaturation = 0,
    incLight = 0,
    incAlpha = 0,
    orderAlpha = false,
    orderLight = false,
    orderMatrix = false,
    orderSaturation = false
  } = settings;
  const colorValues = Array.isArray(color) ? color : extractColorValues(color);
  const textColor = Array.isArray(color) ? makeHsl2(
    String(color[0]),
    String(color[1]),
    String(color[2]),
    String((_a = color[3]) != null ? _a : "1")
  ) : color;
  const resolve = [];
  let currentMatrix = String(colorValues[0]);
  let currentSaturation = String(colorValues[1]);
  let currentLight = String(colorValues[2]);
  let currentAlpha = String(colorValues[3]);
  if (Number.isInteger(length / 2))
    throw new Error(
      'voc\xEA deve enviar um numero impar em "length"'
    );
  const resolveColor = (i, before) => {
    const numberValues = () => {
      const matrix2 = Number(currentMatrix);
      const light2 = Number(currentLight);
      const saturation2 = Number(currentSaturation);
      const alpha2 = Number(currentAlpha);
      return { matrix: matrix2, light: light2, saturation: saturation2, alpha: alpha2 };
    };
    const { alpha, matrix, light, saturation } = numberValues();
    const context = (e) => {
      const hanldeBefore = before ? e : !e;
      const handleInverse = inverse ? !hanldeBefore : hanldeBefore;
      return handleInverse;
    };
    const newMatrix = getMatrix(
      context(orderMatrix),
      incMatrix,
      matrix
    );
    const newSaturation = withLimit(
      saturation,
      incSaturation,
      100,
      context(orderSaturation)
    );
    const newLigth = withLimit(
      light,
      incLight,
      100,
      context(orderLight)
    );
    const newAlpha = withLimit(
      alpha,
      incAlpha,
      1,
      context(orderAlpha)
    );
    currentMatrix = newMatrix;
    currentSaturation = newSaturation;
    currentLight = newLigth;
    currentAlpha = newAlpha;
    resolve[i] = makeHsl2(
      newMatrix,
      newSaturation,
      newLigth,
      newAlpha
    );
  };
  const halfLength = Math.floor(length / 2);
  switch (position) {
    case "start":
      resolve[0] = textColor;
      for (let i = 1; i < length; i++) {
        resolveColor(i, false);
      }
      break;
    case "middle":
      resolve[halfLength] = textColor;
      for (let i = halfLength - 1; i >= 0; i--) {
        resolveColor(i, true);
      }
      currentMatrix = String(colorValues[0]);
      currentSaturation = String(colorValues[1]);
      currentLight = String(colorValues[2]);
      currentAlpha = String(colorValues[3]);
      for (let i = halfLength + 1; i <= halfLength * 2; i++) {
        resolveColor(i, false);
      }
      break;
    case "end":
      resolve[length] = textColor;
      for (let i = length - 1; i >= 0; i--) {
        resolveColor(i, true);
      }
      break;
    default:
      console.log(
        "voc\xEA precisa escolher uma dire\xE7\xE3o"
      );
      break;
  }
  return resolve;
};

// src/styles/theme/default.ts
var cl_primary = {
  color: "hsl(53, 35%, 50%)",
  length: 5,
  position: "middle",
  incMatrix: 3,
  incLight: 10
};
var cl_secondary = {
  color: "hsl(296, 30%, 44%)",
  length: 5,
  position: "middle",
  incMatrix: 10,
  incLight: 15
};
var cl_text = {
  color: "hsl(52, 20%, 90%)",
  length: 5,
  position: "start",
  incMatrix: 3,
  incLight: 20,
  incSaturation: 5
};
var cl_bg = {
  color: "hsl(0, 0%, 100%)",
  length: 9,
  position: "start",
  incLight: 11
};
var cl_warning = {
  color: "hsl(41, 50%, 53%)",
  length: 5,
  position: "middle",
  incLight: 5,
  incSaturation: 15,
  incMatrix: 3
};
var cl_success = {
  color: "hsl(148, 51%, 60%)",
  length: 5,
  position: "middle",
  incLight: 10,
  incSaturation: 15,
  incMatrix: 3
};
var cl_info = {
  color: "hsl(286, 55%, 61%)",
  length: 5,
  position: "middle",
  incLight: 15,
  incSaturation: 15,
  incMatrix: 3
};
var cl_black = {
  color: "hsl(0, 0%, 0%)",
  length: 21,
  position: "start",
  orderLight: true,
  incLight: 5
};
var cl_white = {
  color: "hsl(0, 0%, 100%)",
  length: 21,
  position: "start",
  incLight: 5
};
var DefaultTheme = {
  name: "default",
  colors: {
    primary: makeHsl(cl_primary),
    _primary: makeHsl(cl_primary),
    secondary: makeHsl(cl_secondary),
    _secondary: makeHsl(cl_secondary),
    text: makeHsl(cl_text),
    _text: makeHsl(cl_text),
    bg: makeHsl(cl_bg),
    _bg: makeHsl(cl_bg),
    warning: makeHsl(cl_warning),
    _warning: makeHsl(cl_warning),
    success: makeHsl(cl_success),
    _success: makeHsl(cl_success),
    info: makeHsl(cl_info),
    _info: makeHsl(cl_info),
    black: makeHsl(cl_black),
    _black: makeHsl(cl_black),
    white: makeHsl(cl_white),
    _white: makeHsl(cl_white)
  },
  fonts: {
    family: {
      default: "Zen Dots, roboto, Open Sans, sans-serif",
      secondary: "'Montserrat', sans-serif"
    },
    sizes: {
      xxsmall: "1rem",
      xsmall: "1.2rem",
      small: "1.6rem",
      normal: "1.8rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
      xxhuge: "7.2rem",
      hero: "8.0rem",
      xhero: "8.8rem",
      xxhero: "9.6rem"
    },
    lineHeight: {
      tiny: "1",
      small: "1.2",
      medium: "1.5",
      large: "1.8"
    },
    weight: {
      light: "300",
      regular: "400",
      semiBold: "600",
      bold: "700",
      extraBold: "800"
    }
  },
  sizes: {
    xsmall: "8rem",
    small: "1.6rem",
    medium: "2.4rem",
    large: "3.2rem",
    xlarge: "4.0rem",
    xxlarge: "4.8rem",
    huge: "5.6rem",
    xhuge: "6.4rem",
    max: "96rem",
    content: "80rem"
  },
  media: {
    lSmallest: "(max-width: 360px)",
    lSmall: "(max-width: 576px)",
    lMedium: "(max-width: 768px)",
    lLarge: "(max-width: 992px)",
    gSmallest: "(min-width: 360px)",
    gSmall: "(min-width: 576px)",
    gMedium: "(min-width: 768px)",
    gLarge: "(min-width: 992px)"
  },
  spacings: {
    xxtiny: "0.1rem",
    xtiny: "0.2rem",
    tiny: "0.4rem",
    xxsmall: "0.8rem",
    xsmall: "1.2rem",
    small: "1.6rem",
    mediumSmall: "2.0rem",
    medium: "2.4rem",
    mediumLarge: "2.8rem",
    large: "3.2rem",
    xlarge: "3.6rem",
    xxlarge: "4.0rem",
    huge: "4.4rem",
    xhuge: "4.8rem",
    xxhuge: "5.6rem",
    hero: "6.4rem",
    xhero: "7.2rem",
    xxhero: "8.0rem"
  },
  frameSizes: {
    xxsmall: "8rem",
    xsmall: "12rem",
    small: "24rem",
    smallMedium: "32rem",
    medium: "40rem",
    largeMedium: "56rem",
    large: "64rem",
    xlarge: "80rem",
    xxlarge: "104rem",
    max: "120rem"
  },
  transitions: [
    "100ms",
    "200ms",
    "300ms",
    "500ms",
    "600ms",
    "800ms",
    "1s"
  ],
  radius: {
    none: 0,
    tiny: "0.2rem",
    small: "0.4rem",
    medium: "0.8rem",
    large: "1rem",
    xlarge: "10rem",
    xxlarge: "100rem",
    circle: "10%"
  },
  layers: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ]
};

// src/styles/theme/dark.ts
var dark_theme = __spreadProps(__spreadValues({}, DefaultTheme), {
  name: "dark",
  colors: __spreadProps(__spreadValues({}, DefaultTheme.colors), {
    black: makeHsl(cl_white),
    white: makeHsl(cl_black),
    bg: makeHsl(__spreadProps(__spreadValues({}, cl_bg), {
      color: "hsl(0, 0%, 100%)",
      position: "end",
      orderLight: true
    })),
    primary: makeHsl(__spreadProps(__spreadValues({}, cl_primary), {
      inverse: true
    })),
    secondary: makeHsl(__spreadProps(__spreadValues({}, cl_secondary), {
      inverse: true
    })),
    text: makeHsl(__spreadProps(__spreadValues({}, cl_text), {
      inverse: true,
      position: "end"
    })),
    warning: makeHsl(__spreadProps(__spreadValues({}, cl_warning), {
      inverse: true
    })),
    info: makeHsl(__spreadProps(__spreadValues({}, cl_info), { inverse: true })),
    success: makeHsl(__spreadProps(__spreadValues({}, cl_success), {
      inverse: true
    }))
  })
});

// src/contexts/theme/theme.tsx
var theme_exports = {};
__export(theme_exports, {
  Context: () => Context,
  Provider: () => Provider
});
import { ThemeProvider } from "@emotion/react";
import {
  createContext,
  useCallback,
  useEffect,
  useState
} from "react";
import { jsx } from "react/jsx-runtime";
var Context = createContext({
  theme: DefaultTheme,
  setTheme: (x) => x
});
var Provider = ({
  children,
  _theme
}) => {
  const [theme, setTheme] = useState(
    _theme ? _theme : DefaultTheme
  );
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme)
      return;
    const newTheme = JSON.parse(localTheme);
    setTheme(newTheme);
  }, []);
  const handle_set_theme = useCallback((mode) => {
    switch (mode) {
      case "dark":
        setTheme(dark_theme);
        localStorage.setItem(
          "theme",
          JSON.stringify(dark_theme)
        );
        break;
      default:
        setTheme(DefaultTheme);
        localStorage.setItem(
          "theme",
          JSON.stringify(DefaultTheme)
        );
        break;
    }
  }, []);
  return /* @__PURE__ */ jsx(
    Context.Provider,
    {
      value: {
        theme,
        setTheme: handle_set_theme
      },
      children: /* @__PURE__ */ jsx(ThemeProvider, { theme, children })
    }
  );
};

// src/index.tsx
import { useTheme as useTheme3 } from "@emotion/react";

// src/styles/globals.tsx
var globals_exports = {};
__export(globals_exports, {
  default: () => globals_default
});
import {
  css as css3,
  Global,
  useTheme
} from "@emotion/react";

// src/styles/css/scrollbar/scrollbar_1.css.ts
import { css } from "@emotion/react";
var CSS_ScrollBar = (theme) => css`
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    opacity: 100%;
  }
  &::-webkit-scrollbar-thumb {
    ${theme.name === "default" && css`
      background: ${theme.colors._black[3]};
    `}
    ${theme.name === "dark" && css`
      background: ${theme.colors._primary[0]};
    `}
    border-radius: 100vw;
  }
  @supports (scrollbar-color: red blue) {
    scrollbar-color: #000000 ${theme.colors.primary[2]};
    scrollbar-width: thin;
  }
`;

// src/styles/css/selection.css.ts
import { css as css2 } from "@emotion/react";
var CSS_notSelect = (theme) => css2`
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
var CSS_select = (theme) => css2`
  -webkit-tap-highlight-color: ${theme.colors.info[2]};
  -webkit-touch-callout: ${theme.colors.info[2]};
  -webkit-user-select: text;
  -khtml-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  ::selection {
    background-color: ${theme.colors.bg[3]};
    color: ${theme.colors.info[2]}
  }
`;

// src/styles/globals.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var GlobalStyles = () => {
  const theme = useTheme();
  return /* @__PURE__ */ jsx2(
    Global,
    {
      styles: css3`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap');
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          ${CSS_notSelect(theme)}
        }
        html {
          font-size: 62.5%;
          font-family: 'Roboto', sans-serif;
          scroll-behavior: smooth;
          ${CSS_ScrollBar(theme)}
        }
        --body-bg: ${theme.colors.bg[0]};
        body {
          background: ${theme.colors.bg[0]};
          font-size: 16px;
          color: ${theme.colors.text[4]};
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 300;
          margin: ${theme.spacings.large} 0;
        }

        @media ${theme.media.lMedium} {
          button {
            font-size: 1em !important;
          }
          input {
            font-size: 1em !important;
          }
        }
      `
    }
  );
};
var globals_default = GlobalStyles;

// src/components/Text/text_0/index.tsx
var text_0_exports = {};
__export(text_0_exports, {
  S: () => styles_exports,
  Text: () => Text
});

// src/components/Text/text_0/styles.ts
var styles_exports = {};
__export(styles_exports, {
  Main: () => Main
});
import { css as css4 } from "@emotion/react";
import styled from "@emotion/styled";
var Main = styled.div`
  ${({ theme }) => css4`
    ${CSS_select(theme)}
    font-size: ${theme.sizes.medium};
    color: ${theme.colors.text[4]};
  `}
`;

// src/components/Text/text_0/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Text = ({ children }) => {
  if (typeof children === "string") {
    return /* @__PURE__ */ jsx3(
      Main,
      {
        dangerouslySetInnerHTML: {
          __html: children
        }
      }
    );
  } else {
    const text = children == null ? void 0 : children.toString();
    if (text)
      return /* @__PURE__ */ jsx3(
        Main,
        {
          dangerouslySetInnerHTML: {
            __html: text
          }
        }
      );
    return /* @__PURE__ */ jsx3(
      Main,
      {
        dangerouslySetInnerHTML: {
          __html: "sem texto"
        }
      }
    );
  }
};

// src/components/Text/heading_0/index.tsx
var heading_0_exports = {};
__export(heading_0_exports, {
  Heading: () => Heading,
  S: () => styles_exports2
});

// src/components/Text/heading_0/styles.ts
var styles_exports2 = {};
__export(styles_exports2, {
  Main: () => Main2
});
import { css as css5 } from "@emotion/react";
import styled2 from "@emotion/styled";
var titleSize = {
  small: (theme) => css5`
    font-size: ${theme.sizes.medium};
  `,
  medium: (theme) => css5`
    font-size: ${theme.sizes.large};
  `,
  big: (theme) => css5`
    font-size: ${theme.sizes.xlarge};
    @media ${theme.media.lMedium} {
      font-size: ${theme.sizes.large};
    }
  `,
  huge: (theme) => css5`
    font-size: ${theme.sizes.xhuge};
    ${mediaFont(theme)}
  `
};
var mediaFont = (theme) => css5`
  @media ${theme.media.lMedium} {
    font-size: ${theme.sizes.xlarge};
  }
`;
var Main2 = styled2.h1`
  ${({ theme, size, uppercase }) => css5`
    ${CSS_select(theme)}
    color: ${theme.colors.text[4]};
    text-transform: ${uppercase ? "uppercase" : "none"};
    ${!!size && titleSize[size](theme)};
  `}
`;

// src/components/Text/heading_0/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Heading = ({
  children = "testando componente",
  as = "h2",
  size = "huge",
  uppercase = false
}) => {
  return /* @__PURE__ */ jsx4(
    Main2,
    {
      as,
      size,
      uppercase,
      children
    }
  );
};

// src/components/Switch/toggle_0/index.tsx
var toggle_0_exports = {};
__export(toggle_0_exports, {
  S: () => styles_exports3,
  Toggle: () => Toggle,
  mock: () => mock_exports
});
import { useEffect as useEffect2, useState as useState2 } from "react";

// src/components/Switch/toggle_0/styles.tsx
var styles_exports3 = {};
__export(styles_exports3, {
  Input: () => Input,
  Label: () => Label,
  Main: () => Main3,
  Slider: () => Slider
});
import { css as css6 } from "@emotion/react";
import styled3 from "@emotion/styled";
var Main3 = styled3.div`
  ${({ theme }) => css6`
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 2;
  `}
`;
var Label = styled3.label`
  ${({ theme }) => css6`
    position: relative;
    display: inline-block;
    width: 5rem;
    height: 2.5rem;
    line-height: 0;
    font-size: 0;
    overflow: hidden;
  `}
`;
var Input = styled3.input`
  ${({ theme }) => css6`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Slider}:before {
      transform: translateX(1.9rem);
    }
  `}
`;
var Slider = styled3.span`
  ${({ theme }) => css6`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.bg[5]};
    transition: all 300ms ease-in-out;
    border-radius: 2rem;
    &:before {
      content: '';
      position: absolute;
      height: 2.1rem;
      width: 2.1rem;
      left: 0.4rem;
      bottom: 0.2rem;
      background: ${theme.colors.text[0]};
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  `}
`;

// src/components/Switch/toggle_0/mock.ts
var mock_exports = {};
__export(mock_exports, {
  mock_toggle: () => mock_toggle
});
var mock_toggle = {
  text: ":D"
};

// src/components/Switch/toggle_0/index.tsx
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var Toggle = ({
  text,
  onChange,
  ifChecked,
  ifNoChecked,
  initialValue
}) => {
  const [checked, setChecked] = useState2(
    initialValue ? initialValue() : false
  );
  useEffect2(() => {
    checked && typeof ifChecked === "function" && ifChecked();
    if (!checked && typeof ifNoChecked === "function")
      ifNoChecked();
    typeof onChange === "function" && onChange(checked);
  }, [checked]);
  const handleChange = () => {
    setChecked((s) => !s);
  };
  return /* @__PURE__ */ jsx5(Main3, { children: /* @__PURE__ */ jsxs(Label, { children: [
    text,
    /* @__PURE__ */ jsx5(
      Input,
      {
        type: "checkbox",
        value: text,
        onChange: handleChange,
        checked
      }
    ),
    /* @__PURE__ */ jsx5(Slider, {})
  ] }) });
};

// src/components/Switch/toggle_theme/index.tsx
var toggle_theme_exports = {};
__export(toggle_theme_exports, {
  S: () => styles_exports4,
  ToggleTheme: () => ToggleTheme,
  mock: () => mock_exports2
});

// src/components/Switch/toggle_theme/styles.tsx
var styles_exports4 = {};
__export(styles_exports4, {
  Main: () => Main4
});
import { css as css7 } from "@emotion/react";
import styled4 from "@emotion/styled";
var Main4 = styled4.div`
  ${({ theme }) => css7`
    //
  `}
`;

// src/components/Switch/toggle_theme/mock.ts
var mock_exports2 = {};
__export(mock_exports2, {
  mock_toggle_theme: () => mock_toggle_theme
});
var mock_toggle_theme = {
  ToggleProps: mock_toggle
};

// src/components/Switch/toggle_theme/index.tsx
import { useContext } from "react";

// src/utils/is-window.ts
var if_window = (ifWindow, ifNoWindow) => {
  if (typeof window !== "undefined") {
    return ifWindow && ifWindow();
  } else {
    return ifNoWindow && ifNoWindow();
  }
};

// src/components/Switch/toggle_theme/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var ToggleTheme = () => {
  const { setTheme } = useContext(Context);
  const changeTheme = (check) => {
    return if_window(() => {
      localStorage.setItem("myCat", "Tom");
      setTheme(check ? "dark" : "light");
      console.log(check);
    });
  };
  const currentTheme = () => {
    return if_window(
      () => {
        const localTheme = localStorage.getItem("theme");
        if (!localTheme)
          return false;
        const newTheme = JSON.parse(localTheme);
        console.log(newTheme.name);
        return newTheme.name === "dark";
      },
      () => false
    );
  };
  return /* @__PURE__ */ jsx6(Main4, { children: /* @__PURE__ */ jsx6(
    Toggle,
    {
      onChange: changeTheme,
      initialValue: currentTheme
    }
  ) });
};

// src/components/Button/button_0/index.tsx
var button_0_exports = {};
__export(button_0_exports, {
  S: () => styles_exports5,
  default: () => button_0_default,
  mock: () => mock_exports3
});
import { useTheme as useTheme2 } from "@emotion/react";
import {
  useEffect as useEffect3,
  useState as useState3
} from "react";

// src/components/Button/button_0/styles.tsx
var styles_exports5 = {};
__export(styles_exports5, {
  Main: () => Main5
});
import { css as css9 } from "@emotion/react";
import styled5 from "@emotion/styled";

// src/styles/css/dynamic-button.css.ts
import { css as css8 } from "@emotion/react";
var dynamicButton = ({
  brightness,
  disabled,
  scaleWhenActive
} = {
  brightness: true,
  disabled: true,
  scaleWhenActive: true
}) => {
  return css8`
    &:focus {
      outline: none;
      ${!!brightness && css8`
        filter: brightness(110%);
      `}
    }

    &:hover {
      ${!!brightness && css8`
        filter: brightness(90%);
      `}
    }

    &:disabled {
      cursor: not-allowed;
      ${!!scaleWhenActive && css8`
        &:active {
          transform: translate(1px, 0);
        }
        &:hover {
          filter: none;
        }
      `}
    }

    &:active {
      ${!!scaleWhenActive && css8`
        transform: scale(0.99, 0.99);
      `}
    }

    &:not(:hover) {
      filter: none;
    }
  `;
};

// src/components/Button/button_0/styles.tsx
var Main5 = styled5.button`
  ${({
  theme,
  onlyIcon,
  custom,
  outline,
  iconDirection
}) => css9`
    --bg: ${custom.enabled.bg};
    --color: ${custom.enabled.color};
    --ds-color: ${custom.disabled.color};
    --ds-bg: ${custom.disabled.bg};

    background: var(--bg);
    border: none;
    color: var(--color);
    font-size: ${theme.fonts.sizes.medium};
    padding: ${theme.spacings.xsmall}
      ${theme.spacings.medium};
    cursor: pointer;
    border-radius: ${theme.spacings.tiny};
    transition: transform ${theme.transitions[0]}
      ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    ${theme.name === "default" && css9`
      box-shadow: 0px 0px 20px
        ${theme.colors.white[8]};
    `}
    > svg {
      width: 2rem;
      height: 2rem;
      ${iconDirection === "left" && !onlyIcon ? css9`
            margin-right: 1rem;
          ` : css9`
            margin-left: 1rem;
          `}
    }

    ${dynamicButton()}

    ${!!onlyIcon && css9`
      padding: ${theme.spacings.xsmall}
        ${theme.spacings.xsmall};
      border-radius: 50%;
      > svg {
        margin-left: 0;
      }
    `}
    ${outline && css9`
      border: 2px solid var(--bg);
      color: var(--bg);
      background: none;
    `}
  `}
`;

// src/components/Button/button_0/mock.tsx
var mock_exports3 = {};
__export(mock_exports3, {
  default: () => mock_default
});
var mock_button = {
  children: "children",
  isLoading: false,
  disabled: false
};
var mock_default = mock_button;

// src/components/Button/button_0/index.tsx
import { jsxs as jsxs2 } from "react/jsx-runtime";
var Button = (userSettings) => {
  const theme = useTheme2();
  const preset = {
    iconDirection: "left",
    children: void 0,
    custom: {
      enabled: {
        color: theme.colors.text[0],
        bg: theme.colors.primary[3]
      },
      disabled: {
        color: theme.colors.text[1],
        bg: theme.colors.primary[4]
      }
    },
    outline: false,
    disabled: false
  };
  const [
    {
      children,
      custom,
      disabled,
      icon,
      iconDirection,
      meta,
      onClick,
      outline,
      ref
    },
    setSettings
  ] = useState3(__spreadValues(__spreadValues({}, preset), userSettings));
  useEffect3(() => {
    userSettings.isLoading ? setSettings(__spreadValues(__spreadValues({}, preset), userSettings)) : setSettings(__spreadValues(__spreadValues({}, preset), userSettings));
    return () => setSettings({});
  }, [userSettings, theme]);
  const onlyIcon = typeof children === "undefined" && typeof icon !== "undefined";
  const styles = custom ? custom : {
    enabled: {
      color: theme.colors.text[0],
      bg: theme.colors.primary[3]
    },
    disabled: {
      color: theme.colors.text[1],
      bg: theme.colors.primary[4]
    }
  };
  return /* @__PURE__ */ jsxs2(
    Main5,
    __spreadProps(__spreadValues({
      disabled,
      onClick,
      ref,
      onlyIcon,
      custom: styles,
      outline: !!outline,
      iconDirection: iconDirection != null ? iconDirection : "left"
    }, meta), {
      children: [
        !!icon && iconDirection === "left" && icon,
        children,
        !!icon && iconDirection === "right" && icon
      ]
    })
  );
};
var button_0_default = Button;

// src/components/Button/button_1/index.tsx
var button_1_exports = {};
__export(button_1_exports, {
  S: () => styles_exports6,
  default: () => button_1_default,
  mock: () => mock_exports4
});

// src/components/Button/button_1/styles.tsx
var styles_exports6 = {};
__export(styles_exports6, {
  Button: () => Button2,
  Content: () => Content,
  IconContainer: () => IconContainer,
  Main: () => Main6,
  TextContainer: () => TextContainer
});
import { css as css10 } from "@emotion/react";
import styled6 from "@emotion/styled";
var Main6 = styled6.div`
  ${({ theme }) => css10`
    display: flex;
    --bg-icon: ${theme.colors.primary[2]};
    --bg-text: ${theme.colors.bg[1]};
    --bg-hover: var(--bg-icon);
    --bg-icon-size: 30%;
    --icon-size: 3rem;
    --container-icon: calc(
      var(--bg-icon-size) - var(--padding-x)
    );
    --mg-left-text: 34px;
    --mg-left-icon: 0px;
    --padding-x: 15px;
    --padding-y: 10px;
    --space-icon-size: calc(
      var(--bg-icon-size) + var(--padding-x)
    );
  `}
`;
var Button2 = styled6.button`
  ${({ theme }) => css10`
    ${dynamicButton()}
    position: relative;
    display: flex;
    border: 0;
    font: 600 20px 'Open Sans';
    color: ${theme.colors.text[4]};
    padding: var(--padding-y) var(--padding-x);
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    transition: background-color 100ms ease-in-out,
      color 400ms ease-in-out;
    background: -webkit-linear-gradient(
      left,
      var(--bg-icon) var(--bg-icon-size),
      var(--bg-text) 0
    );
    :hover {
      color: ${theme.colors.bg[0]};
    }
    &::after {
      position: absolute;
      background-color: var(--bg-hover);
      width: 100%;
      height: 100%;
      top: 0;
      left: -100%;
      content: '';
      -webkit-transition: 1s
        cubic-bezier(0.165, 0.85, 0.45, 1);
      transition: 1s
        cubic-bezier(0.165, 0.85, 0.45, 1);
    }
    :hover::after {
      left: 0;
    }
  `}
`;
var Content = styled6.div`
  ${({ theme }) => css10`
    display: flex;
    position: relative;
    z-index: 5;
    align-items: center;
  `}
`;
var IconContainer = styled6.div`
  ${({ theme }) => css10`
    display: flex;
    width: var(--container-icon);
    justify-content: center;
    align-items: center;
    svg {
      color: ${theme.colors.bg[0]};
      width: var(--icon-size);
      height: var(--icon-size);
    }
    margin-left: var(--mg-left-icon));
  `}
`;
var TextContainer = styled6.span`
  ${({ theme }) => css10`
    justify-content: center;
    align-items: center;
    display: flex;
    white-space: nowrap;
    margin-left: var(--mg-left-text);
  `}
`;

// src/components/Button/button_1/mock.tsx
var mock_exports4 = {};
__export(mock_exports4, {
  default: () => mock_default2
});

// ../../node_modules/react-icons/lib/esm/iconBase.js
import React2 from "react";

// ../../node_modules/react-icons/lib/esm/iconContext.js
import React from "react";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && React.createContext(DefaultContext);

// ../../node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return React2.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return React2.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return React2.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React2.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? React2.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// ../../node_modules/react-icons/ai/index.esm.js
function AiOutlineBook(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z" } }] })(props);
}

// src/components/Button/button_1/mock.tsx
var mock_button2 = {
  text: "um texto",
  Icon: AiOutlineBook
};
var mock_default2 = mock_button2;

// src/components/Button/button_1/index.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Button3 = ({ text, Icon }) => {
  return /* @__PURE__ */ jsx7(Main6, { children: /* @__PURE__ */ jsx7(Button2, { children: /* @__PURE__ */ jsxs3(Content, { children: [
    /* @__PURE__ */ jsx7(IconContainer, { children: /* @__PURE__ */ jsx7(Icon, {}) }),
    /* @__PURE__ */ jsx7(TextContainer, { children: /* @__PURE__ */ jsx7("span", { children: text }) })
  ] }) }) });
};
var button_1_default = Button3;

// src/components/Button/round_button_0/index.tsx
var round_button_0_exports = {};
__export(round_button_0_exports, {
  S: () => styles_exports7,
  default: () => round_button_0_default
});

// src/components/Button/round_button_0/styles.tsx
var styles_exports7 = {};
__export(styles_exports7, {
  Main: () => Main7
});
import { css as css11 } from "@emotion/react";
import styled7 from "@emotion/styled";
var Main7 = styled7.div`
  ${({ theme }) => css11`
    --background: ${theme.colors.primary[3][2]};
    --scale-icon: 1.5;
    --size-container: 5rem;

    display: flex;
    background: var(--background);
    justify-content: center;
    max-width: var(--size-container);
    max-height: var(--size-container);
    border-radius: 50%;
    svg {
      scale: var(--scale-icon);
      height: var(--size-container);
      width: var(--size-container);
    }
  `}
`;

// src/components/Button/round_button_0/index.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var RoundButton = ({
  children,
  onClick
}) => {
  return /* @__PURE__ */ jsx8(Main7, { onClick, children });
};
var round_button_0_default = RoundButton;

// src/components/Container/container_0/styles.tsx
var styles_exports8 = {};
__export(styles_exports8, {
  Container: () => Container
});
import { css as css12 } from "@emotion/react";
import styled8 from "@emotion/styled";
var Container = styled8.div`
  ${({ theme }) => css12`
    max-width: 80rem;
    margin: 8rem auto;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xlarge};
  `}
`;

// src/components/Container/container_1/index.tsx
var container_1_exports = {};
__export(container_1_exports, {
  Container: () => Container2,
  S: () => styles_exports9,
  mock: () => mock_exports5
});

// src/components/Container/container_1/styles.tsx
var styles_exports9 = {};
__export(styles_exports9, {
  Inside: () => Inside,
  Main: () => Main8
});
import { css as css13 } from "@emotion/react";
import styled9 from "@emotion/styled";
var Inside = styled9.div`
  ${({ theme, boxShadowOnHover }) => css13`
    --box-shadow: ${theme.name === "default" ? theme.colors.bg[3] : theme.colors.bg[2]};
    --hv-box-shadow: ${theme.name === "default" ? theme.colors[boxShadowOnHover != null ? boxShadowOnHover : "bg"][4] : theme.colors[boxShadowOnHover != null ? boxShadowOnHover : "primary"][4]};
    background: ${theme.colors.bg[0]};
    padding: ${theme.spacings.medium};
    width: 100%;
    border-radius: 3rem;
    box-shadow: 0 0.2rem 1rem var(--box-shadow);
    border: 0.1rem solid ${theme.colors.bg[0]};
    transition: all 300ms ease-in-out;
    position: relative;
    overflow: hidden;
    &:hover {
      box-shadow: 0 0 1rem var(--hv-box-shadow);
    }
  `}
`;
var Main8 = styled9.div`
  display: flex;
  justify-content: center;
`;

// src/components/Container/container_1/mock.tsx
var mock_exports5 = {};
__export(mock_exports5, {
  default: () => mock_default3
});
var mock_container = {
  children: ":D"
};
var mock_default3 = mock_container;

// src/components/Container/container_1/index.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var Container2 = ({
  children,
  custom,
  meta
}) => {
  return /* @__PURE__ */ jsx9(Main8, __spreadProps(__spreadValues({}, meta), { children: /* @__PURE__ */ jsx9(
    Inside,
    {
      boxShadowOnHover: custom == null ? void 0 : custom.boxShadowOnHover,
      children
    }
  ) }));
};

// src/index.tsx
var Theme5 = __spreadProps(__spreadValues({}, theme_exports), {
  themes: {
    default: DefaultTheme,
    dark: dark_theme
  }
});
export {
  button_0_exports as Button0,
  button_1_exports as Button1,
  styles_exports8 as Container0,
  container_1_exports as Container1,
  globals_exports as GlobalStyles,
  heading_0_exports as Heading0,
  round_button_0_exports as RoundButton0,
  text_0_exports as Text0,
  Theme5 as Theme,
  ThemeProvider2 as ThemeProvider,
  toggle_0_exports as Toggle0,
  toggle_theme_exports as ToggleTheme0,
  makeHsl,
  useTheme3 as useTheme
};
