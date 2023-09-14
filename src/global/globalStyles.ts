import { StyleSheet } from "react-native";
import Color from "../constants/Color";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const globalStyles = StyleSheet.create({
  label: {
    fontFamily: "PLUS-JAKARTA-SANS-SEMI-BOLD",
    color: Color.SECONDARY_TEXT,
    fontSize: moderateScale(10),
  },
  bodyText: {
    fontFamily: "PLUS-JAKARTA-SANS-REGULAR",
  },
  heading: {
    fontFamily: "PLUS-JAKARTA-SANS-MEDIUM",
    fontSize: moderateScale(18),
    lineHeight: 26,
    fontWeight: "bold",
  },
  title: {
    fontFamily: "PLUS-JAKARTA-SANS-BOLD",
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "bold",
  },
  callToAction: {
    fontFamily: "PLUS-JAKARTA-SANS-EXTRA-BOLD",
    fontSize: 26,
    lineHeight: 30,
  },
  buttonText: {
    fontFamily: "PLUS-JAKARTA-SANS-BOLD",
    fontSize: 16,
    lineHeight: 20,
  },
  TextBold: {
    fontFamily: "PLUS-JAKARTA-SANS-BOLD",
    fontSize: moderateScale(14),
  },
  TextGreen: {
    color: "rgb(40,167,69)",
  },
  TextGrey: {
    color: "rgb(128,140,157)",
  },
  TextGreyLight: {
    color: "rgb(173,181,204)",
  },
  TextGreyLight4: {
    color: "rgb(128,155,175)",
  },
  TextLight: {
    fontFamily: "PLUS-JAKARTA-SANS-LIGHT",
  },
  TextMedium: {
    fontFamily: "PLUS-JAKARTA-SANS-MEDIUM",
  },
  TextPrimary: {
    color: "#013760",
  },
  TextPrimaryOpacity3: {
    color: "#0137604D",
  },
  TextPrimaryOpacity5: {
    color: "#01376080",
  },
  TextPrimaryOpacity75: {
    color: "#013760bf",
  },
  TextRed: {
    color: "#E54F6D",
  },
  TextRegular: {
    fontFamily: "PLUS-JAKARTA-SANS-REGULAR",
  },
  TextSecondary: {
    color: "rgb(148,207,222)",
  },
  TextSecondaryDark: {
    color: "rgb(38,106,158)",
  },
  TextSemiBold: {
    fontFamily: "PLUS-JAKARTA-SANS-SEMI-BOLD",
  },
  TextWhite: {
    color: "rgb(255,255,255)",
  },
  TextWhiteOpacity5: {
    color: "#ffffff80",
  },
  TextWhiteOpacity75: {
    color: "#ffffffbf",
  },
  h1: {
    fontFamily: "PLUS-JAKARTA-SANS-SEMI-BOLD",
    fontSize: 40,
    letterSpacing: -0.02,
    lineHeight: 48,
  },
  h2: {
    fontFamily: "PLUS-JAKARTA-SANS-SEMI-BOLD",
    fontSize: 32,
    lineHeight: 48,
  },
  h3: {
    fontFamily: "PLUS-JAKARTA-SANS-SEMI-BOLD",
    fontSize: 28,
    lineHeight: 32,
  },
  h4: {
    fontSize: 24,
    lineHeight: 28,
  },
  h5: {
    fontSize: 18,
    lineHeight: 22,
  },
  // label: {
  //   color: "#809BAF",
  //   fontWeight: "700",
  //   marginBottom: 13,
  // },
  p: {
    fontSize: 16,
    lineHeight: 24,
  },
  p10: {
    fontSize: 10,
    lineHeight: 12,
  },
  p12: {
    fontSize: 12,
    lineHeight: 16,
  },
  p14a: {
    fontSize: 14,
    lineHeight: 20,
  },
  p14b: {
    fontSize: 14,
    lineHeight: 24,
  },
  p18: {
    fontSize: 18,
    lineHeight: 24,
  },
  p8: {
    fontSize: 8,
    lineHeight: 6,
  },
  container: {
    flex: 1,
    backgroundColor: Color.PRIMARY,
  },
  headerContainer: {
    backgroundColor: Color.PRIMARY,
    justifyContent: "center",
  },
  headerText: {
    marginHorizontal: 10,
    color: Color.WHITE,
    fontSize: 22,
    fontFamily: "PLUS-JAKARTA-SANS-BOLD",
    paddingTop: 10,
    paddingBottom: 5,
  },
});

export default globalStyles;
