import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type LoginButtonProps = {
    onPress: () => void;
    loading: boolean;
};

export default function LoginButton({onPress, loading}: Readonly<LoginButtonProps>) {
    return (
        <TouchableOpacity onPress={onPress} disabled={loading} activeOpacity={0.8} style={styles.button}>
            {loading ? (
                <ActivityIndicator size="small" color="gray" />
            ) : (
                <Text style={styles.tittle}>Entrar</Text>
            )}
        </TouchableOpacity>
    );
}