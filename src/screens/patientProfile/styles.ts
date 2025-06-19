import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#F2F2F2",
    },
    container: {
        backgroundColor: "#F2F2F2",
        flex: 1,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 480,
        width: "100%",
        paddingTop: 44,
        paddingBottom: 190,
        overflow: "hidden",
        fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
        color: "#000",
        letterSpacing: 0.8,
    },
    contentContainer: {
        backgroundColor: "#FBFBFB",
        display: "flex",
        width: "100%",
        marginTop: 30,
        marginBottom: 30,
        paddingLeft: 26,
        paddingRight: 26,
        flexDirection: "column",
        fontSize: 15,
        color: "rgba(0, 0, 0, 1)",
        lineHeight: 16.5,
        height: 150,
    },
    loading: {
        padding: 20,
        fontSize: 16,
        textAlign: 'center'
    },
    containerButton: {
        display: "flex",
        marginTop: 16,
        width: "100%",
        maxWidth: 325,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,

    },

    button: {
        backgroundColor: "#48D1CC",
        borderRadius: 10,
        paddingHorizontal: 19,
        paddingVertical: 6,
        width: 160,
        height: 50,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        color: "#FBFBFB",
        fontWeight: "400",
        textAlign: "center",
        textAlignVertical: "center",
    },
});
