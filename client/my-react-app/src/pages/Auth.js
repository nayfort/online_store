import React from 'react';
import {Card, Container, Form} from "react-bootstrap";

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
            </Card>
        </Container>
    );
};

export default Auth;