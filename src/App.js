import "./App.css";
import MainPage from "./pages/entry/MainPage";
import DefaultLayout from "./layout/DefaultLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AddTicketPage from "./pages/newticket/AddTicketPage";
import TicketListPage from "./pages/ticketlist/TicketListPage";
import TicketPage from "./pages/ticket/TicketPage";

function App() {
  return (
    <div>
      <DefaultLayout>
        {/* <MainPage /> */}
        {/* <DashboardPage /> */}
        {/* <AddTicketPage /> */}
        {/* <TicketListPage /> */}
        <TicketPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
