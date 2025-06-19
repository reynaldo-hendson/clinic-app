// components/homeProfessional/recentPatients.tsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { Patient } from '@/types/patient';

export default function RecentPatients({ patients }: { patients: Patient[] }) {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>🧍 Últimos Pacientes</Text>
            <FlatList
                data={patients.slice(0, 3)}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item.name} - {item.phone}</Text>
                )}
            />
        </View>
    );
}
