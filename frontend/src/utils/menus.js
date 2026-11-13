const D = ["/dashboard", "Tableau de bord"];

// Menu latéral de chaque rôle
export const MENUS = {
  etudiant: [D, ["/stages", "Offres"], ["/applications", "Mes candidatures"], ["/my-internship", "Mon stage"], ["/reports", "Mon rapport"], ["/evaluation", "Mon évaluation"]],
  entreprise: [D, ["/stages", "Mes offres"], ["/stages/new", "Publier une offre"], ["/applications/received", "Candidatures reçues"]],
  encadrant: [D, ["/supervision/students", "Mes étudiants"], ["/supervision/reports", "Rapports déposés"]],
  admin: [D, ["/users/students", "Étudiants"], ["/users/teachers", "Encadrants"], ["/users/administrators", "Administrateurs"], ["/stages", "Offres"], ["/supervision/assign", "Affectations"]],
};
