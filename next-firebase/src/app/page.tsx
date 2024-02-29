"use client";
import { collection, addDoc, query, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

export default function Home() {
  const [todos, setTodos] = useState<any[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    const q = query(collection(db, "todos"));

    onSnapshot(q, (querySnapshot) => {
      let items: any = [];

      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setTodos(items);
    });
  }, []);

  const addTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      await addDoc(collection(db, "todos"), {
        todo: newTodo,
      });
      setNewTodo("");
    }
  };

  const removeTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Todo App</h1>
        <div className="mb-6 flex justify-center">
          <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="p-2 border border-gray-300 rounded mr-2" />
          <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded w-24">
            Add Todo
          </button>
        </div>
        <ul>
          {todos.map((item, index) => (
            <li key={index} className="mb-2">
              <div className="mb-4 flex justify-center items-center ">
                <span className="w-full border-2 rounded-md px-2 border-emerald-400 bg-emerald-400 text-white py-1.5">{item.todo}</span>
                <button onClick={() => removeTodo(item.id)} className="ml-2 bg-red-500 text-white p-2 rounded">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
