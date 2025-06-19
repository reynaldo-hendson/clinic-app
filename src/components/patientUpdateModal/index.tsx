import React, { useEffect, useState } from 'react';
import { Alert, Modal, Text, TextInput, View, ScrollView } from 'react-native';
import {Button, RadioButton} from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { format } from 'date-fns';
import api from '@/services/api';
import { styles } from './styles';
import {formatCPF, formatPhone} from "@/utils/formatters";


type Props = {
    visible: boolean;
    onClose: () => void;
    patientId: number;
    initialData: {
        name: string;
        cpf: string;
        email: string;
        phone: string;
        gender: string;
        address: string;
        birthdate: string;
    };
    onUpdate: () => void;
};

export function PatientUpdateModal({
                                       visible,
                                       onClose,
                                       patientId,
                                       initialData,
                                       onUpdate,
                                   }: Readonly<Props>) {
    const [form, setForm] = useState({ ...initialData });
    const parseDate = (dateStr: string | undefined): Date | undefined => {
        const date = dateStr ? new Date(dateStr) : undefined;
        return date instanceof Date && !isNaN(date.getTime()) ? date : undefined;
    };

    const [inputDate, setInputDate] = useState<Date | undefined>(
        parseDate(initialData.birthdate)
    );

    useEffect(() => {
        setForm({ ...initialData });
        setInputDate(parseDate(initialData.birthdate));
    }, [initialData]);

    const handleChange = (field: keyof typeof form, value: string) => {
        setForm({ ...form, [field]: value });
    };

    const handleDateChange = (date: Date | undefined) => {
        setInputDate(date);
        if (date) {
            const formattedDate = format(date, 'yyyy-MM-dd');
            handleChange('birthdate', formattedDate);
        }
    };

    const handleSubmit = async () => {
        try {
            await api.put(`/patients/${patientId}`, form);
            Alert.alert('Sucesso', 'Paciente atualizado com sucesso!');
            onClose();
            onUpdate();
        } catch (err: any) {
            console.error(err);
            Alert.alert('Erro', 'Erro ao atualizar paciente.');
        }
    };

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

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
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
                        <Button onPress={handleSubmit} mode="contained" style={{ marginTop: 10 }}>
                            <Text>Atualizar</Text>
                        </Button>
                        <Button onPress={onClose} mode="text">
                            <Text>Cancelar</Text>
                        </Button>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}
