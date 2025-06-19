import React, {useState} from 'react';
import {Alert, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {styles} from './styles';
import {format} from 'date-fns';
import {DatePickerInput} from 'react-native-paper-dates';
import {RadioButton} from "react-native-paper";
import { formatCPF, formatPhone } from '@/utils/formatters';


export function PatientRegister() {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        name: '', cpf: '', birthdate: '', email: '',
        phone: '', gender: '', address: ''
    });

    const getFieldLabel = (field: string) => {
        const labels: Record<string, string> = {
            name: 'Nome',
            cpf: 'CPF',
            email: 'Email',
            phone: 'Telefone',
            gender: 'Gênero',
            address: 'Endereço',
        };
        return labels[field] || field;
    };

    const [inputDate, setInputDate] = useState<Date | undefined>(undefined);

    const handleChange = (field: keyof typeof form, value: string) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            await api.post('/patients', form);
            Alert.alert('Sucesso', 'Paciente cadastrado com sucesso!');
            navigation.goBack();
        } catch (err: any)
            {if (err.response?.data?.message) {
                Alert.alert('Erro', err.response.data.message);
        } else {
            Alert.alert('Erro', 'Erro inesperado ao cadastrar paciente');
        }
            console.error('Erro no cadastro:', err);
        }
    };

    const handleDateChange = (date: Date | undefined) => {
        setInputDate(date);

        if (date) {
            const formattedDate = format(date, 'yyyy-MM-dd');
            handleChange('birthdate', formattedDate);
        }
    };

    return (

        <ScrollView contentContainerStyle={styles.container}>
            {(['name', 'cpf', 'email', 'phone', 'address'] as const).map((field) => (
                <View key={field}>
                    <Text style={styles.label}>
                        {getFieldLabel(field)}
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder={field.replace('_', ' ').toLowerCase()}
                        value={form[field]}
                        keyboardType={field === 'cpf' || field === 'phone' ? 'numeric' : 'default'}
                        maxLength={field === 'cpf' ? 14 : field === 'phone' ? 15 : undefined}
                        onChangeText={(text) => {
                            let formatted = text;
                            if (field === 'cpf') {
                                formatted = formatCPF(text);
                            } else if (field === 'phone') {
                                formatted = formatPhone(text);
                            }
                            handleChange(field, formatted);
                        }}
                    />
                </View>
            ))}
            <View style={{ marginBottom: 5 }}>
                <Text style={styles.label}>Gênero</Text>
                <RadioButton.Group
                    onValueChange={(value) => handleChange('gender', value)}
                    value={form.gender}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value="Masculino" />
                        <Text style={{ marginRight: 20 }}>Masculino</Text>

                        <RadioButton value="Feminino" />
                        <Text>Feminino</Text>
                    </View>
                </RadioButton.Group>
            </View>

            <View style={{ marginTop: 40 }}>
                <DatePickerInput
                    locale="pt"
                    label="Data de nascimento"
                    value={inputDate}
                    onChange={handleDateChange}
                    inputMode="start"
                    mode="outlined"
                    style={{ marginBottom: 30 }}
                    contentStyle={{ height: 56 }}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
