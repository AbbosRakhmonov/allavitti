import React from 'react'
import Container from './Components/Container'
import Section from './Components/Section'
import ThirdPage from './pages/ThirdPage/ThirdPage'
import FifthPage from './pages/FifthPage/FifthPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'

function App() {
    return (
        <Container>
            <Section full={true}>
                <h1>Section 1</h1>
            </Section>
            <Section full={true}>
                <ThirdPage/>
            </Section>
            <Section full={true}>
                <FifthPage/>
            </Section>
            <Section full={true}>
                <ProductsPage/>
            </Section>
        </Container>
    )
}

export default App
