import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBFBFB",
        width: "100%",
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: "center",
    },
    backIcon: {
        aspectRatio: 1,
        objectFit: "contain",
        width: 24,
        flexShrink: 0,
    },
    titleContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    title: {
        fontSize: 21,
        fontWeight: "700",
        textAlign: "center",

    },
    actionIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },

    actionButton: {
        position: "absolute",
        right: 25,
        top: 5,
    },
});
