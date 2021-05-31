import React from 'react';

import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
 } from './styles';

export function TransactionsCard() {
    return(
        <Container>
            <Title>Desenvolvimento de site</Title>
            <Amount>R$ 12.000,00</Amount>

            <Footer>
                <Category>
                    <Icon name="dollar-sign"/>
                    <CategoryName />
                </Category>

                <Date>31/05/2021</Date>
            </Footer>
        </Container>
    )
}