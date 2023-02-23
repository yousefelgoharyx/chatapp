import { Text as T } from "react-native";

type Props = {
  weight?: "bold" | "regular" | "medium" | "light";
  size?: number;
} & React.ComponentProps<typeof T>;

const Text = (props: Props) => {
  const { style, children, weight = "regular", size = 16, ...rest } = props;
  const fontFamily = `poppins-${weight}`;

  return (
    <T {...rest} style={[{ fontFamily, fontSize: size }, style]}>
      {children}
    </T>
  );
};

export default Text;
