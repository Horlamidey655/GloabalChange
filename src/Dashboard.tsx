import { useUser } from "./UseUser";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard, {user}!</p>
    </div>
  );
};

export default Dashboard;
