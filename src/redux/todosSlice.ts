// src/features/todos/todosSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodosState {
    items: Todo[];
    loading: boolean;
    error: string | null;
}

const initialState: TodosState = {
    items: [],
    loading: false,
    error: null,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos(state, action: PayloadAction<Todo[]>) {
            state.items = action.payload;
        },
        addTodo(state, action: PayloadAction<Todo>) {
            state.items.unshift(action.payload);
        },
        updateTodo(state, action: PayloadAction<Todo>) {
            const index = state.items.findIndex((t) => t.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteTodo(state, action: PayloadAction<number>) {
            state.items = state.items.filter((t) => t.id !== action.payload);
        },
        toggleComplete(state, action: PayloadAction<number>) {
            const todo = state.items.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    },
});

export const {
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
    setLoading,
    setError,
} = todosSlice.actions;

export default todosSlice.reducer;
