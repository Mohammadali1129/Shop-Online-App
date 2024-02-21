import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="d-flex justify-content-center align-items-center">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>Shop Online &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
