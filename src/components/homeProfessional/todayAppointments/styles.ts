import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    section: {
        marginHorizontal: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    item: {
        fontSize: 16,
        paddingVertical: 4,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        borderRadius: 10,
        borderColor: '#48D1CC',
        marginTop: 10,

    },
});