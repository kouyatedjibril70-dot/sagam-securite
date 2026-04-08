// ═══════════════════════════════════════════════════════
//  BASE DE DONNÉES FICTIVE — SAGAM SÉCURITÉ
//  Générée pour prototype & démonstration
// ═══════════════════════════════════════════════════════

// ── TABLE 1 : SUPERVISEURS ──
const SUPERVISEURS = [
  { id: "SUP-001", nom: "Moussa Diallo",   telephone: "77 123 45 67", brigade: "Brigade 1", zone: "Plateau / Médina",       actif: true },
  { id: "SUP-002", nom: "Fatou Ndiaye",    telephone: "76 234 56 78", brigade: "Brigade 2", zone: "Liberté / Mermoz",       actif: true },
  { id: "SUP-003", nom: "Ibrahima Sow",    telephone: "78 345 67 89", brigade: "Brigade 3", zone: "Almadies / Ngor",        actif: true },
  { id: "SUP-004", nom: "Aminata Fall",    telephone: "70 456 78 90", brigade: "Brigade 4", zone: "Point E / Fann",         actif: true },
  { id: "SUP-005", nom: "Omar Ba",         telephone: "77 567 89 01", brigade: "Brigade 2", zone: "Liberté / Ouakam",       actif: true },
  { id: "SUP-006", nom: "Rokhaya Diop",    telephone: "76 678 90 12", brigade: "Brigade 1", zone: "Plateau / Gorée",        actif: true },
  { id: "SUP-007", nom: "Abdou Thiaw",     telephone: "78 789 01 23", brigade: "Brigade 3", zone: "Yoff / Ngor",            actif: true },
  { id: "SUP-008", nom: "Mariama Cissé",   telephone: "70 890 12 34", brigade: "Brigade 4", zone: "Sicap / Dieuppeul",      actif: false },
];

// ── TABLE 2 : POSTES ──
const POSTES = [
  // BANQUES
  { id: "POST-001", nom: "SGBS Plateau",              type: "Banque",      brigade: "Brigade 1", zone: "Plateau",   lat: 14.6937, lng: -17.4441, agents_requis: 3, actif: true },
  { id: "POST-002", nom: "BICIS Médina",              type: "Banque",      brigade: "Brigade 2", zone: "Médina",    lat: 14.6892, lng: -17.4512, agents_requis: 2, actif: true },
  { id: "POST-003", nom: "Banque BIS Almadies",       type: "Banque",      brigade: "Brigade 1", zone: "Almadies",  lat: 14.7312, lng: -17.5104, agents_requis: 2, actif: true },
  { id: "POST-004", nom: "Ecobank Mermoz",            type: "Banque",      brigade: "Brigade 3", zone: "Mermoz",    lat: 14.7105, lng: -17.4789, agents_requis: 2, actif: true },
  { id: "POST-005", nom: "Banque Atlantique Plateau", type: "Banque",      brigade: "Brigade 2", zone: "Plateau",   lat: 14.6945, lng: -17.4432, agents_requis: 2, actif: true },
  { id: "POST-006", nom: "BDK Dakar Centre",          type: "Banque",      brigade: "Brigade 1", zone: "Plateau",   lat: 14.6921, lng: -17.4465, agents_requis: 3, actif: true },
  // HÔTELS
  { id: "POST-007", nom: "Hôtel Terrou-Bi",           type: "Hôtel",       brigade: "Brigade 1", zone: "Corniche",  lat: 14.7023, lng: -17.4671, agents_requis: 4, actif: true },
  { id: "POST-008", nom: "Hôtel King Fahd Palace",    type: "Hôtel",       brigade: "Brigade 2", zone: "Almadies",  lat: 14.7398, lng: -17.5123, agents_requis: 5, actif: true },
  { id: "POST-009", nom: "Radisson Blu Dakar",        type: "Hôtel",       brigade: "Brigade 3", zone: "Plateau",   lat: 14.6978, lng: -17.4512, agents_requis: 3, actif: true },
  { id: "POST-010", nom: "Hôtel Pullman Dakar",       type: "Hôtel",       brigade: "Brigade 1", zone: "Plateau",   lat: 14.6965, lng: -17.4501, agents_requis: 4, actif: true },
  { id: "POST-011", nom: "Hôtel Savana Dakar",        type: "Hôtel",       brigade: "Brigade 4", zone: "Plateau",   lat: 14.6912, lng: -17.4478, agents_requis: 3, actif: true },
  // COMMERCE
  { id: "POST-012", nom: "Auchan Liberté 6",          type: "Commerce",    brigade: "Brigade 2", zone: "Liberté",   lat: 14.7156, lng: -17.4723, agents_requis: 3, actif: true },
  { id: "POST-013", nom: "Auchan Ouest Foire",        type: "Commerce",    brigade: "Brigade 3", zone: "Ouest Foire",lat:14.7234, lng: -17.4891, agents_requis: 3, actif: true },
  { id: "POST-014", nom: "Centre Commercial Dakar",   type: "Commerce",    brigade: "Brigade 4", zone: "Plateau",   lat: 14.6934, lng: -17.4456, agents_requis: 2, actif: true },
  { id: "POST-015", nom: "Supermarché Casino Plateau",type: "Commerce",    brigade: "Brigade 2", zone: "Plateau",   lat: 14.6927, lng: -17.4443, agents_requis: 2, actif: true },
  { id: "POST-016", nom: "City Dia Mermoz",           type: "Commerce",    brigade: "Brigade 3", zone: "Mermoz",    lat: 14.7112, lng: -17.4801, agents_requis: 2, actif: true },
  // SANTÉ
  { id: "POST-017", nom: "Clinique du Cap",           type: "Santé",       brigade: "Brigade 3", zone: "Almadies",  lat: 14.7289, lng: -17.5067, agents_requis: 3, actif: true },
  { id: "POST-018", nom: "Pharmacie Keur Gorgui",     type: "Santé",       brigade: "Brigade 1", zone: "Keur Gorgui",lat:14.7067, lng: -17.4712, agents_requis: 1, actif: true },
  { id: "POST-019", nom: "Hôpital Principal",         type: "Santé",       brigade: "Brigade 4", zone: "Plateau",   lat: 14.6901, lng: -17.4489, agents_requis: 4, actif: true },
  { id: "POST-020", nom: "Clinique Madeleine",        type: "Santé",       brigade: "Brigade 2", zone: "Madeleine", lat: 14.6956, lng: -17.4523, agents_requis: 2, actif: true },
  // INSTITUTIONS
  { id: "POST-021", nom: "Ambassade de France",       type: "Institution", brigade: "Brigade 1", zone: "Almadies",  lat: 14.7312, lng: -17.5156, agents_requis: 5, actif: true },
  { id: "POST-022", nom: "Ambassade des USA",         type: "Institution", brigade: "Brigade 2", zone: "Almadies",  lat: 14.7334, lng: -17.5134, agents_requis: 6, actif: true },
  { id: "POST-023", nom: "Ministère des Finances",    type: "Institution", brigade: "Brigade 3", zone: "Plateau",   lat: 14.6912, lng: -17.4467, agents_requis: 4, actif: true },
  { id: "POST-024", nom: "BCEAO Siège",               type: "Institution", brigade: "Brigade 1", zone: "Plateau",   lat: 14.6923, lng: -17.4452, agents_requis: 5, actif: true },
  // RÉSIDENCES
  { id: "POST-025", nom: "Résidence Point E",         type: "Résidence",   brigade: "Brigade 2", zone: "Point E",   lat: 14.6989, lng: -17.4567, agents_requis: 2, actif: true },
  { id: "POST-026", nom: "Résidence Almadies",        type: "Résidence",   brigade: "Brigade 1", zone: "Almadies",  lat: 14.7356, lng: -17.5178, agents_requis: 2, actif: true },
  { id: "POST-027", nom: "Villa Mermoz",              type: "Résidence",   brigade: "Brigade 3", zone: "Mermoz",    lat: 14.7123, lng: -17.4812, agents_requis: 1, actif: true },
  { id: "POST-028", nom: "Résidence Fann",            type: "Résidence",   brigade: "Brigade 4", zone: "Fann",      lat: 14.6934, lng: -17.4601, agents_requis: 2, actif: true },
  { id: "POST-029", nom: "Villa Ngor",                type: "Résidence",   brigade: "Brigade 3", zone: "Ngor",      lat: 14.7445, lng: -17.5212, agents_requis: 1, actif: true },
  { id: "POST-030", nom: "Résidence Liberté 5",       type: "Résidence",   brigade: "Brigade 2", zone: "Liberté",   lat: 14.7145, lng: -17.4734, agents_requis: 2, actif: true },
];

// ── TABLE 3 : AGENTS ──
const AGENTS = [
  { id: "AGT-001", matricule: "MAT-001", nom: "Mamadou Sarr",       brigade: "Brigade 1", poste_principal: "POST-001", telephone: "77 111 22 33", actif: true },
  { id: "AGT-002", matricule: "MAT-002", nom: "Seydou Camara",      brigade: "Brigade 1", poste_principal: "POST-007", telephone: "76 222 33 44", actif: true },
  { id: "AGT-003", matricule: "MAT-003", nom: "Aissatou Mbaye",     brigade: "Brigade 2", poste_principal: "POST-012", telephone: "78 333 44 55", actif: true },
  { id: "AGT-004", matricule: "MAT-004", nom: "Cheikh Diallo",      brigade: "Brigade 2", poste_principal: "POST-002", telephone: "70 444 55 66", actif: true },
  { id: "AGT-005", matricule: "MAT-005", nom: "Ndéye Seck",         brigade: "Brigade 3", poste_principal: "POST-017", telephone: "77 555 66 77", actif: true },
  { id: "AGT-006", matricule: "MAT-006", nom: "Pape Ndiaye",        brigade: "Brigade 3", poste_principal: "POST-013", telephone: "76 666 77 88", actif: true },
  { id: "AGT-007", matricule: "MAT-007", nom: "Coumba Thiam",       brigade: "Brigade 4", poste_principal: "POST-019", telephone: "78 777 88 99", actif: true },
  { id: "AGT-008", matricule: "MAT-008", nom: "Babacar Faye",       brigade: "Brigade 1", poste_principal: "POST-024", telephone: "70 888 99 00", actif: true },
  { id: "AGT-009", matricule: "MAT-009", nom: "Khady Gueye",        brigade: "Brigade 2", poste_principal: "POST-025", telephone: "77 999 00 11", actif: true },
  { id: "AGT-010", matricule: "MAT-010", nom: "Lamine Diouf",       brigade: "Brigade 3", poste_principal: "POST-009", telephone: "76 000 11 22", actif: true },
  { id: "AGT-011", matricule: "MAT-011", nom: "Binta Kouyaté",      brigade: "Brigade 4", poste_principal: "POST-028", telephone: "78 111 22 33", actif: true },
  { id: "AGT-012", matricule: "MAT-012", nom: "Aliou Badji",        brigade: "Brigade 1", poste_principal: "POST-021", telephone: "70 222 33 44", actif: true },
  { id: "AGT-013", matricule: "MAT-013", nom: "Marème Dieng",       brigade: "Brigade 2", poste_principal: "POST-015", telephone: "77 333 44 55", actif: true },
  { id: "AGT-014", matricule: "MAT-014", nom: "Modou Fall",         brigade: "Brigade 3", poste_principal: "POST-027", telephone: "76 444 55 66", actif: true },
  { id: "AGT-015", matricule: "MAT-015", nom: "Sokhna Diallo",      brigade: "Brigade 4", poste_principal: "POST-011", telephone: "78 555 66 77", actif: true },
  { id: "AGT-016", matricule: "MAT-016", nom: "Ousmane Ndiaye",     brigade: "Brigade 1", poste_principal: "POST-006", telephone: "70 666 77 88", actif: true },
  { id: "AGT-017", matricule: "MAT-017", nom: "Astou Sarr",         brigade: "Brigade 2", poste_principal: "POST-022", telephone: "77 777 88 99", actif: true },
  { id: "AGT-018", matricule: "MAT-018", nom: "Ibou Sow",           brigade: "Brigade 3", poste_principal: "POST-023", telephone: "76 888 99 00", actif: true },
  { id: "AGT-019", matricule: "MAT-019", nom: "Fatimata Ba",        brigade: "Brigade 4", poste_principal: "POST-020", telephone: "78 999 00 11", actif: true },
  { id: "AGT-020", matricule: "MAT-020", nom: "Cheikh Tidiane Ly",  brigade: "Brigade 1", poste_principal: "POST-010", telephone: "70 000 11 22", actif: true },
];

// ── TABLE 4 : RONDES / SOUMISSIONS ──
const RONDES = [
  // Avril 2026 — données récentes
  { id:"RND-001", date:"2026-04-08", heure_arrivee:"05:20", heure_releve:"05:45", superviseur_id:"SUP-006", superviseur_nom:"Rokhaya Diop",  poste_id:"POST-021", poste_nom:"Ambassade de France",       brigade:"Brigade 1", agents_presents:5, agents_requis:5, agents_noms:["MAT-012","MAT-008"], statut:"RAS",      incident:false, remarques:"Poste en ordre, agents en tenue réglementaire.", lat:14.7312, lng:-17.5156 },
  { id:"RND-002", date:"2026-04-08", heure_arrivee:"05:45", heure_releve:"06:10", superviseur_id:"SUP-004", superviseur_nom:"Aminata Fall",   poste_id:"POST-028", poste_nom:"Résidence Fann",            brigade:"Brigade 4", agents_presents:2, agents_requis:2, agents_noms:["MAT-011"], statut:"RAS",      incident:false, remarques:"RAS.", lat:14.6934, lng:-17.4601 },
  { id:"RND-003", date:"2026-04-08", heure_arrivee:"06:30", heure_releve:"06:55", superviseur_id:"SUP-005", superviseur_nom:"Omar Ba",        poste_id:"POST-012", poste_nom:"Auchan Liberté 6",          brigade:"Brigade 2", agents_presents:3, agents_requis:3, agents_noms:["MAT-003","MAT-013"], statut:"Retard",   incident:false, remarques:"Superviseur arrivé avec 30 min de retard.", lat:14.7156, lng:-17.4723 },
  { id:"RND-004", date:"2026-04-08", heure_arrivee:"07:48", heure_releve:"08:05", superviseur_id:"SUP-002", superviseur_nom:"Fatou Ndiaye",   poste_id:"POST-001", poste_nom:"SGBS Plateau",              brigade:"Brigade 1", agents_presents:3, agents_requis:3, agents_noms:["MAT-001"], statut:"RAS",      incident:false, remarques:"Tout est en ordre.", lat:14.6937, lng:-17.4441 },
  { id:"RND-005", date:"2026-04-08", heure_arrivee:"07:52", heure_releve:"08:12", superviseur_id:"SUP-001", superviseur_nom:"Moussa Diallo",  poste_id:"POST-007", poste_nom:"Hôtel Terrou-Bi",           brigade:"Brigade 1", agents_presents:4, agents_requis:4, agents_noms:["MAT-002","MAT-020"], statut:"RAS",      incident:false, remarques:"Bonne organisation au poste.", lat:14.7023, lng:-17.4671 },
  { id:"RND-006", date:"2026-04-08", heure_arrivee:"08:02", heure_releve:"08:22", superviseur_id:"SUP-001", superviseur_nom:"Moussa Diallo",  poste_id:"POST-025", poste_nom:"Résidence Point E",         brigade:"Brigade 2", agents_presents:2, agents_requis:2, agents_noms:["MAT-009"], statut:"RAS",      incident:false, remarques:"", lat:14.6989, lng:-17.4567 },
  { id:"RND-007", date:"2026-04-08", heure_arrivee:"08:14", heure_releve:"08:45", superviseur_id:"SUP-003", superviseur_nom:"Ibrahima Sow",   poste_id:"POST-002", poste_nom:"BICIS Médina",              brigade:"Brigade 2", agents_presents:1, agents_requis:2, agents_noms:["MAT-004"], statut:"Incident",  incident:true,  description_incident:"Un agent absent sans justification. Tentative d'intrusion signalée côté parking.", photo:true, audio:false, remarques:"Renfort demandé.", lat:14.6892, lng:-17.4512 },
  { id:"RND-008", date:"2026-04-08", heure_arrivee:"08:30", heure_releve:"08:50", superviseur_id:"SUP-002", superviseur_nom:"Fatou Ndiaye",   poste_id:"POST-017", poste_nom:"Clinique du Cap",           brigade:"Brigade 3", agents_presents:3, agents_requis:3, agents_noms:["MAT-005","MAT-010"], statut:"RAS",      incident:false, remarques:"RAS.", lat:14.7289, lng:-17.5067 },
  { id:"RND-009", date:"2026-04-08", heure_arrivee:"09:10", heure_releve:"09:30", superviseur_id:"SUP-007", superviseur_nom:"Abdou Thiaw",    poste_id:"POST-003", poste_nom:"Banque BIS Almadies",       brigade:"Brigade 1", agents_presents:2, agents_requis:2, agents_noms:["MAT-016"], statut:"Incident",  incident:true,  description_incident:"Alarme déclenchée sans cause apparente. Fausse alerte confirmée après vérification.", photo:true, audio:true, remarques:"Système d'alarme à vérifier.", lat:14.7312, lng:-17.5104 },
  { id:"RND-010", date:"2026-04-08", heure_arrivee:"09:45", heure_releve:"10:05", superviseur_id:"SUP-004", superviseur_nom:"Aminata Fall",   poste_id:"POST-019", poste_nom:"Hôpital Principal",         brigade:"Brigade 4", agents_presents:4, agents_requis:4, agents_noms:["MAT-007","MAT-015"], statut:"RAS",      incident:false, remarques:"Poste calme, agents professionnels.", lat:14.6901, lng:-17.4489 },

  // 7 Avril
  { id:"RND-011", date:"2026-04-07", heure_arrivee:"06:00", heure_releve:"06:25", superviseur_id:"SUP-001", superviseur_nom:"Moussa Diallo",  poste_id:"POST-024", poste_nom:"BCEAO Siège",               brigade:"Brigade 1", agents_presents:5, agents_requis:5, agents_noms:["MAT-008","MAT-012","MAT-016"], statut:"RAS",   incident:false, remarques:"", lat:14.6923, lng:-17.4452 },
  { id:"RND-012", date:"2026-04-07", heure_arrivee:"06:30", heure_releve:"06:55", superviseur_id:"SUP-002", superviseur_nom:"Fatou Ndiaye",   poste_id:"POST-022", poste_nom:"Ambassade des USA",         brigade:"Brigade 2", agents_presents:6, agents_requis:6, agents_noms:["MAT-017","MAT-003"], statut:"RAS",      incident:false, remarques:"RAS.", lat:14.7334, lng:-17.5134 },
  { id:"RND-013", date:"2026-04-07", heure_arrivee:"07:15", heure_releve:"07:40", superviseur_id:"SUP-003", superviseur_nom:"Ibrahima Sow",   poste_id:"POST-013", poste_nom:"Auchan Ouest Foire",        brigade:"Brigade 3", agents_presents:3, agents_requis:3, agents_noms:["MAT-006","MAT-010"], statut:"RAS",      incident:false, remarques:"", lat:14.7234, lng:-17.4891 },
  { id:"RND-014", date:"2026-04-07", heure_arrivee:"08:00", heure_releve:"08:20", superviseur_id:"SUP-005", superviseur_nom:"Omar Ba",        poste_id:"POST-009", poste_nom:"Radisson Blu Dakar",        brigade:"Brigade 3", agents_presents:3, agents_requis:3, agents_noms:["MAT-010"], statut:"RAS",      incident:false, remarques:"", lat:14.6978, lng:-17.4512 },
  { id:"RND-015", date:"2026-04-07", heure_arrivee:"08:45", heure_releve:"09:10", superviseur_id:"SUP-006", superviseur_nom:"Rokhaya Diop",  poste_id:"POST-023", poste_nom:"Ministère des Finances",    brigade:"Brigade 3", agents_presents:4, agents_requis:4, agents_noms:["MAT-018"], statut:"Retard",   incident:false, remarques:"Retard lié aux embouteillages.", lat:14.6912, lng:-17.4467 },
  { id:"RND-016", date:"2026-04-07", heure_arrivee:"09:30", heure_releve:"09:55", superviseur_id:"SUP-004", superviseur_nom:"Aminata Fall",   poste_id:"POST-008", poste_nom:"Hôtel King Fahd Palace",    brigade:"Brigade 2", agents_presents:5, agents_requis:5, agents_noms:["MAT-017","MAT-013"], statut:"RAS",      incident:false, remarques:"RAS.", lat:14.7398, lng:-17.5123 },
  { id:"RND-017", date:"2026-04-07", heure_arrivee:"10:15", heure_releve:"10:40", superviseur_id:"SUP-007", superviseur_nom:"Abdou Thiaw",    poste_id:"POST-029", poste_nom:"Villa Ngor",                brigade:"Brigade 3", agents_presents:1, agents_requis:1, agents_noms:["MAT-014"], statut:"RAS",      incident:false, remarques:"", lat:14.7445, lng:-17.5212 },

  // 6 Avril
  { id:"RND-018", date:"2026-04-06", heure_arrivee:"05:30", heure_releve:"05:55", superviseur_id:"SUP-001", superviseur_nom:"Moussa Diallo",  poste_id:"POST-010", poste_nom:"Hôtel Pullman Dakar",       brigade:"Brigade 1", agents_presents:4, agents_requis:4, agents_noms:["MAT-020","MAT-002"], statut:"RAS",      incident:false, remarques:"", lat:14.6965, lng:-17.4501 },
  { id:"RND-019", date:"2026-04-06", heure_arrivee:"06:10", heure_releve:"06:35", superviseur_id:"SUP-003", superviseur_nom:"Ibrahima Sow",   poste_id:"POST-004", poste_nom:"Ecobank Mermoz",            brigade:"Brigade 3", agents_presents:2, agents_requis:2, agents_noms:["MAT-018"], statut:"RAS",      incident:false, remarques:"", lat:14.7105, lng:-17.4789 },
  { id:"RND-020", date:"2026-04-06", heure_arrivee:"07:00", heure_releve:"07:25", superviseur_id:"SUP-002", superviseur_nom:"Fatou Ndiaye",   poste_id:"POST-020", poste_nom:"Clinique Madeleine",        brigade:"Brigade 2", agents_presents:2, agents_requis:2, agents_noms:["MAT-019","MAT-013"], statut:"RAS",      incident:false, remarques:"Tout en ordre.", lat:14.6956, lng:-17.4523 },
  { id:"RND-021", date:"2026-04-06", heure_arrivee:"07:40", heure_releve:"08:05", superviseur_id:"SUP-005", superviseur_nom:"Omar Ba",        poste_id:"POST-016", poste_nom:"City Dia Mermoz",           brigade:"Brigade 3", agents_presents:2, agents_requis:2, agents_noms:["MAT-006"], statut:"RAS",      incident:false, remarques:"", lat:14.7112, lng:-17.4801 },
  { id:"RND-022", date:"2026-04-06", heure_arrivee:"08:20", heure_releve:"08:50", superviseur_id:"SUP-006", superviseur_nom:"Rokhaya Diop",  poste_id:"POST-005", poste_nom:"Banque Atlantique Plateau", brigade:"Brigade 2", agents_presents:1, agents_requis:2, agents_noms:["MAT-001"], statut:"Incident",  incident:true,  description_incident:"Agent en retard de 2h. Poste non couvert pendant 1h30.", photo:true, audio:false, remarques:"Agent convoqué pour explication.", lat:14.6945, lng:-17.4432 },
  { id:"RND-023", date:"2026-04-06", heure_arrivee:"09:00", heure_releve:"09:20", superviseur_id:"SUP-004", superviseur_nom:"Aminata Fall",   poste_id:"POST-030", poste_nom:"Résidence Liberté 5",       brigade:"Brigade 2", agents_presents:2, agents_requis:2, agents_noms:["MAT-009","MAT-003"], statut:"RAS",      incident:false, remarques:"", lat:14.7145, lng:-17.4734 },

  // 5 Avril
  { id:"RND-024", date:"2026-04-05", heure_arrivee:"06:05", heure_releve:"06:30", superviseur_id:"SUP-001", superviseur_nom:"Moussa Diallo",  poste_id:"POST-006", poste_nom:"BDK Dakar Centre",          brigade:"Brigade 1", agents_presents:3, agents_requis:3, agents_noms:["MAT-016","MAT-008"], statut:"RAS",      incident:false, remarques:"", lat:14.6921, lng:-17.4465 },
  { id:"RND-025", date:"2026-04-05", heure_arrivee:"07:30", heure_releve:"07:55", superviseur_id:"SUP-003", superviseur_nom:"Ibrahima Sow",   poste_id:"POST-018", poste_nom:"Pharmacie Keur Gorgui",     brigade:"Brigade 1", agents_presents:1, agents_requis:1, agents_noms:["MAT-018"], statut:"RAS",      incident:false, remarques:"", lat:14.7067, lng:-17.4712 },
  { id:"RND-026", date:"2026-04-05", heure_arrivee:"08:10", heure_releve:"08:35", superviseur_id:"SUP-007", superviseur_nom:"Abdou Thiaw",    poste_id:"POST-026", poste_nom:"Résidence Almadies",        brigade:"Brigade 1", agents_presents:2, agents_requis:2, agents_noms:["MAT-012"], statut:"RAS",      incident:false, remarques:"", lat:14.7356, lng:-17.5178 },
  { id:"RND-027", date:"2026-04-05", heure_arrivee:"09:20", heure_releve:"09:45", superviseur_id:"SUP-002", superviseur_nom:"Fatou Ndiaye",   poste_id:"POST-011", poste_nom:"Hôtel Savana Dakar",        brigade:"Brigade 4", agents_presents:3, agents_requis:3, agents_noms:["MAT-015","MAT-007"], statut:"RAS",      incident:false, remarques:"", lat:14.6912, lng:-17.4478 },
  { id:"RND-028", date:"2026-04-05", heure_arrivee:"10:00", heure_releve:"10:25", superviseur_id:"SUP-005", superviseur_nom:"Omar Ba",        poste_id:"POST-014", poste_nom:"Centre Commercial Dakar",   brigade:"Brigade 4", agents_presents:2, agents_requis:2, agents_noms:["MAT-007"], statut:"Retard",   incident:false, remarques:"Retard dû à panne de véhicule.", lat:14.6934, lng:-17.4456 },

  // 4 Avril
  { id:"RND-029", date:"2026-04-04", heure_arrivee:"05:50", heure_releve:"06:15", superviseur_id:"SUP-006", superviseur_nom:"Rokhaya Diop",  poste_id:"POST-015", poste_nom:"Supermarché Casino Plateau", brigade:"Brigade 2", agents_presents:2, agents_requis:2, agents_noms:["MAT-013"], statut:"RAS",   incident:false, remarques:"", lat:14.6927, lng:-17.4443 },
  { id:"RND-030", date:"2026-04-04", heure_arrivee:"06:40", heure_releve:"07:05", superviseur_id:"SUP-004", superviseur_nom:"Aminata Fall",   poste_id:"POST-027", poste_nom:"Villa Mermoz",              brigade:"Brigade 3", agents_presents:1, agents_requis:1, agents_noms:["MAT-014"], statut:"RAS",      incident:false, remarques:"", lat:14.7123, lng:-17.4812 },
  { id:"RND-031", date:"2026-04-04", heure_arrivee:"07:20", heure_releve:"07:45", superviseur_id:"SUP-001", superviseur_nom:"Moussa Diallo",  poste_id:"POST-009", poste_nom:"Radisson Blu Dakar",        brigade:"Brigade 3", agents_presents:3, agents_requis:3, agents_noms:["MAT-010","MAT-005"], statut:"RAS",      incident:false, remarques:"", lat:14.6978, lng:-17.4512 },
  { id:"RND-032", date:"2026-04-04", heure_arrivee:"08:55", heure_releve:"09:20", superviseur_id:"SUP-003", superviseur_nom:"Ibrahima Sow",   poste_id:"POST-019", poste_nom:"Hôpital Principal",         brigade:"Brigade 4", agents_presents:4, agents_requis:4, agents_noms:["MAT-007","MAT-019"], statut:"RAS",      incident:false, remarques:"Excellent travail des agents.", lat:14.6901, lng:-17.4489 },
];

// ── TABLE 5 : STATISTIQUES CALCULÉES ──
const STATS = {
  total_postes: 30,
  postes_actifs: 30,
  total_superviseurs: 8,
  superviseurs_actifs: 7,
  total_agents: 20,
  agents_actifs: 20,
  rondes_ce_mois: 312,
  rondes_aujourd_hui: 10,
  rondes_planifiees_aujourd_hui: 14,
  taux_presence_agents: 96,
  incidents_ce_mois: 8,
  incidents_non_resolus: 2,
  retards_ce_mois: 5,
  taux_completion_rondes: 87,

  rondes_par_jour: [
    { date: "2026-04-02", nb: 22 },
    { date: "2026-04-03", nb: 25 },
    { date: "2026-04-04", nb: 28 },
    { date: "2026-04-05", nb: 30 },
    { date: "2026-04-06", nb: 27 },
    { date: "2026-04-07", nb: 34 },
    { date: "2026-04-08", nb: 28 },
  ],

  rondes_par_superviseur: [
    { superviseur: "Moussa Diallo",  nb: 46 },
    { superviseur: "Fatou Ndiaye",   nb: 42 },
    { superviseur: "Ibrahima Sow",   nb: 38 },
    { superviseur: "Aminata Fall",   nb: 34 },
    { superviseur: "Omar Ba",        nb: 30 },
    { superviseur: "Rokhaya Diop",   nb: 25 },
    { superviseur: "Abdou Thiaw",    nb: 22 },
  ],

  postes_par_type: [
    { type: "Banque",      nb: 6,  pct: 20 },
    { type: "Hôtel",       nb: 5,  pct: 17 },
    { type: "Commerce",    nb: 5,  pct: 17 },
    { type: "Institution", nb: 4,  pct: 13 },
    { type: "Santé",       nb: 4,  pct: 13 },
    { type: "Résidence",   nb: 6,  pct: 20 },
  ],

  incidents_par_type: [
    { type: "Agent absent",          nb: 3 },
    { type: "Alarme déclenchée",     nb: 2 },
    { type: "Tentative intrusion",   nb: 1 },
    { type: "Poste non couvert",     nb: 1 },
    { type: "Autre",                 nb: 1 },
  ],
};

// Export
if (typeof module !== 'undefined') {
  module.exports = { SUPERVISEURS, POSTES, AGENTS, RONDES, STATS };
}
