import React from 'react';
import {Col, Row, Container} from "react-bootstrap";

function Footer(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col className={"text-center py-3"}>
                        Copyright &copy; ProShop
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;