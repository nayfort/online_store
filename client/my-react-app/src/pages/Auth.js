import React from 'react';
import {Button, Card, Container, Form, NavLink, Row} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>Авторизація</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введіть ваш email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введіть ваш пароль...'
                    />
                </Form>
                <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                    <div>Не маєте акаунт? <NavLink path={REGISTRATION_ROUTE}>Зареєструйтесь!</NavLink></div>
                    <Button
                        variant={'outline-success'}
                    >
                        Увійти
                    </Button>
                </Row>
            </Card>
        </Container>
    );
};

export default Auth;