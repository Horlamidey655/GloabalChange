import { useUser } from "./UserList";

const Dashboard = () => {
  const { user } = useUser();
  return <h2>Welcome to your dashboard, {user}!</h2>;
};

export default Dashboard;
