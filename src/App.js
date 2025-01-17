import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSideBar from "./component/Admin/AdminSideBar";
import Dashboard from "./component/Admin/DashBoard";
import Customer from "./component/Admin/Customer";
import Farmer from "./component/Admin/Farmer";
import CollectionCenter from "./component/Admin/CollectionCenter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminSideBar />}>
          <Route index element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="farmer" element={<Farmer />} />
          <Route path="collection-center" element={<CollectionCenter />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
