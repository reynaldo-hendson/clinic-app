import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 40,
        color: '#48D1CC',
    },
    input: {
        height: 50,
        borderColor: '#48D1CC',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft: 10,
    },
    forgotPassword: {
        textAlign: 'center',
        color: '#48D1CC',
        marginTop: 10,
    },

    button: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#48D1CC",
        borderRadius: 10
    },
    tittle:{
        fontSize: 16,
        color: "#FFF",
        fontWeight: "bold"
    }
});