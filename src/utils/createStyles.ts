import { StyleSheet, useColorScheme } from "react-native";
import { Theme, themes } from "../theme/theme";

export type StylerFn = (theme: Theme) => StyleSheet.NamedStyles<any>;

export function useStyles(fn: StylerFn) {
  const scheme = useColorScheme();
  console.log(scheme);

  return fn(themes[scheme]);
}

export function useTheme() {
  return themes[useColorScheme()];
}
