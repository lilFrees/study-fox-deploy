import Content from "./containers/Content";
import Sidebar from "./containers/Sidebar";

function Dashboard() {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Dashboard;
