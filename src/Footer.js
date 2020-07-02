import React from 'react'
import { Container, Row, Col} from 'styled-bootstrap-grid'

import {colors} from './theam'
export default function Footer() {
    return (
        <Container style={{background: colors.black}}>
            <Row md={4}>Khmer Movies</Row>
            <Row md={4}>Khmer Movies</Row>
            <Row md={4}>Khmer Movies</Row>
        </Container>
    )
}
