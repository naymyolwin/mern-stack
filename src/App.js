import "./App.css";
import MainPage from "./pages/entry/MainPage";
import DefaultLayout from "./layout/DefaultLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AddTicketPage from "./pages/newticket/AddTicketPage";

function App() {
  return (
    <div>
      <DefaultLayout>
        {/* <MainPage /> */}
        {/* <DashboardPage /> */}
        <AddTicketPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
