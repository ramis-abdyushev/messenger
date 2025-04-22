import { RootState } from 'app/store/store';

export const selectMessages = (state: RootState) => state.messages;
