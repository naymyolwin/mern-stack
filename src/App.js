import "./App.css";
import MainPage from "./pages/entry/MainPage";
import DefaultLayout from "./layout/DefaultLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <div>
      <DefaultLayout>
        {/* <MainPage /> */}
        <DashboardPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
