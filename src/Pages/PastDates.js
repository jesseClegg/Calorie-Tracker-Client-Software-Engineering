import Container from "@mui/material/Container";
import * as React from 'react';
import DateRangePicker from './DateRangePicker';
import Calendar from "../components/Calendar";
import CaloriesForOneDayWidget from "../components/CaloriesForOneDayWidget"

export function PastDatesPage() {
    return <Container>Select a Past Date
        <Calendar />
        <CaloriesForOneDayWidget />
    </Container>

}
export default PastDatesPage;