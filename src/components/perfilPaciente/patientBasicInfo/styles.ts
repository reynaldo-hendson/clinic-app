import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBFBFB",
        display: "flex",
        width: "100%",
        paddingLeft: 75,
        paddingRight: 75,
        paddingTop: 16,
        paddingBottom: 16,
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
    photo: {
        aspectRatio: 1,
        objectFit: "contain",
        width: 110,
        maxWidth: "100%",
    },
    cpfContainer: {
        marginTop: 8,
    },
    cpfText: {
        fontSize: 21,
        fontWeight: "700",
        lineHeight: 25,
        fontFeatureSettings: "'liga' off, 'clig' off", // Aplicando ao Text
    },
    ageGenderContainer: {
        display: "flex",
        marginTop: 8,
        width: 180,
        maxWidth: "100%",
        alignItems: "stretch",
        gap: 18,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ageContainer: {
        // fontFeatureSettings não é necessário aqui porque o estilo agora é aplicado no Text
    },
    genderContainer: {
        // fontFeatureSettings não é necessário aqui porque o estilo agora é aplicado no Text
    },
    ageGenderText: {
        fontSize: 15,
        fontWeight: "400",
        lineHeight: 16.5,
        fontFeatureSettings: "'liga' off, 'clig' off",
    },
    divider: {
        borderColor: "rgba(26, 29, 30, 1)",
        borderStyle: "solid",
        borderWidth: 2,
        marginTop: "auto",
        marginBottom: "auto",
        width: 15,
        flexShrink: 0,
        height: 1,
    },
});
