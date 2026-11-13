import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../components/layout/MainLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Unauthorized from "../pages/Unauthorized";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import ProfilePage from "../features/auth/pages/ProfilePage";
import StudentsPage from "../features/users/pages/StudentsPage";
import TeachersPage from "../features/users/pages/TeachersPage";
import AdministratorsPage from "../features/users/pages/AdministratorsPage";
import StagesPage from "../features/stages/pages/StagesPage";
import StageDetailsPage from "../features/stages/pages/StageDetailsPage";
import CreateStagePage from "../features/stages/pages/CreateStagePage";
import MyApplicationsPage from "../features/applications/pages/MyApplicationsPage";
import ReceivedApplicationsPage from "../features/applications/pages/ReceivedApplicationsPage";
import AssignmentsPage from "../features/supervision/pages/AssignmentsPage";
import MyStudentsPage from "../features/supervision/pages/MyStudentsPage";
import MyInternshipPage from "../features/supervision/pages/MyInternshipPage";
import ReportsPage from "../features/reports/pages/ReportsPage";
import SupervisorReportsPage from "../features/reports/pages/SupervisorReportsPage";
import EvaluatePage from "../features/evaluations/pages/EvaluatePage";
import MyEvaluationPage from "../features/evaluations/pages/MyEvaluationPage";
import NotificationsPage from "../features/notifications/pages/NotificationsPage";

const ALL = ["etudiant", "entreprise", "encadrant", "admin"];

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/403" element={<Unauthorized />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<ProtectedRoute roles={ALL} />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />

          <Route element={<ProtectedRoute roles={["etudiant", "entreprise", "admin"]} />}>
            <Route path="/stages" element={<StagesPage />} />
            <Route path="/stages/:id" element={<StageDetailsPage />} />
          </Route>

          <Route element={<ProtectedRoute roles={["etudiant"]} />}>
            <Route path="/applications" element={<MyApplicationsPage />} />
            <Route path="/my-internship" element={<MyInternshipPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/evaluation" element={<MyEvaluationPage />} />
          </Route>

          <Route element={<ProtectedRoute roles={["entreprise"]} />}>
            <Route path="/stages/new" element={<CreateStagePage />} />
            <Route path="/stages/:id/edit" element={<CreateStagePage />} />
            <Route path="/applications/received" element={<ReceivedApplicationsPage />} />
          </Route>

          <Route element={<ProtectedRoute roles={["encadrant"]} />}>
            <Route path="/supervision/students" element={<MyStudentsPage />} />
            <Route path="/supervision/reports" element={<SupervisorReportsPage />} />
            <Route path="/evaluations/:etudiantId" element={<EvaluatePage />} />
          </Route>

          <Route element={<ProtectedRoute roles={["admin"]} />}>
            <Route path="/users/students" element={<StudentsPage />} />
            <Route path="/users/teachers" element={<TeachersPage />} />
            <Route path="/users/administrators" element={<AdministratorsPage />} />
            <Route path="/supervision/assign" element={<AssignmentsPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
