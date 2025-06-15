export type Appointment = {
    id: number;
    date: string;
    time: string;
    patientName: string;
    status_appointment: string,
    appointment_type: string,
    value_appointment: string,
};

export type AppointmentCreatePayload = {
    patient_id: number;
    date: string;
    time: string;
    status_appointment: string;
    appointment_type: string;
    value_appointment: string;

};