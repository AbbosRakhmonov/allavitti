import React from "react";
import Container from "../../Components/Container";
import Section from "../../Components/Section";
import Main from "../Main/Main";
function Home() {
    return(
        <Container>
            <Section full={true}>
                <Main/>
            </Section>
            {/* <Section full={true}>
                <h1>Section 2</h1>
            </Section> */}
        </Container>
    )
}

export default Home;