import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#198CFF",
        alignSelf: "stretch",
        display: "flex",
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        alignItems: "stretch",
        gap: 20,
        color: "#000",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
        flexDirection: "row",
    },
    leftColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    },
    dateRow: {
        display: "flex",
        alignItems: "stretch",
        gap: 5,
        fontWeight: "700",
        flexDirection: "row",
    },
    icon: {
        aspectRatio: 1,
        objectFit: "contain",
        width: 24,
        flexShrink: 0,
    },
    dateTextContainer: {
        fontFeatureSettings: "'liga' off, 'clig' off",
        marginTop: "auto",
        marginBottom: "auto",
        flexGrow: 1,
        flexShrink: 1,
        width: 116,
    },
    dateText: {
        fontWeight: "700",
    },
    timeRow: {
        display: "flex",
        marginTop: 14,
        alignItems: "stretch",
        gap: 8,
        fontWeight: "400",
        flexDirection: "row",
    },
    timeTextContainer: {
        fontFeatureSettings: "'liga' off, 'clig' off",
        marginTop: "auto",
        marginBottom: "auto",
    },
    timeText: {
        fontWeight: "400",
    },
    rightColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        fontWeight: "400",
    },
    typeTextContainer: {
        fontFeatureSettings: "'liga' off, 'clig' off",
        marginTop: 22,
    },
    typeText: {
        fontWeight: "400",
    },
});