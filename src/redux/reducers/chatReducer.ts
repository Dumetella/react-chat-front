import ChatActionTypes from "../actions/chatActions";
import ChatState from "../state/ChatState";

export const chatReducer = (state = new ChatState(), action: ChatActionTypes): ChatState => {
    switch (action.type) {

        default:
            return state;
    }
};

export default chatReducer









// const onLogin = async (loginData) => {
//     dispatch({
//       type: 'JOINED',
//       payload: loginData,
//     });
//     socket.emit('ROOM:JOIN', loginData);
//     const data = await fetch('/rooms/${loginData.roomId}', {
//       method: 'GET',
//     }).then(resp => {
//       if (!resp.ok) {
//         throw new Error(`Failed to get /rooms: ${resp.status}`);
//       }
//       return resp.json();
//     });
//     dispatch({
//       type: 'SET_DATA',
//       payload: data,
//     });
//   };

//   const setUsers = (users) => {
//     dispatch({
//       type: 'SET_USERS',
//       payload: users,
//     });
//   };

//   const addMessage = (message) => {
//     dispatch({
//       type: 'NEW_MESSAGE',
//       payload: message,
//     });
//   };

//   React.useEffect(() => {
//     socket.on('ROOM:SET_USERS', setUsers);
//     socket.on('ROOM:NEW_MESSAGE', addMessage);
//   }, []);

//   window.socket = socket;

