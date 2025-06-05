import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
    setLoading,
    setError,
} from '../redux/todosSlice';
import type { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';


const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = () => {

    const dispatch = useDispatch();
    const { items: todos, loading, error } = useSelector((state: RootState) => state.todos);
    const [newTask, setNewTask] = useState('');
    const [editTodo, setEditTodo] = useState<number | null>(null);

    useEffect(() => {
        if (todos.length === 0) {
            fetchTodos();
        } else {
            console.log("Loaded todos count:", todos.length); // Should be 200
        }
    }, []);

    // GET Method 
    const fetchTodos = async () => {
        dispatch(setLoading(true));
        dispatch(setError(null));
        try {
            // ?_limit=5
            const response = await axios.get(`${API_URL}`);
            dispatch(setTodos(response.data));
        } catch (err: any) {
            dispatch(setError(err.message || 'Failed to fetch todos'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    // CREATE & UPDATE Method 
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            if (editTodo !== null) {
                const updatedTodo = { id: editTodo, title: newTask, completed: false };
                await axios.put(`${API_URL}/${editTodo}`, updatedTodo);
                dispatch(updateTodo(updatedTodo));
                setEditTodo(null);
            } else {
                const newId = Math.max(0, ...todos.map((t) => t.id)) + 1;
                const newTodo = { id: newId, title: newTask, completed: false };
                await axios.post(API_URL, newTodo);
                dispatch(addTodo(newTodo));
            }
            setNewTask('');
        } catch (err: any) {
            dispatch(setError(err.message || 'Failed to submit task'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    // MARK TODO
    const handleToggleComplete = async (id: number) => {
        const todo = todos.find((t: { id: number; }) => t.id === id);
        if (!todo) return;

        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            const updatedTodo = { ...todo, completed: !todo.completed };
            await axios.put(`${API_URL}/${id}`, updatedTodo);
            dispatch(toggleComplete(id));
        } catch (err: any) {
            dispatch(setError(err.message || 'Failed to update todo'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    // DELETE Method
    const handleDelete = async (id: number) => {
        dispatch(setLoading(true));
        dispatch(setError(null));

        try {
            await axios.delete(`${API_URL}/${id}`);
            dispatch(deleteTodo(id));
        } catch (err: any) {
            dispatch(setError(err.message || 'Failed to delete todo'));
        } finally {
            dispatch(setLoading(false));
        }
    };

    // Edit Functionality
    const startEdit = (id: number, title: string) => {
        setNewTask(title);
        setEditTodo(id);
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
                            className={`${editTodo ? "bg-yellow-600 hover:bg-yellow-700" : "bg-blue-600 hover:bg-blue-700"
                                } text-white px-4 py-2 rounded-lg cursor-pointer`}
                        >{editTodo !== null ? 'Update' : 'Add'}</button>
                    </form>


                    {loading && <p className="text-center text-sm text-gray-500">Loading...</p>}
                    {error && <p className="text-center text-red-500 text-sm mb-2">{error}</p>}

                    {/* Example of a task list */}
                    <ul className="space-y-2">
                        {/* <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
                            <span className="text-gray-700">Sample Task</span>
                            <button className="text-red-500 hover:text-red-700 transition">Delete</button>
                        </li> */}

                        {/* Add more tasks dynamically here */}
                        {todos.map((todo, index) => (
                            <li key={todo.id}
                                className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                            >
                                <span
                                    onClick={() => handleToggleComplete(todo.id)}
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                                    className='text-left'
                                >
                                    {index + 1}.  {todo.title}
                                </span>
                                <div className="flex gap-2 ml-2">
                                    <button
                                        onClick={() => startEdit(todo.id, todo.title)}
                                        className="text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(todo.id)}
                                        className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default TodoList