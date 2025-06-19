import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import ImageLogo from '../../components/imageLogo';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import LoginButton from "@/components/buttonLogin";
import api from "@/services/api";


export function LoginScreen(){
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation<NavigationProp<any>>();

    const handleLogin = async () => {
        try {
            const response = await api.post('/login', { username, password });
            if (response.data.success) {
                navigation.navigate('HomeProfessional');
            } else {
                Alert.alert('Erro', 'Credenciais inválidas');
            }
        } catch (error: any) {
            console.log(error.response?.data || error.message);
            Alert.alert('Erro', 'Não foi possível fazer login');
        }
    };

    return (
        <View style={styles.container}>
            <ImageLogo/>

            <Text style={styles.logo}>Psi de Criança</Text>

            <TextInput
                style={styles.input}
                placeholder="username"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput 
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <LoginButton
                onPress={handleLogin}
                loading={loading}
            />

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </View>
    );
}

