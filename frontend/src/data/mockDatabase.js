export const MOCK_USERS = [
  {
    id: 1,
    role: 'student',
    fullName: 'Chaima Bourahla',
    matricule: '20263104892',
    email: 'amina@univ-chlef.dz',
    password: '123',
    major: 'Informatique - ISI',
    level: 'Master 1',
    phone: '0555 11 22 33',
    supervisorId: 2,
    active: true
  },
  {
    id: 2,
    role: 'teacher',
    fullName: 'Dr. Benali',
    email: 'benali@univ-chlef.dz',
    password: '123',
    department: 'Informatique',
    grade: 'MCA',
    active: true
  },
  {
    id: 4,
    role: 'admin',
    fullName: 'Admin UHBC',
    email: 'admin@univ-chlef.dz',
    password: '123',
    active: true
  }
];

export const MOCK_OFFERS = [
  {
    id: 101,
    createdBy: 4, // تم إدخال العرض بواسطة الـ Admin
    companyName: 'Djezzy Algérie',
    title: 'Développeur Front-End React.js',
    domain: 'Développement Web',
    duration: '4 mois',
    places: 3,
    status: 'OPEN'
  },
  {
    id: 102,
    createdBy: 4,
    companyName: 'Sonelgaz Chlef',
    title: 'Administrateur Bases de Données',
    domain: 'Réseaux & BDD',
    duration: '2 mois',
    places: 2,
    status: 'OPEN'
  }
];

export const MOCK_APPLICATIONS = [
  {
    id: 201,
    offerId: 101,
    offerTitle: 'Développeur Front-End React.js',
    companyName: 'Djezzy Algérie',
    studentId: 1,
    studentName: 'Chaima Bourahla',
    studentMajor: 'Informatique - ISI',
    cvFileName: 'CV_Amina_Belkacem.pdf',
    status: 'ACCEPTED',
    reportFileName: 'Rapport_Stage_Amina.pdf',
    evaluationNote: '17',
    supervisorRemark: 'Excellent travail et maîtrise technique.'
  }
];