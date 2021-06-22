import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionsCard, TransactionCardProps } from '../../components/TransactionsCard';
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
     Title,
     TransactionList
    } from './styles';


export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data: DataListProps[] = [
    {
        id: '1',
        type: 'positive',
        title:"Desenvolvimento de site",
        amount:"R$12.000,00",
        category:{
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date:"19/06/2021" 
    },
    {
        id: '2',
        type: 'negative',
        title:"Geléia hamburgueria",
        amount:"R$59,00",
        category:{
            name: 'ALimentação',
            icon: 'coffee'
        },
        date:"19/06/2021" 
    },
    {
        id: '3',
        type: 'negative',
        title:"Parcela Up-Tsi",
        amount:"R$1.200,00",
        category:{
            name: 'Automotivo',
            icon: 'shopping-bag'
        },
        date:"19/06/2021" 
    },
]

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
                <Title>Listagem</Title>

                <TransactionList
                 data={data}
                 keyExtractor={item => item.id}
                 renderItem={({ item }) => <TransactionsCard data={item} />}
                 />

            </Transactions>
        </Container>
    )
}