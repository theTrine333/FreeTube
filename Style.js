import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");
export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  rowContainer: {
    paddingHorizontal: 20,
    width: width,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textLogo: {
    flexDirection: "row",
  },
  LogoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E2003A",
  },
});
