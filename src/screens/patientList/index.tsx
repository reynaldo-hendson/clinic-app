import React, {useCallback, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import {styles} from './styles';
import {Patient} from "@/types/patient";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ButtonAdd} from "@/components/buttonAdd";
import { SearchBox} from "@/components/searchBox";

export function PatientList() {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    useFocusEffect(
        useCallback(() => {
            api.get('/patients')
                .then(response => {
                    setPatients(response.data);
                    setFilteredPatients(response.data);
                })
                .catch(() => console.error('Erro ao carregar pacientes'));
        }, [])
    );

    const handleSearch = (text: string) => {
        const filtered = patients.filter(patient =>
            patient.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredPatients(filtered);
    };

    const renderItem = ({ item}: { item: Patient }) => (
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>Telefone: {item.phone}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PatientProfile', { patientId: item.id })}
            >
                <Text style={styles.buttonText}>Ver Perfil</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>

            <ButtonAdd routeName="PatientRegister" label="➕ Adicionar Paciente" />
            <SearchBox onSearch={handleSearch} />
            <FlatList
                data={filteredPatients}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}
