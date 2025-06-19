import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginTop: 16,
        marginBottom: 16,
        width: "100%",
        maxWidth: 325,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },

    addButton: {
        backgroundColor: "#48D1CC",
        borderRadius: 10,
        paddingHorizontal: 19,
        paddingVertical: 6,
        height: 50,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonText: {
        fontSize: 16,
        color: "#FBFBFB",
        fontWeight: "400",
        textAlign: "center",
        textAlignVertical: "center",
    },
});
