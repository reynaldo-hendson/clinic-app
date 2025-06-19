import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import api from '../../services/api';
import {styles} from './styles';
import {Patient} from '@/types/patient';
import {AppointmentCreatePayload} from '@/types/appointment';
import {Button} from 'react-native-paper';
import {DatePickerInput, TimePickerModal} from 'react-native-paper-dates';

import {format} from 'date-fns';
import {formatCurrency} from "@/utils/formatCurrency";

export function AppointmentCreate() {
    const navigation = useNavigation();
    const [patients, setPatients] = useState<Patient[]>([]);
    const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined)
    const [visible, setVisible] = React.useState(false)

    const onDismiss = React.useCallback(() => {
        setVisible(false)
    }, [setVisible])

    const [form, setForm] = useState<AppointmentCreatePayload>({
        patient_id: 0,
        date: '',
        time: '',
        status_appointment: 'Agendada',
        appointment_type: 'Presencial',
        value_appointment: '',
    });

    useEffect(() => {
        api.get('/patients')
            .then((res) => setPatients(res.data))
            .catch(() => Alert.alert('Erro', 'Não foi possível carregar os pacientes'));
    }, []);

    const handleChange = (field: keyof AppointmentCreatePayload, value: string | number) => {
        if (field === 'patient_id') {
            setForm({ ...form, [field]: Number(value) });
        } else {
            setForm({ ...form, [field]: value });
        }
    };

    const handleDateChange = (date: Date | undefined) => {
        setInputDate(date);

        if (date) {
            const formattedDate = format(date, 'yyyy-MM-dd');
            handleChange('date', formattedDate);
        }
    };

    const handleSubmit = async () => {
        if (!form.patient_id || !form.date || !form.time) {
            Alert.alert('Erro', 'Preencha todos os campos obrigatórios.');
            return;
        }

        try {

            await api.post('/appointments', {
                ...form,
                patient_id: Number(form.patient_id),
            });

            Alert.alert('Sucesso', 'Agendamento criado');
            navigation.goBack();
        } catch (err: any)
            {if (err.response?.data?.message) {
                Alert.alert('Erro', err.response.data.message);
            } else {
                Alert.alert('Erro', 'Erro inesperado ao criar agendamento');
            }

                console.error('Erro no agendamento:', err);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Selecione o Paciente</Text>
            <View style={styles.input}>
                <Picker
                    selectedValue={form.patient_id}
                    onValueChange={(value) => handleChange('patient_id', Number(value))}
                    style={{borderWidth: 0, borderColor: 'transparent'}}
                >
                    <Picker.Item label="Selecione..." value={0}/>
                    {patients.map((p) => (
                        <Picker.Item key={p.id} label={p.name} value={p.id}/>
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Data</Text>
            <View style={{zIndex: 1}}>
                <DatePickerInput
                    locale="pt"
                    label="Data"
                    value={inputDate}
                    onChange={handleDateChange}
                    inputMode="start"
                />
            </View>

            <Text style={styles.label}>Hora</Text>
            <View style={{marginTop: 10, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button onPress={() => setVisible(true)} uppercase={false} mode="outlined">
                    <Text>Horário</Text>
                </Button>

                {form.time !== '' && (
                    <Button disabled mode="outlined" labelStyle={{fontSize: 16, fontWeight: 'bold', color: '#BA68C8' }}
                            onPress={() => {
                                setVisible(true);
                                setInputDate(new Date(form.date));
                            }}>
                        <Text>{form.time}</Text>
                    </Button>
                )}

                <TimePickerModal
                    visible={visible}
                    onDismiss={onDismiss}
                    onConfirm={({ hours, minutes }: { hours: number; minutes: number }) => {
                        setVisible(false);
                        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
                        handleChange('time', formattedTime);
                    }}
                    hours={12}
                    minutes={14}
                />
            </View>

            <Text style={styles.label}>Status da Consulta</Text>
            <View style={styles.input}>
                <Picker
                    selectedValue={form.status_appointment}
                    onValueChange={(value) => handleChange('status_appointment', value)}
                    style={{borderWidth: 0, borderColor: 'transparent'}}

                >
                    <Picker.Item label="Agendada" value="Agendada"/>
                    <Picker.Item label="Confirmado" value="Confirmado"/>

                </Picker>
            </View>

            <Text style={styles.label}>Tipo de Consulta</Text>
            <View style={styles.input}>
                <Picker
                    selectedValue={form.appointment_type}
                    onValueChange={(value) => handleChange('appointment_type', value)}
                    style={{borderWidth: 0, borderColor: 'transparent'}}
                >
                    <Picker.Item label="Presencial" value="Presencial"/>
                    <Picker.Item label="Online" value="Online"/>
                </Picker>
            </View>

            <Text style={styles.label}>Valor</Text>
            <TextInput
                style={styles.input}
                placeholder="R$ 0.00"
                value={form.value_appointment}
                onChangeText={(v) => {
                    const formatted = formatCurrency(v);
                    handleChange('value_appointment', formatted);
                }}
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Agendar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

//payload
// {
//     "patient_id": 1,
//     "date": "2024-05-10",
//     "time": "10:00",
//     "status_appointment": "Confirmado",
//     "appointment_type": "Presencial",
//     "value_appointment": "100.00"
// }

