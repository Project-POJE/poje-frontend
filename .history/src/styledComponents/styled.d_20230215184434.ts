import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainColor: string;
    mainColorDark: string;
    mainColorThickDark: string;
    mainColorSemiDark: string;
    mainColorLight: string;
    mainColorLightTransparency: string;
    colorPink: string;
    colorDarkBlue: string;
    textColor: string;
    textColorToneDown: string;
    textColorToneDownTick: string;
    darkBgColor: string;
    modalBackgroundColor: string;
    bgColor: string;
    bgSemiDarkColor: string;
    bgAccentColor: string;
    accentColor: string;
    textAccentColor: string;

    borderColor: string;
    iconSize: string;
    fontMiddleSize: string;
    fontLargeRegular: string;
    fontLargeSize: string;
    fontRegular: string;
    fontSmall: string;
    fontMicro: string;

    //포토폴리오
    fontSectionTitle: string;
  }
}
