import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 16
    },
    list: {
        paddingBottom: 16
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4
    },
    detail: {
        fontSize: 14,
        marginBottom: 4
    },
    button: {
        marginTop: 10,
        backgroundColor: '#48D1CC',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
