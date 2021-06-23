import React from 'react';
import { TouchableOpacityProps } from 'react-native'

import {
    Container,
    Icon,
    Title
} from './style';

const icons = {
    up: 'arrow-up',
    down: 'arrow-down',
}

interface Props extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down';
}

export function TransactionTypeButton({
    type,
    title,
    ...rest
}: Props) {
    return(
        <Container {...rest}>
            <Icon
             name={icons[type]}
             type={type}
            />
            <Title>{title}</Title>

        </Container>
    )
}