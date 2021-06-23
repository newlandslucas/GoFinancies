import React from 'react';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsTypes
} from './style';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';



export function Register() {
    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

        <Form>
            <Fields>
                <Input
                        placeholder="Título"
                    />
                <Input
                    placeholder="Valor"
                />

                <TransactionsTypes>
                    <TransactionTypeButton
                        type="up"
                        title="Entrada"
                    />
                    <TransactionTypeButton
                        type="down"
                        title="Saída"
                    />
                </TransactionsTypes>

            </Fields>
        
            <Button
                title="Cadastrar"
            />
        </Form>
            
        </Container>
    )
}