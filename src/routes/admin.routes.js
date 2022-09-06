import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/adminDashboard";
import OrganizationRequestList from "../components/admin/organizationRequestList";

export default function Donator() {
    return (
      <>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/orglist" element={<OrganizationRequestList/>}/>
        </Routes>
      </>
    );
  }
