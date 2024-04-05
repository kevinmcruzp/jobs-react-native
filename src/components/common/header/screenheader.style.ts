import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

interface Styles { 
  btnContainer: ViewStyle
  btnImg: (dimension: string | number) => ImageStyle
}

const styles = StyleSheet.create<Styles |  any>({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
