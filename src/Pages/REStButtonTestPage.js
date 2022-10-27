
import Container from "@mui/material/Container";
import GetActivitiesRequestButton from "./RESTTestButtons/GetActivitiesRequestButton";
import GetDaysRequestButton from "./RESTTestButtons/GetDaysRequestButton";
import GetFoodsRequestButton from "./RESTTestButtons/GetFoodsRequestButton";

export function REStButtonTestPage() {
    return <Container>RESTButtonTestPage

        <GetActivitiesRequestButton />
        <GetDaysRequestButton />
        <GetFoodsRequestButton />


    </Container>;
}
export default REStButtonTestPage;