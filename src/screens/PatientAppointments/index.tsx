
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '@/services/api';
import { styles } from './styles';
import { Appointment } from '@/types/appointment';
import { parseISO, format, compareDesc } from 'date-fns';
import {AppointmentUpdateModal} from "@/components/appointmentUpdateModal";


type RouteParams = {
    patientId: number;
};

export default function PatientAppointments() {
    const route = useRoute();
    const { patientId } = route.params as RouteParams;
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

    const renderItem = ({ item }: { item: Appointment }) => (
        <View style={styles.card}>
            <Text style={styles.title}>
                Data: {format(parseISO(item.date), 'dd-MM-yyyy')}
            </Text>
            <Text>Hora: {item.time}</Text>
            <Text>Status: {item.status_appointment}</Text>
            <Text>Tipo: {item.appointment_type}</Text>
            <Text>Valor: R$ {item.value_appointment}</Text>
            <TouchableOpacity onPress={() => setSelectedAppointment(item)}>
                <Text style={{ color: '#48D1CC' }}>Editar</Text>
            </TouchableOpacity>
        </View>
    );

    const sortAppointmentsByDateTime = (list: Appointment[]) => {
        return list.sort((a, b) => {
            const dateA = parseISO(a.date);
            const dateB = parseISO(b.date);

            const dateComparison = compareDesc(dateA, dateB);
            if (dateComparison !== 0) return dateComparison;

            return b.time.localeCompare(a.time);
        });
    };

    useEffect(() => {
        api
            .get(`/appointments/by-patient/${patientId}`)
            .then((res) => {
                const sorted = sortAppointmentsByDateTime(res.data);
                setAppointments(sorted);
            })
            .catch(() => setAppointments([]));
    }, [patientId]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sessões do Paciente</Text>
            <FlatList
                data={appointments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                ListEmptyComponent={<Text>Nenhuma consulta encontrada.</Text>}
            />

            {selectedAppointment && (
                <AppointmentUpdateModal
                    visible={!!selectedAppointment}
                    onClose={() => setSelectedAppointment(null)}
                    appointmentId={selectedAppointment.id}
                    initialDate={selectedAppointment.date}
                    initialTime={selectedAppointment.time}
                    initialStatus={selectedAppointment.status_appointment}
                    initialType={selectedAppointment.appointment_type}
                    initialValue={selectedAppointment.value_appointment}
                />
            )}
        </View>
    );
}