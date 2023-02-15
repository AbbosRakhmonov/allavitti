import React from 'react'
import Container from './Components/Container'
import Section from './Components/Section'
import FirstPage from './Pages/FirstPage/FirstPage'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import ThirdPage from './Pages/ThirdPage/ThirdPage'
import FifthPage from './Pages/FifthPage/FifthPage'

function App() {
    return (
        <Container>
            <Section full={true}>
                <FirstPage/>
            </Section>
            <Section full={true}>
                <ProductsPage/>
            </Section>
            <Section full={true}>
                <ThirdPage/>
            </Section>
            <Section full={true}>
                <FifthPage/>
            </Section>
        </Container>
    )
}
export default App
