import * as React from "react";
import {Text, View} from "react-native";
import {styles} from "./styles"; // Importando os estilos do arquivo styles.ts

interface PatientBasicInfoProps {
    cpf: string;
    age: string;
    gender: string;
}

const PatientBasicInfo: React.FC<PatientBasicInfoProps> = ({
                                                               cpf,
                                                               age,
                                                               gender,
                                                           }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cpfContainer}>
                <Text style={styles.cpfText}>CPF: {cpf}</Text>
            </View>
            <View style={styles.ageGenderContainer}>
                <View style={styles.ageContainer}>
                    <Text style={styles.ageGenderText}>{age} anos</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.genderContainer}>
                    <Text style={styles.ageGenderText}>{gender}</Text>
                </View>
            </View>
        </View>
    );
};

export default PatientBasicInfo;
