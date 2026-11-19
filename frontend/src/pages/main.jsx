
import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Award,
  LogOut,
  Search,
  Bell,
  CheckCircle,
  Clock,
  Calendar,
  Eye,
  Edit,
  Globe,
  Moon,
  Sun,
  Upload,
  ArrowRight,
  Menu,
  X,
  FileText,
  GraduationCap,
  ClipboardList,
  Settings,
  ChevronDown,
} from "lucide-react";

const translations = {
  ar: {
    appName: "فضاء المشرف",
    dashboard: "لوحة التحكم",
    students: "الطلبة",
    internships: "التربصات",
    evaluation: "التقييم",
    settings: "الإعدادات",
    logout: "تسجيل الخروج",
    welcome: "مرحباً بك",
    welcomeText: "إليك نظرة عامة على فضاء الإشراف الخاص بك",
    totalStudents: "إجمالي الطلبة",
    activeInternships: "التربصات النشطة",
    pendingEvaluations: "التقييمات المعلقة",
    completedEvaluations: "التقييمات المكتملة",
    quickActions: "الوصول السريع",
    manageStudents: "إدارة الطلبة",
    manageInternships: "إدارة التربصات",
    evaluateStudents: "تقييم الطلبة",
    recentActivity: "النشاط الأخير",
    noActivity: "لا توجد أنشطة حالياً",
    studentsTitle: "قائمة الطلبة",
    studentsDescription: "إدارة ومتابعة الطلبة المسجلين",
    searchStudent: "ابحث عن طالب...",
    studentName: "اسم الطالب",
    email: "البريد الإلكتروني",
    specialty: "التخصص",
    status: "الحالة",
    actions: "الإجراءات",
    noStudents: "لا توجد بيانات للطلبة",
    noStudentsDescription: "ستظهر قائمة الطلبة هنا بعد ربط قاعدة البيانات.",
    internshipsTitle: "إدارة التربصات",
    internshipsDescription: "متابعة التربصات والملفات المرتبطة بها",
    noInternships: "لا توجد تربصات حالياً",
    noInternshipsDescription: "ستظهر التربصات هنا بعد ربط قاعدة البيانات.",
    evaluationTitle: "تقييم الطلبة",
    evaluationDescription: "إضافة تقييم أكاديمي للطلبة",
    selectStudent: "اختر الطالب",
    chooseStudent: "اختر طالباً...",
    grade: "العلامة",
    comment: "الملاحظات",
    commentPlaceholder: "اكتب ملاحظاتك حول أداء الطالب...",
    saveEvaluation: "حفظ التقييم",
    backendMessage: "واجهة التقييم جاهزة. يجب ربطها بالـ Backend لحفظ البيانات.",
    search: "بحث",
    all: "الكل",
    active: "نشط",
    completed: "مكتمل",
    pending: "قيد الانتظار",
    supervisor: "مشرف",
    profile: "الملف الشخصي",
    notifications: "الإشعارات",
    language: "اللغة",
    today: "اليوم",
    footer: "جميع الحقوق محفوظة",
    dashboardSubtitle: "تابع نشاطك الأكاديمي من مكان واحد",
    noData: "لا توجد بيانات متاحة",
    gradePlaceholder: "أدخل العلامة من 0 إلى 20",
    evaluationNote: "سيتم ربط هذا النموذج بواجهة API لاحقاً.",
  },

  fr: {
    appName: "Espace Encadrant",
    dashboard: "Tableau de bord",
    students: "Étudiants",
    internships: "Stages",
    evaluation: "Évaluation",
    settings: "Paramètres",
    logout: "Déconnexion",
    welcome: "Bienvenue",
    welcomeText: "Voici un aperçu de votre espace d'encadrement",
    totalStudents: "Total des étudiants",
    activeInternships: "Stages actifs",
    pendingEvaluations: "Évaluations en attente",
    completedEvaluations: "Évaluations terminées",
    quickActions: "Accès rapide",
    manageStudents: "Gérer les étudiants",
    manageInternships: "Gérer les stages",
    evaluateStudents: "Évaluer les étudiants",
    recentActivity: "Activité récente",
    noActivity: "Aucune activité pour le moment",
    studentsTitle: "Liste des étudiants",
    studentsDescription: "Gérer et suivre les étudiants inscrits",
    searchStudent: "Rechercher un étudiant...",
    studentName: "Nom de l'étudiant",
    email: "Adresse e-mail",
    specialty: "Spécialité",
    status: "Statut",
    actions: "Actions",
    noStudents: "Aucune donnée étudiant",
    noStudentsDescription: "La liste des étudiants apparaîtra après la connexion à la base de données.",
    internshipsTitle: "Gestion des stages",
    internshipsDescription: "Suivi des stages et des dossiers associés",
    noInternships: "Aucun stage disponible",
    noInternshipsDescription: "Les stages apparaîtront après la connexion à la base de données.",
    evaluationTitle: "Évaluation des étudiants",
    evaluationDescription: "Ajouter une évaluation académique",
    selectStudent: "Sélectionner un étudiant",
    chooseStudent: "Choisir un étudiant...",
    grade: "Note",
    comment: "Commentaires",
    commentPlaceholder: "Écrivez vos remarques sur le travail de l'étudiant...",
    saveEvaluation: "Enregistrer l'évaluation",
    backendMessage: "L'interface est prête. Connectez le Backend pour enregistrer les données.",
    search: "Rechercher",
    all: "Tous",
    active: "Actif",
    completed: "Terminé",
    pending: "En attente",
    supervisor: "Encadrant",
    profile: "Profil",
    notifications: "Notifications",
    language: "Langue",
    today: "Aujourd'hui",
    footer: "Tous droits réservés",
    dashboardSubtitle: "Suivez votre activité académique depuis un seul endroit",
    noData: "Aucune donnée disponible",
    gradePlaceholder: "Saisir une note entre 0 et 20",
    evaluationNote: "Ce formulaire sera connecté à une API ultérieurement.",
  },

  en: {
    appName: "Supervisor Space",
    dashboard: "Dashboard",
    students: "Students",
    internships: "Internships",
    evaluation: "Evaluation",
    settings: "Settings",
    logout: "Logout",
    welcome: "Welcome",
    welcomeText: "Here is an overview of your supervision space",
    totalStudents: "Total Students",
    activeInternships: "Active Internships",
    pendingEvaluations: "Pending Evaluations",
    completedEvaluations: "Completed Evaluations",
    quickActions: "Quick Access",
    manageStudents: "Manage Students",
    manageInternships: "Manage Internships",
    evaluateStudents: "Evaluate Students",
    recentActivity: "Recent Activity",
    noActivity: "No recent activity",
    studentsTitle: "Students List",
    studentsDescription: "Manage and monitor registered students",
    searchStudent: "Search for a student...",
    studentName: "Student Name",
    email: "Email Address",
    specialty: "Specialty",
    status: "Status",
    actions: "Actions",
    noStudents: "No student data",
    noStudentsDescription: "Students will appear here after connecting the database.",
    internshipsTitle: "Internship Management",
    internshipsDescription: "Monitor internships and related files",
    noInternships: "No internships available",
    noInternshipsDescription: "Internships will appear here after connecting the database.",
    evaluationTitle: "Student Evaluation",
    evaluationDescription: "Add an academic evaluation",
    selectStudent: "Select Student",
    chooseStudent: "Choose a student...",
    grade: "Grade",
    comment: "Comments",
    commentPlaceholder: "Write your comments about the student's performance...",
    saveEvaluation: "Save Evaluation",
    backendMessage: "The evaluation interface is ready. Connect the Backend to save data.",
    search: "Search",
    all: "All",
    active: "Active",
    completed: "Completed",
    pending: "Pending",
    supervisor: "Supervisor",
    profile: "Profile",
    notifications: "Notifications",
    language: "Language",
    today: "Today",
    footer: "All rights reserved",
    dashboardSubtitle: "Monitor your academic activity in one place",
    noData: "No data available",
    gradePlaceholder: "Enter a grade from 0 to 20",
    evaluationNote: "This form will be connected to an API later.",
  },
};

const EMPTY_STUDENTS = [];
const EMPTY_INTERNSHIPS = [];

export default function App() {
  const [language, setLanguage] = useState("ar");
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [grade, setGrade] = useState("");
  const [comment, setComment] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  const t = translations[language];
  const isRTL = language === "ar";

  const students = EMPTY_STUDENTS;
  const internships = EMPTY_INTERNSHIPS;

  const navigation = [
    {
      id: "dashboard",
      label: t.dashboard,
      icon: LayoutDashboard,
    },
    {
      id: "students",
      label: t.students,
      icon: Users,
    },
    {
      id: "internships",
      label: t.internships,
      icon: Briefcase,
    },
    {
      id: "evaluation",
      label: t.evaluation,
      icon: Award,
    },
  ];

  const stats = [
    {
      title: t.totalStudents,
      value: "—",
      icon: Users,
      color: "blue",
    },
    {
      title: t.activeInternships,
      value: "—",
      icon: Briefcase,
      color: "purple",
    },
    {
      title: t.pendingEvaluations,
      value: "—",
      icon: Clock,
      color: "orange",
    },
    {
      title: t.completedEvaluations,
      value: "—",
      icon: CheckCircle,
      color: "green",
    },
  ];

  const filteredStudents = students.filter((student) =>
    (student.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const changeTab = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false);
  };

  const handleEvaluation = (event) => {
    event.preventDefault();

    if (!selectedStudent || !grade) {
      alert(
        language === "ar"
          ? "يرجى اختيار الطالب وإدخال العلامة."
          : language === "fr"
          ? "Veuillez sélectionner un étudiant et saisir une note."
          : "Please select a student and enter a grade."
      );
      return;
    }

    // TODO: Connect this form to your backend.
    // Example:
    // fetch(`${import.meta.env.VITE_API_URL}/evaluations`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     studentId: selectedStudent,
    //     grade: Number(grade),
    //     comment
    //   })
    // });

    alert(t.backendMessage);

    setGrade("");
    setComment("");
    setSelectedStudent("");
  };

  return (
    <div
      className={`app ${darkMode ? "dark" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: ${isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
        }

        button, input, textarea, select {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .app {
          min-height: 100vh;
          display: flex;
          background: #f5f7fb;
          color: #1e293b;
          transition: .25s;
        }

        .app.dark {
          background: #0f172a;
          color: #e2e8f0;
        }

        .sidebar {
          width: 265px;
          min-width: 265px;
          background: #fff;
          border-inline-end: 1px solid #e8edf4;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: fixed;
          top: 0;
          bottom: 0;
          z-index: 20;
          transition: .25s;
        }

        [dir="rtl"] .sidebar {
          right: 0;
        }

        [dir="ltr"] .sidebar {
          left: 0;
        }

        .dark .sidebar {
          background: #172033;
          border-color: #263349;
        }

        .brand {
          height: 85px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          border-bottom: 1px solid #edf0f5;
        }

        .dark .brand {
          border-color: #263349;
        }

        .brand-logo {
          width: 43px;
          height: 43px;
          border-radius: 13px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .brand h2 {
          font-size: 16px;
          font-weight: 800;
        }

        .brand p {
          color: #94a3b8;
          font-size: 11px;
          margin-top: 3px;
        }

        .nav-section {
          padding: 25px 15px;
          flex: 1;
        }

        .nav-label {
          color: #94a3b8;
          font-size: 11px;
          font-weight: 700;
          padding: 0 12px;
          margin-bottom: 13px;
        }

        .nav-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 13px;
          border: none;
          background: transparent;
          color: #64748b;
          padding: 13px 14px;
          border-radius: 10px;
          margin-bottom: 6px;
          font-size: 13px;
          font-weight: 600;
          text-align: start;
          transition: .2s;
        }

        .nav-item:hover {
          background: #f1f5ff;
          color: #2563eb;
        }

        .nav-item.active {
          background: #eff4ff;
          color: #2563eb;
          font-weight: 700;
        }

        .dark .nav-item {
          color: #a8b5c9;
        }

        .dark .nav-item:hover,
        .dark .nav-item.active {
          background: #263957;
          color: #8db4ff;
        }

        .sidebar-bottom {
          padding: 18px;
          border-top: 1px solid #edf0f5;
        }

        .dark .sidebar-bottom {
          border-color: #263349;
        }

        .user-mini {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #dbeafe;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .user-mini strong {
          font-size: 12px;
          display: block;
        }

        .user-mini small {
          color: #94a3b8;
          font-size: 11px;
        }

        .main {
          flex: 1;
          min-width: 0;
          margin-inline-start: 265px;
        }

        .topbar {
          height: 85px;
          background: #fff;
          border-bottom: 1px solid #e8edf4;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .dark .topbar {
          background: #172033;
          border-color: #263349;
        }

        .topbar-left, .topbar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .page-heading h1 {
          font-size: 18px;
          font-weight: 800;
        }

        .page-heading p {
          color: #94a3b8;
          font-size: 11px;
          margin-top: 4px;
        }

        .icon-button {
          width: 40px;
          height: 40px;
          border: 1px solid #e8edf4;
          border-radius: 10px;
          background: #fff;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dark .icon-button {
          background: #1e293b;
          border-color: #334155;
          color: #cbd5e1;
        }

        .icon-button:hover {
          color: #2563eb;
          border-color: #bfdbfe;
        }

        .language-select {
          height: 40px;
          border: 1px solid #e8edf4;
          border-radius: 10px;
          padding: 0 10px;
          color: #64748b;
          background: #fff;
          outline: none;
          font-size: 12px;
        }

        .dark .language-select {
          background: #1e293b;
          border-color: #334155;
          color: #e2e8f0;
        }

        .content {
          padding: 30px 32px;
          max-width: 1500px;
          margin: auto;
        }

        .welcome-card {
          padding: 27px 30px;
          border-radius: 16px;
          background: linear-gradient(115deg, #1d4ed8, #4f46e5);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
          position: relative;
          margin-bottom: 27px;
        }

        .welcome-card h2 {
          font-size: 23px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .welcome-card p {
          font-size: 13px;
          opacity: .85;
        }

        .welcome-icon {
          opacity: .18;
          margin-inline-end: 25px;
        }

        .section-title {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 17px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: #fff;
          border: 1px solid #edf0f5;
          border-radius: 14px;
          padding: 20px;
          min-width: 0;
        }

        .dark .stat-card,
        .dark .panel,
        .dark .empty-card,
        .dark .form-card {
          background: #172033;
          border-color: #263349;
        }

        .stat-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          gap: 8px;
        }

        .stat-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon.blue {
          background: #eff6ff;
          color: #2563eb;
        }

        .stat-icon.purple {
          background: #f3e8ff;
          color: #9333ea;
        }

        .stat-icon.orange {
          background: #fff7ed;
          color: #ea580c;
        }

        .stat-icon.green {
          background: #ecfdf5;
          color: #059669;
        }

        .stat-card h3 {
          font-size: 25px;
          font-weight: 800;
          margin-bottom: 5px;
        }

        .stat-card p {
          color: #94a3b8;
          font-size: 12px;
          font-weight: 600;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 20px;
        }

        .panel {
          background: #fff;
          border: 1px solid #edf0f5;
          border-radius: 14px;
          padding: 22px;
          min-width: 0;
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .panel-header h3 {
          font-size: 14px;
          font-weight: 800;
        }

        .quick-action {
          display: flex;
          align-items: center;
          gap: 13px;
          width: 100%;
          padding: 14px;
          background: transparent;
          border: 1px solid #edf0f5;
          border-radius: 11px;
          text-align: start;
          margin-bottom: 10px;
          color: inherit;
          transition: .2s;
        }

        .dark .quick-action {
          border-color: #334155;
        }

        .quick-action:hover {
          border-color: #bfdbfe;
          background: #f8faff;
          transform: translateY(-1px);
        }

        .dark .quick-action:hover {
          background: #1e293b;
        }

        .quick-action-icon {
          width: 39px;
          height: 39px;
          background: #eff6ff;
          color: #2563eb;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quick-action strong {
          display: block;
          font-size: 12px;
        }

        .quick-action small {
          display: block;
          color: #94a3b8;
          font-size: 10px;
          margin-top: 4px;
        }

        .empty-state {
          text-align: center;
          padding: 35px 15px;
          color: #94a3b8;
        }

        .empty-state-icon {
          width: 55px;
          height: 55px;
          border-radius: 15px;
          background: #f1f5f9;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 13px;
        }

        .dark .empty-state-icon {
          background: #263349;
        }

        .empty-state h3 {
          color: #64748b;
          font-size: 13px;
          margin-bottom: 7px;
        }

        .dark .empty-state h3 {
          color: #cbd5e1;
        }

        .empty-state p {
          font-size: 11px;
          line-height: 1.8;
        }

        .page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .page-header h2 {
          font-size: 21px;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .page-header p {
          color: #94a3b8;
          font-size: 12px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 9px;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 0 13px;
          width: 270px;
          height: 43px;
          color: #94a3b8;
        }

        .dark .search-box {
          background: #172033;
          border-color: #334155;
        }

        .search-box input {
          border: none;
          outline: none;
          background: transparent;
          color: inherit;
          width: 100%;
          font-size: 12px;
        }

        .table-container {
          overflow-x: auto;
          background: #fff;
          border: 1px solid #edf0f5;
          border-radius: 14px;
        }

        .dark .table-container {
          background: #172033;
          border-color: #263349;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 650px;
        }

        th {
          background: #f8fafc;
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          padding: 16px;
          text-align: start;
        }

        .dark th {
          background: #1e293b;
          color: #a8b5c9;
        }

        td {
          padding: 15px 16px;
          border-top: 1px solid #edf0f5;
          font-size: 12px;
        }

        .dark td {
          border-color: #263349;
        }

        .form-card {
          max-width: 750px;
          background: #fff;
          border: 1px solid #edf0f5;
          border-radius: 15px;
          padding: 25px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 9px;
        }

        .form-control {
          width: 100%;
          border: 1px solid #e2e8f0;
          background: #fff;
          color: #1e293b;
          padding: 13px 14px;
          border-radius: 9px;
          outline: none;
          font-size: 12px;
        }

        .dark .form-control {
          background: #1e293b;
          border-color: #334155;
          color: #e2e8f0;
        }

        .form-control:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px #dbeafe;
        }

        textarea.form-control {
          min-height: 120px;
          resize: vertical;
        }

        .primary-button {
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 9px;
          padding: 13px 20px;
          font-size: 12px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          transition: .2s;
        }

        .primary-button:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .notice {
          background: #eff6ff;
          border: 1px solid #dbeafe;
          color: #1d4ed8;
          padding: 13px;
          border-radius: 9px;
          font-size: 11px;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .dark .notice {
          background: #1e3a5f;
          border-color: #294b76;
          color: #bfdbfe;
        }

        .footer {
          text-align: center;
          padding: 25px;
          color: #94a3b8;
          font-size: 10px;
        }

        .mobile-menu {
          display: none;
        }

        .overlay {
          display: none;
        }

        @media(max-width: 1100px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width: 768px) {
          .sidebar {
            transform: translateX(110%);
          }

          [dir="ltr"] .sidebar {
            transform: translateX(-110%);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .main {
            margin-inline-start: 0;
          }

          .topbar {
            padding: 0 15px;
            height: 72px;
          }

          .content {
            padding: 20px 15px;
          }

          .mobile-menu {
            display: flex;
          }

          .overlay.show {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, .45);
            z-index: 15;
          }

          .welcome-card {
            padding: 23px 20px;
          }

          .welcome-card h2 {
            font-size: 19px;
          }

          .welcome-icon {
            display: none;
          }

          .stats-grid {
            gap: 10px;
          }

          .stat-card {
            padding: 15px;
          }

          .stat-card h3 {
            font-size: 21px;
          }

          .topbar-right {
            gap: 7px;
          }

          .language-select {
            max-width: 90px;
          }

          .page-heading p {
            display: none;
          }

          .search-box {
            width: 100%;
          }
        }

        @media(max-width: 420px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }

          .stat-card p {
            font-size: 10px;
          }

          .brand h2 {
            font-size: 14px;
          }

          .form-card {
            padding: 17px;
          }
        }
      `}</style>

      <div
        className={`overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-logo">
            <GraduationCap size={25} />
          </div>
          <div>
            <h2>{t.appName}</h2>
            <p>University Platform</p>
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-label">
            {t.dashboard}
          </div>

          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                className={`nav-item ${
                  activeTab === item.id ? "active" : ""
                }`}
                onClick={() => changeTab(item.id)}
              >
                <Icon size={19} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="sidebar-bottom">
          <div className="user-mini">
            <div className="avatar">
              <GraduationCap size={20} />
            </div>
            <div>
              <strong>{t.supervisor}</strong>
              <small>{t.profile}</small>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="icon-button mobile-menu"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={19} />
            </button>

            <div className="page-heading">
              <h1>
                {navigation.find((item) => item.id === activeTab)?.label}
              </h1>
              <p>{t.dashboardSubtitle}</p>
            </div>
          </div>

          <div className="topbar-right">
            <select
              className="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label={t.language}
            >
              <option value="ar">العربية</option>
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>

            <button
              className="icon-button"
              onClick={() => setDarkMode(!darkMode)}
              title="Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="icon-button" title={t.notifications}>
              <Bell size={18} />
            </button>
          </div>
        </header>

        <div className="content">

          {activeTab === "dashboard" && (
            <>
              <section className="welcome-card">
                <div>
                  <h2>{t.welcome} 👋</h2>
                  <p>{t.welcomeText}</p>
                </div>
                <div className="welcome-icon">
                  <GraduationCap size={90} />
                </div>
              </section>

              <h3 className="section-title">
                {t.dashboard}
              </h3>

              <section className="stats-grid">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <div className="stat-card" key={index}>
                      <div className="stat-top">
                        <div className={`stat-icon ${stat.color}`}>
                          <Icon size={21} />
                        </div>
                      </div>

                      <h3>{stat.value}</h3>
                      <p>{stat.title}</p>
                    </div>
                  );
                })}
              </section>

              <section className="dashboard-grid">
                <div className="panel">
                  <div className="panel-header">
                    <h3>{t.quickActions}</h3>
                  </div>

                  <button
                    className="quick-action"
                    onClick={() => changeTab("students")}
                  >
                    <div className="quick-action-icon">
                      <Users size={20} />
                    </div>
                    <div>
                      <strong>{t.manageStudents}</strong>
                      <small>{t.studentsDescription}</small>
                    </div>
                    <ArrowRight size={17} />
                  </button>

                  <button
                    className="quick-action"
                    onClick={() => changeTab("internships")}
                  >
                    <div className="quick-action-icon">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <strong>{t.manageInternships}</strong>
                      <small>{t.internshipsDescription}</small>
                    </div>
                    <ArrowRight size={17} />
                  </button>

                  <button
                    className="quick-action"
                    onClick={() => changeTab("evaluation")}
                  >
                    <div className="quick-action-icon">
                      <Award size={20} />
                    </div>
                    <div>
                      <strong>{t.evaluateStudents}</strong>
                      <small>{t.evaluationDescription}</small>
                    </div>
                    <ArrowRight size={17} />
                  </button>
                </div>

                <div className="panel">
                  <div className="panel-header">
                    <h3>{t.recentActivity}</h3>
                    <Clock size={18} color="#94a3b8" />
                  </div>

                  <div className="empty-state">
                    <div className="empty-state-icon">
                      <ClipboardList size={25} />
                    </div>
                    <h3>{t.noActivity}</h3>
                    <p>{t.noData}</p>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "students" && (
            <>
              <div className="page-header">
                <div>
                  <h2>{t.studentsTitle}</h2>
                  <p>{t.studentsDescription}</p>
                </div>

                <div className="search-box">
                  <Search size={17} />
                  <input
                    type="text"
                    placeholder={t.searchStudent}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="table-container">
                {filteredStudents.length > 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>{t.studentName}</th>
                        <th>{t.email}</th>
                        <th>{t.specialty}</th>
                        <th>{t.status}</th>
                        <th>{t.actions}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student) => (
                        <tr key={student.id}>
                          <td>{student.name}</td>
                          <td>{student.email}</td>
                          <td>{student.specialty}</td>
                          <td>{student.status}</td>
                          <td>
                            <button className="icon-button">
                              <Eye size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="empty-state">
                    <div className="empty-state-icon">
                      <Users size={25} />
                    </div>
                    <h3>{t.noStudents}</h3>
                    <p>{t.noStudentsDescription}</p>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === "internships" && (
            <>
              <div className="page-header">
                <div>
                  <h2>{t.internshipsTitle}</h2>
                  <p>{t.internshipsDescription}</p>
                </div>
              </div>

              <div className="table-container">
                {internships.length > 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>{t.studentName}</th>
                        <th>{t.specialty}</th>
                        <th>{t.status}</th>
                        <th>{t.actions}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {internships.map((internship) => (
                        <tr key={internship.id}>
                          <td>{internship.studentName}</td>
                          <td>{internship.specialty}</td>
                          <td>{internship.status}</td>
                          <td>
                            <button className="icon-button">
                              <Eye size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="empty-state">
                    <div className="empty-state-icon">
                      <Briefcase size={25} />
                    </div>
                    <h3>{t.noInternships}</h3>
                    <p>{t.noInternshipsDescription}</p>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === "evaluation" && (
            <>
              <div className="page-header">
                <div>
                  <h2>{t.evaluationTitle}</h2>
                  <p>{t.evaluationDescription}</p>
                </div>
              </div>

              <div className="form-card">
                <div className="notice">
                  <FileText
                    size={16}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginInlineEnd: "7px",
                    }}
                  />
                  {t.evaluationNote}
                </div>

                <form onSubmit={handleEvaluation}>
                  <div className="form-group">
                    <label>{t.selectStudent}</label>
                    <select
                      className="form-control"
                      value={selectedStudent}
                      onChange={(e) =>
                        setSelectedStudent(e.target.value)
                      }
                    >
                      <option value="">{t.chooseStudent}</option>

                      {students.map((student) => (
                        <option
                          key={student.id}
                          value={student.id}
                        >
                          {student.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>{t.grade}</label>
                    <input
                      className="form-control"
                      type="number"
                      min="0"
                      max="20"
                      step="0.25"
                      placeholder={t.gradePlaceholder}
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.comment}</label>
                    <textarea
                      className="form-control"
                      placeholder={t.commentPlaceholder}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>

                  <button
                    className="primary-button"
                    type="submit"
                  >
                    <Upload size={17} />
                    {t.saveEvaluation}
                  </button>
                </form>
              </div>
            </>
          )}

        </div>

        <footer className="footer">
          © {new Date().getFullYear()} {t.appName} — {t.footer}
        </footer>
      </main>
    </div>
  );
}
