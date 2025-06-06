import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    setTodos,
    addTodo,
    deleteTodo,
    toggleComplete,
    setLoading,
    setError,
} from '../redux/todosSlice';
import type { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from "react-icons/md";


const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const LOCAL_STORAGE_KEY = 'todos_data';

const TodoList = () => {

    // Dispatch Hook from Redux
    const dispatch = useDispatch();
    const { items: todos, loading, error } = useSelector((state: RootState) => state.todos);
    const [newTask, setNewTask] = useState('');

    // Storing in local storage
    useEffect(() => {
        const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedTodos) {
            dispatch(setTodos(JSON.parse(savedTodos)));
        } else {
            fetchTodos();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    // GET data from the API
    const fetchTodos = async () => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        try {
            const response = await axios.get(API_URL);
            dispatch(setTodos(response.data));
        } catch (err: any) {
            dispatch(setError(err.message || 'Failed to fetch todos'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    // POST Method, ADD
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        const newId = Math.max(0, ...todos.map((t) => t.id || 0)) + 1;
        const newTodo = {
            id: newId,
            title: newTask,
            completed: false,
            userId: 1,
        };

        dispatch(setLoading(true));
        dispatch(setError(null));
        try {
            await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
            dispatch(addTodo(newTodo));
            setNewTask('');
        } catch (err: any) {
            dispatch(setError(err.message || 'Failed to add task'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    // Complete TODOS Strike through function
    const handleToggleComplete = (id: number) => {
        dispatch(toggleComplete(id));
    };

    // Delete Functionality
    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id));
    };



    return (
        <div className='text-center'>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">To-Do List</h2>

                    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add your task"
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer"
                        >
                            Add
                        </button>
                    </form>

                    {loading && <p className="text-center text-sm text-gray-500">Loading...</p>}
                    {error && <p className="text-center text-red-500 text-sm mb-2">{error}</p>}

                    <ul className="space-y-2">
                        {todos.map((todo, index) => (
                            <li key={todo.id}
                                className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                            >
                                <span
                                    onClick={() => handleToggleComplete(todo.id)}
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                                    className='text-left'
                                >
                                    {index + 1}. {todo.title}
                                </span>


                                <button
                                    onClick={() => handleDelete(todo.id)}
                                    className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                                >
                                    <div title='Delete' className='flex items-center'>
                                        <MdDeleteForever className='text-[24px] ' />
                                        {/* <span>Delete</span> */}
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList