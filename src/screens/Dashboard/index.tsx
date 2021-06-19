import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionsCard } from '../../components/TransactionsCard';
import {
     Container, 
     Header,
     UserWrapper,
     UserInfo,
     Photo,
     User,
     UserGreeting,
     UserName,
     Icon,
     HighlightCards,
     Transactions,
     Title
    } from './styles';


export function Dashboard() {
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/58925749?v=4'}}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Lucas</UserName>
                        </User>

                    </UserInfo>
                    <TouchableOpacity>
                        <Icon name="power"/>
                    </TouchableOpacity>
    
                </UserWrapper>

            </Header>

            <HighlightCards>
                <HighlightCard
                    type="up"
                    title= "Entrada"
                    amount="RS 17.400,00"
                    lastTransaction="ültima entrada dia 13 de abril"
                />
                <HighlightCard
                    type="down"
                    title= "Saídas"
                    amount="RS 1.259,00"
                    lastTransaction="ültima entrada dia 13 de abril"

                />
                <HighlightCard
                    type="total"
                    title= "Total"
                    amount="RS 16.141,00"
                    lastTransaction="ültima entrada dia 13 de abril"
                />
            </HighlightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>

                <TransactionsCard />
            </Transactions>
        </Container>
    )
}