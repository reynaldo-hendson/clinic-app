import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "@/screens/loginScreen";
import {HomeProfessional} from "@/screens/homeProfessional";
import {PatientProfile} from "@/screens/patientProfile";
import {PatientRegister} from "@/screens/patientRegister";
import {PatientList} from "@/screens/patientList";
import {AppointmentList} from "@/screens/appointmentList";
import {AppointmentCreate} from "@/screens/appointmentCreate";
import PatientAppointments from "../screens/PatientAppointments";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#48D1CC',
                    },
                    headerTintColor: '#f2f2f2',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerTitleAlign: 'left',
                }}>
                <Stack.Screen
                    name="loginScreen"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="HomeProfessional"
                    component={HomeProfessional}
                    options={{headerShown: false}}
                    />
                <Stack.Screen
                    name="AppointmentCreate"
                    component={AppointmentCreate}
                    options={{ title: 'Marcar Sessão' }}
                />
                <Stack.Screen
                    name="PatientList"
                    component={PatientList}
                    options={{ title: 'Pacientes' }}
                />
                <Stack.Screen
                    name="AppointmentList"
                    component={AppointmentList}
                    options={{ title: 'Sessões' }}
                />
                <Stack.Screen
                    name="PatientProfile"
                    component={PatientProfile}
                    options={{ title: 'Perfil' }}
                />
                <Stack.Screen
                    name="PatientRegister"
                    component={PatientRegister}
                    options={{ title: 'Cadastrar Paciente' }}
                />
                <Stack.Screen
                    name="PatientAppointments"
                    component={PatientAppointments}
                    options={{ title: 'Sessões do Paciente' }}
                />
            </Stack.Navigator>
    )
}