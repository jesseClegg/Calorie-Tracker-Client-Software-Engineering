import Container from "@mui/material/Container";
import * as React from 'react';
import DateRangePicker from './DateRangePicker';
import Calendar from "../components/Calendar";


export function PastDatesPage() {
    return <Container>Select a Past Date
        <Calendar />
    </Container>

}
export default PastDatesPage;