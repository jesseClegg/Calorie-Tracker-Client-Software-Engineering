import Container from "@mui/material/Container";
import Activities from "../components/Activity";
import CaloriesForOneDayWidget from "../components/CaloriesForOneDayWidget"

export function ActivityPage() {
    return <Container>Activity
        <CaloriesForOneDayWidget />
        <Activities />
    </Container>;
}
export default ActivityPage;