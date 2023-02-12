import React from 'react'
import Container from './Components/Container'
import Section from './Components/Section'

function App() {
    return (
        <Container>
            <Section full={true}>
                <h1>Section 1</h1>
            </Section>
            <Section full={true}>
                <h1>Section 2</h1>
            </Section>
        </Container>
    )
}

export default App
