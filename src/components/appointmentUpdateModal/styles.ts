import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    modalOverlay: {
    flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#48D1CC',
        borderRadius: 5,
        padding: 10,

    },
});