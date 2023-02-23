import Icon from "@expo/vector-icons/Feather";
import { useTheme } from "../utils/createStyles";
type Props = {
  name: keyof typeof Icon.glyphMap;
  size?: number;
} & React.ComponentProps<typeof Icon>;
const Iconizer = (props: Props) => {
  const { name, size = 24, ...rest } = props;
  const theme = useTheme();
  return <Icon name={name} size={size} color={theme.text} {...rest} />;
};

export default Iconizer;
