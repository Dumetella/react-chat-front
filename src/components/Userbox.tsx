import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components';
import { useAppSelector } from '../redux/hooks';
import { Divider, SimpleText } from '../style/ChatStyles'

export default function UsersBox(): JSX.Element {

    const users = useAppSelector(state => state.app.users);
    const roomId = useAppSelector(state => state.app.roomId);

    return (
        <UUsersBox>
            <UInnerContainer>
                <URoomCaption>Room: {roomId}</URoomCaption>
            </UInnerContainer>
            <UUsersCaption>Currently online ({users.length}):</UUsersCaption>
            <UUsersStack>
                {users.map((user, index) => (
                    <UUserCaption key={index}>{user.name}</UUserCaption>
                ))}
            </UUsersStack>
        </UUsersBox>
    )
}

const UUsersBox = styled.div<DefaultStyledComponent>`
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${(props) => props.theme.palette.divider};
    width: calc(1680px / 6);
    flex: 1 0;
    background-color: ${(props) => props.theme.palette.primary.light};
    color: ${(props) => props.theme.palette.primary.contrastText};
    min-height: 100vh;
`
const UInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
    align-items: center;
    min-height: 3.5rem;
    flex: 0 0 auto;
    user-select: none;
    z-index: 1;
    width: 100%;
    background-color: ${(props) => props.theme.palette.primary.light};
    border-bottom: 1px solid;
    border-color: ${(props) => props.theme.palette.divider};
`

const UUsersStack = styled.div<DefaultStyledComponent>`

`

const URoomCaption = styled.div<DefaultStyledComponent>`
    font-size: 24px;
    padding-left: 0.5rem;
`

const UUsersCaption = styled.div<DefaultStyledComponent>`
    font-size: 24px;
    padding-left: 0.5rem;
`

const UUserCaption = styled.div<DefaultStyledComponent>`
    font-size: 18px;
    padding-left: 0.5rem;
`