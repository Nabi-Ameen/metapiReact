import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MicrosoftHome from "./pages/homePage/MicrosoftHome";
import MicrosoftOfices from "./pages/office/MicrosoftOfices";
import MicrosoftCopilot from "./pages/copilot/MicrosoftCopilot";
import MicrosoftWindows from "./pages/windows/MicrosoftWindows";
import MicrosoftSupport from "./pages/support/MicrosoftSupport";
import Layout from "./components/layout/Layout";
import Registration from "./pages/registration/Registration";
import FetchData from "./pages/fetchData/FetchData";
import DetailProduct from "./pages/details/DetailProduct";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MicrosoftHome />} />
        <Route path="/office" element={<MicrosoftOfices />} />
        <Route path="/copilot" element={<MicrosoftCopilot />} />
        <Route path="/windows" element={<MicrosoftWindows />} />
        <Route path="/support" element={<MicrosoftSupport />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/fetchData" element={<FetchData />} />
        <Route path="/details/:id" element={<DetailProduct />} />
      </Route>
    )
  );

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
