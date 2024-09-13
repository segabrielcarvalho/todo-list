"use client";
import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface Todo {
  id: number;
  title: string;
  description: string;
  status: "a-fazer" | "fazendo" | "concluido";
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAddTodo = () => {
    if (!newTitle.trim() || !newDescription.trim()) return;

    const newTask: Todo = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      status: "a-fazer",
    };

    setTodos([...todos, newTask]);
    setNewTitle("");
    setNewDescription("");
  };

  const handleChangeStatus = (
    id: number,
    newStatus: "a-fazer" | "fazendo" | "concluido"
  ) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="min-h-screen flex flex-1 flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          To-Do List
        </h1>
        <div className="flex mb-6">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-lg p-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Título"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-lg p-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Descrição"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Add
          </button>
        </div>

        {isClient && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["a-fazer", "fazendo", "concluido"].map((status) => (
              <div
                key={status}
                className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-700 mb-4 capitalize">
                  {status.replace("-", " ")}
                </h2>
                <ul>
                  {todos
                    .filter((todo) => todo.status === status)
                    .map((todo) => (
                      <li
                        key={todo.id}
                        className="mb-3 p-4 border border-gray-300 rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg"
                      >
                        <h3 className="font-bold text-gray-800">
                          {todo.title}
                        </h3>
                        <p className="text-gray-600">{todo.description}</p>
                        <div className="flex mt-3 space-x-2">
                          {status !== "a-fazer" && (
                            <button
                              onClick={() =>
                                handleChangeStatus(
                                  todo.id,
                                  status === "fazendo" ? "a-fazer" : "fazendo"
                                )
                              }
                              className="text-yellow-500 hover:text-yellow-600 font-medium"
                            >
                              {status === "fazendo" ? "A Fazer" : "Fazendo"}
                            </button>
                          )}
                          {status !== "concluido" && (
                            <button
                              onClick={() =>
                                handleChangeStatus(
                                  todo.id,
                                  status === "a-fazer" ? "fazendo" : "concluido"
                                )
                              }
                              className="text-green-500 hover:text-green-600 font-medium"
                            >
                              {status === "a-fazer" ? "Fazendo" : "Concluído"}
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteTodo(todo.id)}
                            className="text-red-500 hover:text-red-600 font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
