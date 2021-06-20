import "./App.css";
import MainPage from "./pages/entry/MainPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AddTicketPage from "./pages/newticket/AddTicketPage";
import TicketListPage from "./pages/ticketlist/TicketListPage";
import TicketPage from "./pages/ticket/TicketPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRouteComp from "./components/privateroute/PrivateRouteComp";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <PrivateRouteComp path="/dashboard">
            <DashboardPage />
          </PrivateRouteComp>
          <PrivateRouteComp path="/add-ticket">
            <AddTicketPage />
          </PrivateRouteComp>
          <PrivateRouteComp path="/tickets">
            <TicketListPage />
          </PrivateRouteComp>
          <PrivateRouteComp path="/ticket/:tId">
            <TicketPage />
          </PrivateRouteComp>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
