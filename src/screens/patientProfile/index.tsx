import * as React from "react";
import {useEffect, useState} from "react";
import {Alert, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import { PatientUpdateModal } from "@/components/patientUpdateModal";
import ProfileHeader from "../../components/perfilPaciente/profileHeader";
import PatientBasicInfo from "../../components/perfilPaciente/patientBasicInfo";
import ContactInformation from "../../components/perfilPaciente/contatoPaciente/contactInformation";
import {NavigationProp, RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {calcularIdade} from "@/utils/utils";
import {Patient} from "@/types/patient";
import api from "@/services/api";


type RootStackParamList = {
    PatientPerfil: { patientId: number };
    AppointmentCreate: { patientId: number };
    PatientAppointments: { patientId: number };

};

type PatientProfileRouteProp = RouteProp<RootStackParamList, 'PatientPerfil'>;

export function PatientProfile() {

    const route = useRoute<PatientProfileRouteProp>();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { patientId } = route.params;
    const [patient, setPatient] = useState<Patient | null>(null);
    const [editModalVisible, setEditModalVisible] = useState(false);

    const loadPatient = () => {
        api.get(`/patients/${route.params.patientId}`)
            .then(response => setPatient(response.data))
            .catch(() => {
                Alert.alert("Erro ao carregar o perfil do paciente");
            });
    };

    useEffect(() => {
        loadPatient();
    }, [patientId]);

    if (!patient) {
        return <Text style={styles.loading}>Carregando...</Text>;
    }
    return (
        <>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <ProfileHeader
                        patientName={patient.name}
                        onEditPress={() => setEditModalVisible(true)}
                    />

                    <PatientBasicInfo
                        cpf={patient.cpf}
                        age={calcularIdade(patient.birthdate).toString()}
                        gender={patient.gender}
                    />

                    <View style={styles.contentContainer}>
                        <ContactInformation
                            phoneNumber={patient.phone}
                            email={patient.email}
                            address={patient.address}
                        />
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                navigation.navigate('AppointmentCreate', { patientId })
                            }
                        >
                            <Text style={styles.buttonText}>Marcar Sessão</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                navigation.navigate('PatientAppointments', { patientId })
                            }
                        >
                            <Text style={styles.buttonText}>Sessões</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <PatientUpdateModal
                visible={editModalVisible}
                onClose={() => setEditModalVisible(false)}
                patientId={patient.id}
                initialData={patient}
                onUpdate={loadPatient}
            />
        </>
    );
}
