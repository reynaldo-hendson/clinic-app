import React, {useEffect, useState} from 'react';
import {Alert, Modal, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import {DatePickerInput, TimePickerModal} from 'react-native-paper-dates';
import {format} from 'date-fns';
import api from '@/services/api';
import {styles} from './styles';
import {Picker} from "@react-native-picker/picker";
import {formatCurrency} from "@/utils/formatCurrency";

type Props = {
    visible: boolean;
    onClose: () => void;
    appointmentId: number;
    initialDate: string;
    initialTime: string;
    initialStatus: string;
    initialType: string;
    initialValue: string;
};

export function AppointmentUpdateModal({ visible,
                                           onClose,
                                           appointmentId,
                                           initialDate,
                                           initialTime,
                                           initialStatus,
                                           initialType,
                                           initialValue}: Readonly<Props>) {

    const [inputDate, setInputDate] = useState<Date | undefined>(
        initialDate ? new Date(initialDate) : undefined
    );
    const [time, setTime] = useState(initialTime);
    const [timeModalVisible, setTimeModalVisible] = useState(false);
    const [status, setStatus] = useState(initialStatus);
    const [type, setType] = useState(initialType);
    const [value, setValue] = useState(String(initialValue));

    useEffect(() => {
        setInputDate(initialDate ? new Date(initialDate) : undefined);
        setTime(initialTime);
        setStatus(initialStatus);
        setType(initialType);
        setValue(String(initialValue));
    }, [initialDate, initialTime, initialStatus, initialType, initialValue]);

    const handleDateChange = (date: Date | undefined) => {
        setInputDate(date);
    };

    const handleSubmit = async () => {
        if (!inputDate || !time) {
            Alert.alert('Erro', 'Preencha todos os campos.');
            return;
        }

        try {
            await api.put(`/appointments/${appointmentId}`, {
                date: format(inputDate, 'yyyy-MM-dd'),
                time,
                status_appointment: status,
                appointment_type: type,
                value_appointment: value,
            });
            Alert.alert('Sucesso', 'Agendamento atualizado.');
            onClose(); // fecha o modal
        } catch (err) {
            Alert.alert('Erro', 'Falha ao atualizar o agendamento.');
            console.error(err);
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>

                    <Text style={styles.label}>Data</Text>
                    <View style={{ marginBottom: 20 }}>
                    <DatePickerInput
                        locale="pt"
                        label="Data"
                        value={inputDate}
                        onChange={handleDateChange}
                        inputMode="start"
                    />
                    </View>

                    <Text style={styles.label}>Novo Horário</Text>
                    <View style={{ marginBottom: 10 }}>
                        <Button onPress={() => setTimeModalVisible(true)} mode="outlined">
                            {time ? `Horário: ${time}` : 'Selecionar Horário'}
                        </Button>
                        <TimePickerModal
                            visible={timeModalVisible}
                            onDismiss={() => setTimeModalVisible(false)}
                            onConfirm={({ hours, minutes }) => {
                                const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
                                setTime(formattedTime);
                                setTimeModalVisible(false);
                            }}
                            hours={12}
                            minutes={0}
                        />
                        <Text style={styles.label}>Status da Consulta</Text>
                        <View style={styles.input}>
                            <Picker
                                selectedValue={status}
                                onValueChange={(itemValue) => setStatus(itemValue)}
                                style={{ borderWidth: 0 }}
                            >
                                <Picker.Item label="Agendada" value="Agendada" />
                                <Picker.Item label="Confirmado" value="Confirmado" />
                                <Picker.Item label="Cancelada" value="Cancelada" />
                            </Picker>
                        </View>

                        <Text style={styles.label}>Tipo de Consulta</Text>
                        <View style={styles.input}>
                            <Picker
                                selectedValue={type}
                                onValueChange={(itemValue) => setType(itemValue)}
                                style={{ borderWidth: 0 }}
                            >
                                <Picker.Item label="Presencial" value="Presencial" />
                                <Picker.Item label="Online" value="Online" />
                            </Picker>
                        </View>

                        <Text style={styles.label}>Valor (R$)</Text>
                        <TextInput
                            value={value}
                            onChangeText={(text)=>setValue(formatCurrency(text))}
                            keyboardType="numeric"
                            style={styles.input}
                        />
                    </View>

                    <Button onPress={handleSubmit} mode="contained" style={{ marginTop: 10 }}>
                        <Text>Atualizar</Text>
                    </Button>
                    <Button onPress={onClose} mode="text">
                        <Text>Cancelar</Text>
                    </Button>
                </View>
            </View>
        </Modal>
    );
}
