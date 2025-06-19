import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12
    },

    subtitle: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 8
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8
    },

    label: {
        fontWeight: 'bold',
        marginBottom: 4
    },
    toggleContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },

    toggleButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        marginRight: 10,
    },
    selected: {
        backgroundColor: '#add8e6',
    },
    button: {
        backgroundColor: '#48D1CC',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 25,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    patientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    patientImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },

    patientName: {
        fontWeight: 'bold',
        fontSize: 16
    },

    patientDetails: {
        fontSize: 12,
        color: '#555'
    },

    pickerContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 12,
        overflow: 'hidden'
    }

});
