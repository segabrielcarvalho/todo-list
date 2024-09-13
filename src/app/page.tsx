"use client";
import TodoList from "../components/TodoList";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TodoList />
    </div>
  );
};

export default Home;
