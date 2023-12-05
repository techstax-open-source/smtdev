import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Loader from './layout/layoutcomponent/loaders';


const App = React.lazy(() => import("./layout/App"));
const Dashboard = React.lazy(() =>
  import("./components/dashboard/dashboard1/dashboard")
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.Fragment>
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />} >
            <Route index element={<Dashboard />} />
            <Route path={`${import.meta.env.BASE_URL}dashboard/dashboard1`} element={<Dashboard />} />
          </Route>
          <Route></Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.Fragment>
);