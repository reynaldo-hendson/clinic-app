import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-start",
        display: "flex",
        marginTop: 16,
        width: "100%",
        maxWidth: 325,
        alignItems: "flex-start",
        marginLeft: 0,
        gap: 16,
        flexDirection: "row",
    },
    inputContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EDEDED",
        backgroundColor: "#FFF",
        height: 50,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginBottom: 20,
        width: "100%",
    },
    input: {
        fontSize: 15,
        color: "#000",
        flex: 1,
        fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
    },
    filterIcon: {
        width: 50,
        height: 50,
    },
});