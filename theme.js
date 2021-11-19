import { Platform } from "react-native";

const theme = {
    dark: "#333",
    lessDark: "#777",
    light: "#fafafa",
    blue: "#1e90ff",
    red: "#ff6347",
    headerFont: 24,
    smallRadius: 5,
    bigRadius: 15,
    fontFamily: Platform.select({
        android: "Roboto",
        ios: "Helvetica",
        default: "System"
    }),
    boxShadow: {
        shadowColor: "#333",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 0
        },
    }
};

export default theme;