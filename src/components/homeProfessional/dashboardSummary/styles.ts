import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // DashboardSummary
    summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 16,
    },
    card: {
        backgroundColor: '#f2f2f2',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        width: 100,
        elevation: 2,
    },
    number: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
});