import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components';
import { useAppSelector } from '../redux/hooks';
import { Divider, SimpleText } from '../style/ChatStyles'

export default function UserBox(): JSX.Element {

    const users = useAppSelector(state => state.app.users);
    const roomId = useAppSelector(state => state.app.roomId);

    return (
        <UsersBox>
            <SimpleText>Room:<b> {roomId}</b></SimpleText>
            <Divider />
            <SimpleText><b>Currently online ({users.length}):</b></SimpleText>
            <div>
                {users.map((user, index) => (
                    <SimpleText key={index}>{user.name}</SimpleText>
                ))}
            </div>
        </UsersBox>
    )
}

const UsersBox = styled.div<DefaultStyledComponent>`
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${(props) => props.theme.palette.divider};
    width: calc(1680px / 6);
    flex: 1 0;
    background-color: ${(props) => props.theme.palette.primary.light};
    color: ${(props) => props.theme.palette.primary.contrastText};
    min-height: 100vh;
`