
// src/screens/AppointmentCreate/styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 10,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#48D1CC'
    },
    button: {
        backgroundColor: '#48D1CC',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});