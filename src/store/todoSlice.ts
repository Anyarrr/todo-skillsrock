import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    text: string;
};

interface TodoState {
    todos: Todo[];
};

const initialState: TodoState = {
    todos: [],
};


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state = initialState, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state = initialState, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        removeAll: (state = initialState) => {
            state.todos = [];
        },
    },
});

export const {addTodo, removeTodo, removeAll} = todoSlice.actions;
export default todoSlice.reducer;
