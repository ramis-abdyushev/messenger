import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: string;
  user: string;
  content: string;
}

const initialState: Message[] = [
  { id: '1', user: '1', content: 'Привет! Вот что я пишу' },
  { id: '2', user: '2', content: 'Привет! А вот мой ответ' },
];

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      state.push({ id: nanoid(), user: '1', content: action.payload });
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
