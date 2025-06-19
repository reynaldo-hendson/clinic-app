import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "stretch",
        gap: 8,
        marginTop: 8,
        flexDirection: "row",
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 8,
        resizeMode: 'contain',
        color: "#48D1CC",
    },
    textContainer: {
        marginTop: "auto",
        marginBottom: "auto",
        flexBasis: "auto",
    },
    multilineTextContainer: {
        flexBasis: "auto",
        flexGrow: 1,
        flexShrink: 1,
    },
    text: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 17,
    },
});
