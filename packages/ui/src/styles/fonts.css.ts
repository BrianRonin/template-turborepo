import { css } from "@emotion/react"

const lato = css`
  @font-face {
    font-family: "LatoBlack";
    src: url("../../fonts/lato/Lato-Black.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "LatoBlackItalic";
    src: url("../../fonts/lato/Lato-BlackItalic.ttf") format('truetype');
    font-style: italic;
  }
  @font-face {
    font-family: "LatoBold";
    src: url("../../fonts/lato/Lato-Bold.ttf") format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: "LatoBoldItalic";
    src: url("../../fonts/lato/Lato-BoldItalic.ttf") format('truetype');
    font-style: italic;
  }
  @font-face {
    font-family: "LatoLight";
    src: url("../../fonts/lato/Lato-Light.ttf") format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: "LatoLightItalic";
    src: url("../../fonts/lato/Lato-LightItalic.ttf") format('truetype'); 
    font-style: italic;
  }
  @font-face {
    font-family: "LatoRegular";
    src: url("../../fonts/lato/Lato-Regular.ttf") format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: "LatoThin";
    src: url("../../fonts/lato/Lato-Thin.ttf") format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: "LatoThinItalic";
    src: url("../../fonts/lato/Lato-ThinItalic.ttf") format('truetype');
    font-style: italic;
  }
`

const myFonts = css`
  ${lato}
`


export default myFonts