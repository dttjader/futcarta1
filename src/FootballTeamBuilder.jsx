import React, { useState } from 'react';
import { Shuffle, Trash2, Users, ArrowDown, ArrowUp, AlertCircle, Edit3, Plus, X, Search, Eye, Lock, CheckCircle } from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const INITIAL_PLAYERS = [
  { id: 25, name: "Waldir Peres", position: "GOL", team: "Brasil 1982", number: 1 },
  { id: 26, name: "Leandro", position: "LAT", team: "Brasil 1982", number: 2 },
  { id: 27, name: "Oscar", position: "ZAG", team: "Brasil 1982", number: 3 },
  { id: 28, name: "Luizinho", position: "ZAG", team: "Brasil 1982", number: 4 },
  { id: 29, name: "Toninho Cerezo", position: "VOL", team: "Brasil 1982", number: 5 },
  { id: 30, name: "Júnior", position: "LAT", team: "Brasil 1982", number: 6 },
  { id: 31, name: "Sócrates", position: "MEI", team: "Brasil 1982", number: 8 },
  { id: 32, name: "Zico", position: "MEI", team: "Brasil 1982", number: 10 },
  { id: 33, name: "Serginho", position: "ATA", team: "Brasil 1982", number: 9 },
  { id: 34, name: "Falcão", position: "MEI", team: "Brasil 1982", number: 5 },
  { id: 35, name: "Éder", position: "ATA", team: "Brasil 1982", number: 11 },
  { id: 36, name: "Félix", position: "GOL", team: "Brasil 1970", number: 1 },
  { id: 37, name: "Carlos Alberto", position: "LAT", team: "Brasil 1970", number: 4 },
  { id: 38, name: "Brito", position: "ZAG", team: "Brasil 1970", number: 3 },
  { id: 39, name: "Piazza", position: "ZAG", team: "Brasil 1970", number: 2 },
  { id: 40, name: "Everaldo", position: "LAT", team: "Brasil 1970", number: 16 },
  { id: 41, name: "Clodoaldo", position: "VOL", team: "Brasil 1970", number: 5 },
  { id: 42, name: "Gérson", position: "MEI", team: "Brasil 1970", number: 8 },
  { id: 43, name: "Jairzinho", position: "ATA", team: "Brasil 1970", number: 7 },
  { id: 44, name: "Tostão", position: "ATA", team: "Brasil 1970", number: 9 },
  { id: 45, name: "Pelé", position: "MEI", team: "Brasil 1970", number: 10 },
  { id: 46, name: "Rivelino", position: "MEI", team: "Brasil 1970", number: 11 },
  { id: 47, name: "Marcos", position: "GOL", team: "Brasil 2002", number: 1 },
  { id: 48, name: "Cafu", position: "LAT", team: "Brasil 2002", number: 2 },
  { id: 49, name: "Lúcio", position: "ZAG", team: "Brasil 2002", number: 3 },
  { id: 50, name: "Roque Júnior", position: "ZAG", team: "Brasil 2002", number: 4 },
  { id: 51, name: "Edmílson", position: "ZAG", team: "Brasil 2002", number: 5 },
  { id: 52, name: "Roberto Carlos", position: "LAT", team: "Brasil 2002", number: 6 },
  { id: 53, name: "Gilberto Silva", position: "VOL", team: "Brasil 2002", number: 8 },
  { id: 54, name: "Ronaldo", position: "ATA", team: "Brasil 2002", number: 9 },
  { id: 55, name: "Rivaldo", position: "MEI", team: "Brasil 2002", number: 10 },
  { id: 56, name: "Ronaldinho Gaúcho", position: "ATA", team: "Brasil 2002", number: 11 },
  { id: 57, name: "Kléberson", position: "VOL", team: "Brasil 2002", number: 15 },
  { id: 58, name: "Danrlei", position: "GOL", team: "Grêmio 1995", number: 1 },
  { id: 59, name: "Arce", position: "LAT", team: "Grêmio 1995", number: 2 },
  { id: 60, name: "Rivarola", position: "ZAG", team: "Grêmio 1995", number: 24 },
  { id: 61, name: "Adilson", position: "ZAG", team: "Grêmio 1995", number: 4 },
  { id: 62, name: "Dinho", position: "VOL", team: "Grêmio 1995", number: 5 },
  { id: 63, name: "Roger", position: "LAT", team: "Grêmio 1995", number: 6 },
  { id: 64, name: "Paulo Nunes", position: "ATA", team: "Grêmio 1995", number: 7 },
  { id: 65, name: "Goiano", position: "VOL", team: "Grêmio 1995", number: 8 },
  { id: 66, name: "Jardel", position: "ATA", team: "Grêmio 1995", number: 16 },
  { id: 67, name: "Carlos Miguel", position: "MEI", team: "Grêmio 1995", number: 11 },
  { id: 68, name: "Arilson", position: "MEI", team: "Grêmio 1995", number: 19 },
  { id: 69, name: "Marcelo Grohe", position: "GOL", team: "Grêmio 2017", number: 1 },
  { id: 70, name: "Edilson", position: "LAT", team: "Grêmio 2017", number: 2 },
  { id: 71, name: "Pedro Geromel", position: "ZAG", team: "Grêmio 2017", number: 3 },
  { id: 72, name: "Walter Kannemann", position: "ZAG", team: "Grêmio 2017", number: 4 },
  { id: 73, name: "Michel", position: "MEI", team: "Grêmio 2017", number: 5 },
  { id: 74, name: "Bruno Cortez", position: "LAT", team: "Grêmio 2017", number: 12 },
  { id: 75, name: "Luan", position: "MEI", team: "Grêmio 2017", number: 7 },
  { id: 76, name: "Arthur", position: "MEI", team: "Grêmio 2017", number: 29 },
  { id: 77, name: "Lucas Barrios", position: "ATA", team: "Grêmio 2017", number: 18 },
  { id: 78, name: "Ramiro", position: "MEI", team: "Grêmio 2017", number: 17 },
  { id: 79, name: "Fernandinho", position: "MEI", team: "Grêmio 2017", number: 21 },
  { id: 80, name: "Leão", position: "GOL", team: "Grêmio 1977", number: 1 },
  { id: 81, name: "Eurico", position: "LAT", team: "Grêmio 1977", number: 2 },
  { id: 82, name: "Ancheta", position: "ZAG", team: "Grêmio 1977", number: 3 },
  { id: 83, name: "Oberdan", position: "ZAG", team: "Grêmio 1977", number: 4 },
  { id: 84, name: "Vitor Hugo", position: "VOL", team: "Grêmio 1977", number: 5 },
  { id: 85, name: "Ladinho", position: "LAT", team: "Grêmio 1977", number: 6 },
  { id: 86, name: "Tarciso", position: "ATA", team: "Grêmio 1977", number: 7 },
  { id: 87, name: "Yura", position: "MEI", team: "Grêmio 1977", number: 8 },
  { id: 88, name: "André Catimba", position: "ATA", team: "Grêmio 1977", number: 9 },
  { id: 89, name: "Tadeu Ricci", position: "MEI", team: "Grêmio 1977", number: 10 },
  { id: 90, name: "Éder Aleixo", position: "ATA", team: "Grêmio 1977", number: 11 },
  // Grêmio 1981 — inclui Leão (GOL) e Tarciso (ATA), que também jogaram no Grêmio 1977
  { id: 91, name: "Leão", position: "GOL", team: "Grêmio 1981", number: 1 },
  { id: 130, name: "Paulo Roberto", position: "LAT", team: "Grêmio 1981", number: 2 },
  { id: 92, name: "Newmar", position: "ZAG", team: "Grêmio 1981", number: 3 },
  { id: 93, name: "De León", position: "ZAG", team: "Grêmio 1981", number: 4 },
  { id: 94, name: "China", position: "VOL", team: "Grêmio 1981", number: 5 },
  { id: 95, name: "Casemiro", position: "LAT", team: "Grêmio 1981", number: 6 },
  { id: 131, name: "Tarciso", position: "ATA", team: "Grêmio 1981", number: 7 },
  { id: 96, name: "Paulo Isidoro", position: "MEI", team: "Grêmio 1981", number: 8 },
  { id: 97, name: "Baltazar", position: "ATA", team: "Grêmio 1981", number: 9 },
  { id: 98, name: "Vilson Tadei", position: "MEI", team: "Grêmio 1981", number: 10 },
  { id: 99, name: "Odair", position: "ATA", team: "Grêmio 1981", number: 11 },
  // Internacional 1975 — inclui Falcão (MEI) no lugar de Volante sem nome
  { id: 100, name: "Manga", position: "GOL", team: "Internacional 1975", number: 1 },
  { id: 101, name: "Cláudio Duarte", position: "LAT", team: "Internacional 1975", number: 2 },
  { id: 102, name: "Elias Figueroa", position: "ZAG", team: "Internacional 1975", number: 3 },
  { id: 103, name: "Pontes", position: "ZAG", team: "Internacional 1975", number: 4 },
  { id: 132, name: "Falcão", position: "VOL", team: "Internacional 1975", number: 5 },
  { id: 104, name: "Vacaria", position: "LAT", team: "Internacional 1975", number: 6 },
  { id: 105, name: "Valdomiro", position: "ATA", team: "Internacional 1975", number: 7 },
  { id: 106, name: "Batista", position: "MEI", team: "Internacional 1975", number: 8 },
  { id: 107, name: "Flávio Minuano", position: "ATA", team: "Internacional 1975", number: 9 },
  { id: 108, name: "Paulo César Carpegiani", position: "MEI", team: "Internacional 1975", number: 10 },
  { id: 109, name: "Lula", position: "ATA", team: "Internacional 1975", number: 11 },
  // Palmeiras 1972 — inclui Leão (GOL) e Eurico (LAT), que também jogaram no Grêmio 1977
  { id: 133, name: "Leão", position: "GOL", team: "Palmeiras 1972", number: 1 },
  { id: 134, name: "Eurico", position: "LAT", team: "Palmeiras 1972", number: 2 },
  { id: 110, name: "Luís Pereira", position: "ZAG", team: "Palmeiras 1972", number: 3 },
  { id: 111, name: "Alfredo Mostarda", position: "ZAG", team: "Palmeiras 1972", number: 4 },
  { id: 112, name: "Dudu", position: "VOL", team: "Palmeiras 1972", number: 5 },
  { id: 113, name: "Zeca", position: "LAT", team: "Palmeiras 1972", number: 6 },
  { id: 114, name: "Nei", position: "ATA", team: "Palmeiras 1972", number: 7 },
  { id: 115, name: "Leivinha", position: "MEI", team: "Palmeiras 1972", number: 8 },
  { id: 116, name: "César Maluco", position: "ATA", team: "Palmeiras 1972", number: 9 },
  { id: 117, name: "Ademir da Guia", position: "MEI", team: "Palmeiras 1972", number: 10 },
  { id: 118, name: "Edu Bala", position: "MEI", team: "Palmeiras 1972", number: 11 },
  { id: 119, name: "Rogério Ceni", position: "GOL", team: "Outros Jogadores", number: 1 },
  { id: 120, name: "Nelinho", position: "LAT", team: "Outros Jogadores", number: 2 },
  { id: 121, name: "Franz Beckenbauer", position: "ZAG", team: "Outros Jogadores", number: 3 },
  { id: 122, name: "Mauro Galvão", position: "ZAG", team: "Outros Jogadores", number: 4 },
  { id: 123, name: "Zé Carlos", position: "VOL", team: "Outros Jogadores", number: 5 },
  { id: 124, name: "Marinho Chagas", position: "LAT", team: "Outros Jogadores", number: 6 },
  { id: 125, name: "Capitão", position: "ATA", team: "Outros Jogadores", number: 7 },
  { id: 126, name: "Renato Gaúcho", position: "MEI", team: "Outros Jogadores", number: 8 },
  { id: 127, name: "Careca", position: "MEI", team: "Outros Jogadores", number: 9 },
  { id: 128, name: "Zenon", position: "MEI", team: "Outros Jogadores", number: 10 },
  { id: 129, name: "Bozó", position: "ATA", team: "Outros Jogadores", number: 11 }
];

const FORMATIONS = {
  "4-4-2":   { GOL: 1, LAT: 2, ZAG: 2, VOL: 2, MEI: 2, ATA: 2 },
  "4-3-3":   { GOL: 1, LAT: 2, ZAG: 2, VOL: 1, MEI: 2, ATA: 3 },
  "3-5-2":   { GOL: 1, LAT: 0, ZAG: 3, VOL: 2, MEI: 3, ATA: 2 },
  "4-2-3-1": { GOL: 1, LAT: 2, ZAG: 2, VOL: 2, MEI: 3, ATA: 1 },
  "3-4-3":   { GOL: 1, LAT: 0, ZAG: 3, VOL: 2, MEI: 2, ATA: 3 }
};

const getMaxReservesForFormation = (f) =>
  f === "3-5-2" || f === "3-4-3"
    ? { GOL: 1, LAT: 0, ZAG: 1, VOL: 1, MEI: 1, ATA: 1 }
    : { GOL: 1, LAT: 1, ZAG: 1, VOL: 1, MEI: 1, ATA: 1 };

const POSITION_LABELS = {
  GOL: "Goleiro", LAT: "Lateral", ZAG: "Zagueiro",
  VOL: "Volante", MEI: "Meia", ATA: "Atacante"
};

const POSITION_COLORS = {
  GOL: "from-yellow-500 to-yellow-600",
  LAT: "from-blue-500 to-blue-600",
  ZAG: "from-green-500 to-green-600",
  VOL: "from-purple-500 to-purple-600",
  MEI: "from-orange-500 to-orange-600",
  ATA: "from-red-500 to-red-600"
};

const POSITION_HEX = {
  GOL: "#d97706", LAT: "#2563eb", ZAG: "#16a34a",
  VOL: "#7c3aed", MEI: "#ea580c", ATA: "#dc2626"
};

const POSITIONS = ["GOL", "LAT", "ZAG", "VOL", "MEI", "ATA"];
let nextId = 200;

// ─── MODAL CSS — green glass, matching main screen ───────────────────────────

const MODAL_CSS = `
  .ftb-modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.60);
    backdrop-filter: blur(5px);
    z-index: 200;
    display: flex; align-items: flex-start; justify-content: center;
    overflow-y: auto;
    padding: 28px 16px 48px;
  }
  .ftb-modal-box {
    width: 100%; max-width: 840px;
    background: linear-gradient(155deg,
      rgba(20, 83, 45, 0.96) 0%,
      rgba(10, 30, 18, 0.97) 100%
    );
    border: 1px solid rgba(255,255,255,0.20);
    border-radius: 18px;
    box-shadow: 0 28px 90px rgba(0,0,0,0.65);
    overflow: hidden;
    backdrop-filter: blur(24px);
  }
  .ftb-modal-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 26px 16px;
    border-bottom: 1px solid rgba(255,255,255,0.12);
    background: rgba(0,0,0,0.18);
  }
  .ftb-modal-title {
    font-size: 1.45rem; font-weight: 800;
    color: #fff;
    display: flex; align-items: center; gap: 10px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
  }
  .ftb-modal-body {
    padding: 22px 26px;
    max-height: 76vh;
    overflow-y: auto;
  }
  .ftb-modal-body::-webkit-scrollbar { width: 5px; }
  .ftb-modal-body::-webkit-scrollbar-track { background: rgba(0,0,0,0.15); }
  .ftb-modal-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.18); border-radius: 3px; }

  /* Close button */
  .ftb-close-btn {
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 8px; padding: 7px 9px;
    cursor: pointer; color: rgba(255,255,255,0.65);
    display: flex; align-items: center;
    transition: all 0.15s;
  }
  .ftb-close-btn:hover { background: rgba(255,255,255,0.20); color: #fff; }

  /* Glass inputs */
  .ftb-glass-input {
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 7px; padding: 8px 12px;
    color: #fff; font-size: 0.85rem;
    outline: none; width: 100%;
    font-family: inherit;
    transition: border-color 0.15s, background 0.15s;
  }
  .ftb-glass-input::placeholder { color: rgba(255,255,255,0.38); }
  .ftb-glass-input:focus {
    border-color: rgba(255,255,255,0.45);
    background: rgba(255,255,255,0.16);
  }
  .ftb-glass-input option { background: #14532d; color: #fff; }

  /* Filter pills — same style as main screen checkboxes/buttons */
  .ftb-pill {
    font-size: 0.72rem; font-weight: 600;
    padding: 5px 13px; border-radius: 99px;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.60);
    cursor: pointer; transition: all 0.15s;
    white-space: nowrap;
  }
  .ftb-pill:hover { background: rgba(255,255,255,0.15); color: #fff; border-color: rgba(255,255,255,0.30); }
  .ftb-pill.active {
    background: rgba(255,255,255,0.22);
    border-color: rgba(255,255,255,0.55);
    color: #fff;
  }

  /* Player row */
  .ftb-prow {
    display: grid;
    grid-template-columns: 36px 46px 1fr auto;
    gap: 8px; align-items: center;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.07);
    background: rgba(255,255,255,0.05);
    margin-bottom: 5px;
    transition: background 0.12s, border-color 0.12s;
  }
  .ftb-prow:hover { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.15); }

  /* Edit row */
  .ftb-erow {
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.28);
    border-radius: 8px; padding: 10px 12px;
    margin-bottom: 5px;
  }

  /* Position badge */
  .ftb-pbadge {
    font-size: 0.68rem; font-weight: 700;
    padding: 3px 7px; border-radius: 5px;
    color: #fff; text-align: center; letter-spacing: 0.5px;
  }

  /* Icon buttons */
  .ftb-ibtn {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 6px; padding: 5px 7px;
    cursor: pointer; color: rgba(255,255,255,0.50);
    display: flex; align-items: center; justify-content: center;
    transition: all 0.15s;
  }
  .ftb-ibtn:hover { background: rgba(255,255,255,0.18); color: #fff; border-color: rgba(255,255,255,0.30); }
  .ftb-ibtn.danger:hover { background: rgba(239,68,68,0.20); color: #fca5a5; border-color: rgba(239,68,68,0.40); }
  .ftb-ibtn.save:hover   { background: rgba(34,197,94,0.20); color: #86efac; border-color: rgba(34,197,94,0.40); }

  /* Add-form box */
  .ftb-add-form {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 10px; padding: 16px;
    margin-bottom: 18px;
  }

  /* Confirm overlay */
  .ftb-confirm-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.65);
    backdrop-filter: blur(4px);
    z-index: 300;
    display: flex; align-items: center; justify-content: center;
  }
  .ftb-confirm-box {
    background: linear-gradient(155deg, rgba(20,83,45,0.98) 0%, rgba(10,24,16,0.99) 100%);
    border: 1px solid rgba(255,255,255,0.20);
    border-radius: 14px; padding: 28px;
    max-width: 340px; text-align: center;
    box-shadow: 0 24px 70px rgba(0,0,0,0.70);
  }

  /* Status dot */
  .ftb-sdot {
    width: 9px; height: 9px; border-radius: 50%;
    display: inline-block; flex-shrink: 0;
  }

  /* Stat chip */
  .ftb-schip {
    display: flex; flex-direction: column; align-items: center;
    padding: 8px 12px; min-width: 52px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.07);
  }

  /* Section label */
  .ftb-section-lbl {
    font-size: 0.70rem; font-weight: 700;
    color: rgba(255,255,255,0.55);
    letter-spacing: 2px; text-transform: uppercase;
    margin: 0 0 8px;
  }

  /* Lock badge */
  .ftb-lock-badge {
    display: inline-flex; align-items: center; gap: 4px;
    font-size: 0.68rem; font-weight: 600; letter-spacing: 1px;
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 99px; padding: 3px 10px;
    color: rgba(255,255,255,0.60);
  }
`;

// ─── PLAYER ROSTER MODAL (edit mode OR read-only mode) ────────────────────────

function PlayerRosterModal({ players, setPlayers, gameStarted, mainTeam, reserves, selectedPlayers, drawnPlayers, completedTeams, onClose }) {
  const [search, setSearch] = useState('');
  const [filterPos, setFilterPos] = useState('ALL');
  const [filterTeam, setFilterTeam] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [showAdd, setShowAdd] = useState(false);
  const [newP, setNewP] = useState({ name: '', position: 'GOL', team: '', number: '' });
  const [confirmDel, setConfirmDel] = useState(null);

  // Status computation (only used in read-only mode)
  const getStatus = (player) => {
    for (const t of completedTeams) {
      if (t.mainTeam.find(p => p.id === player.id)) return { type: 'saved_main', label: 'Time Fechado — Titular', team: t.name, color: '#a855f7', dot: '#a855f7' };
      if (t.reserves.find(p => p.id === player.id)) return { type: 'saved_res', label: 'Time Fechado — Reserva', team: t.name, color: '#7c3aed', dot: '#7c3aed' };
    }
    if (mainTeam.find(p => p.id === player.id)) return { type: 'main', label: 'Titular — Time Atual', team: null, color: '#4ade80', dot: '#22c55e' };
    if (reserves.find(p => p.id === player.id)) return { type: 'reserve', label: 'Reserva — Time Atual', team: null, color: '#60a5fa', dot: '#3b82f6' };
    if (drawnPlayers.find(p => p.id === player.id)) return { type: 'drawn', label: 'Sorteado — Em Jogo', team: null, color: '#fb923c', dot: '#f97316' };
    if (selectedPlayers.find(p => p.id === player.id)) return { type: 'hand', label: 'Na Mão — Aguardando', team: null, color: '#fbbf24', dot: '#eab308' };
    return { type: 'available', label: 'Disponível no Baralho', team: null, color: 'rgba(255,255,255,0.45)', dot: 'rgba(255,255,255,0.3)' };
  };

  const allTeams = ['ALL', ...Array.from(new Set(players.map(p => p.team))).sort()];

  const withStatus = players.map(p => ({ ...p, status: getStatus(p) }));

  const filtered = withStatus.filter(p => {
    const ms = p.name.toLowerCase().includes(search.toLowerCase()) || p.team.toLowerCase().includes(search.toLowerCase());
    const mp = filterPos === 'ALL' || p.position === filterPos;
    const mt = filterTeam === 'ALL' || p.team === filterTeam;
    const mst = filterStatus === 'ALL' ||
      (filterStatus === 'saved' ? p.status.type === 'saved_main' || p.status.type === 'saved_res' : p.status.type === filterStatus);
    return ms && mp && mt && mst;
  });

  const grouped = POSITIONS.reduce((acc, pos) => {
    const inPos = filtered.filter(p => p.position === pos);
    if (inPos.length) acc[pos] = inPos;
    return acc;
  }, {});

  const posCounts = POSITIONS.reduce((acc, pos) => { acc[pos] = players.filter(p => p.position === pos).length; return acc; }, {});

  const statusCounts = {
    available: withStatus.filter(p => p.status.type === 'available').length,
    main: withStatus.filter(p => p.status.type === 'main').length,
    reserve: withStatus.filter(p => p.status.type === 'reserve').length,
    hand: withStatus.filter(p => p.status.type === 'hand').length,
    drawn: withStatus.filter(p => p.status.type === 'drawn').length,
    saved: withStatus.filter(p => p.status.type === 'saved_main' || p.status.type === 'saved_res').length,
  };

  const startEdit = (p) => { setEditingId(p.id); setEditForm({ name: p.name, position: p.position, team: p.team, number: p.number }); };
  const saveEdit = (id) => { setPlayers(players.map(p => p.id === id ? { ...p, ...editForm, number: Number(editForm.number) } : p)); setEditingId(null); };
  const doDelete = (id) => { setPlayers(players.filter(p => p.id !== id)); setConfirmDel(null); };
  const doAdd = () => {
    if (!newP.name.trim() || !newP.team.trim() || !newP.number) { alert('Preencha todos os campos!'); return; }
    setPlayers([...players, { ...newP, id: nextId++, number: Number(newP.number) }]);
    setNewP({ name: '', position: 'GOL', team: '', number: '' });
    setShowAdd(false);
  };

  return (
    <>
      <style>{MODAL_CSS}</style>

      {/* Confirm Delete */}
      {confirmDel && (
        <div className="ftb-confirm-overlay">
          <div className="ftb-confirm-box">
            <div style={{ fontSize: '2rem', marginBottom: 10 }}>🗑️</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fca5a5', marginBottom: 8 }}>Remover Jogador?</div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', marginBottom: 22 }}>
              <strong style={{ color: '#fff' }}>{confirmDel.name}</strong> será removido permanentemente do baralho.
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button onClick={() => doDelete(confirmDel.id)}
                style={{ background: 'rgba(239,68,68,0.25)', border: '1px solid rgba(239,68,68,0.45)', color: '#fca5a5', borderRadius: 8, padding: '9px 22px', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem' }}>
                Remover
              </button>
              <button onClick={() => setConfirmDel(null)}
                style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', borderRadius: 8, padding: '9px 22px', cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem' }}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="ftb-modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
        <div className="ftb-modal-box">

          {/* Header */}
          <div className="ftb-modal-header">
            <div className="ftb-modal-title">
              {gameStarted ? <Eye size={20} /> : <Edit3 size={20} />}
              {gameStarted ? 'Situação dos Jogadores' : 'Editar Baralho de Jogadores'}
              {gameStarted && <span className="ftb-lock-badge"><Lock size={10} /> Somente Leitura</span>}
            </div>
            <button className="ftb-close-btn" onClick={onClose}><X size={18} /></button>
          </div>

          <div className="ftb-modal-body">

            {/* Top stat chips */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
              <div className="ftb-schip">
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>{players.length}</span>
                <span style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 3 }}>Total</span>
              </div>
              {POSITIONS.map(pos => (
                <div className="ftb-schip" key={pos}>
                  <span className="ftb-pbadge" style={{ background: POSITION_HEX[pos], marginBottom: 4, fontSize: '0.60rem' }}>{pos}</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{posCounts[pos]}</span>
                </div>
              ))}
            </div>

            {/* Status summary chips (read-only mode only) */}
            {gameStarted && (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
                {[
                  { key: 'available', label: 'Disponíveis', c: statusCounts.available, dot: 'rgba(255,255,255,0.35)' },
                  { key: 'main',      label: 'Titulares',   c: statusCounts.main,      dot: '#22c55e' },
                  { key: 'reserve',   label: 'Reservas',    c: statusCounts.reserve,   dot: '#3b82f6' },
                  { key: 'hand',      label: 'Na Mão',      c: statusCounts.hand,      dot: '#eab308' },
                  { key: 'drawn',     label: 'Sorteados',   c: statusCounts.drawn,     dot: '#f97316' },
                  statusCounts.saved > 0 ? { key: 'saved', label: 'Fechados', c: statusCounts.saved, dot: '#a855f7' } : null,
                ].filter(Boolean).map(s => (
                  <div key={s.key} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.06)', border: `1px solid ${s.dot}44`, borderRadius: 8, padding: '6px 12px' }}>
                    <span className="ftb-sdot" style={{ background: s.dot }} />
                    <span style={{ fontWeight: 800, fontSize: '1rem', color: s.dot, lineHeight: 1 }}>{s.c}</span>
                    <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.50)' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Search + Add */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'center' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.38)', pointerEvents: 'none' }} />
                <input className="ftb-glass-input" style={{ paddingLeft: 30 }} placeholder="Buscar jogador ou time..." value={search} onChange={e => setSearch(e.target.value)} />
              </div>
              {!gameStarted && (
                <button onClick={() => setShowAdd(!showAdd)}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 8, padding: '8px 16px', color: '#fff', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', whiteSpace: 'nowrap', transition: 'all 0.15s' }}>
                  <Plus size={14} /> Adicionar
                </button>
              )}
            </div>

            {/* Position filter */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
              <button className={`ftb-pill ${filterPos === 'ALL' ? 'active' : ''}`} onClick={() => setFilterPos('ALL')}>Todas</button>
              {POSITIONS.map(pos => (
                <button key={pos} className={`ftb-pill ${filterPos === pos ? 'active' : ''}`} onClick={() => setFilterPos(pos)}>{POSITION_LABELS[pos]}</button>
              ))}
            </div>

            {/* Team filter */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: gameStarted ? 8 : 18, overflowX: 'auto', paddingBottom: 4 }}>
              {allTeams.map(t => (
                <button key={t} className={`ftb-pill ${filterTeam === t ? 'active' : ''}`} onClick={() => setFilterTeam(t)}>
                  {t === 'ALL' ? 'Todos os Times' : t}
                </button>
              ))}
            </div>

            {/* Status filter (read-only only) */}
            {gameStarted && (
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
                {[
                  { key: 'ALL',       label: 'Todos' },
                  { key: 'available', label: '🃏 Disponíveis' },
                  { key: 'main',      label: '⚽ Titulares' },
                  { key: 'reserve',   label: '🪑 Reservas' },
                  { key: 'hand',      label: '✋ Na Mão' },
                  { key: 'drawn',     label: '🎲 Sorteados' },
                  statusCounts.saved > 0 ? { key: 'saved', label: '🏆 Times Fechados' } : null,
                ].filter(Boolean).map(s => (
                  <button key={s.key} className={`ftb-pill ${filterStatus === s.key ? 'active' : ''}`} onClick={() => setFilterStatus(s.key)}>
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {/* Add Player form */}
            {showAdd && !gameStarted && (
              <div className="ftb-add-form">
                <div className="ftb-section-lbl" style={{ marginBottom: 12 }}>Novo Jogador</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 88px 1fr 68px', gap: 8, marginBottom: 10 }}>
                  <input className="ftb-glass-input" placeholder="Nome *" value={newP.name} onChange={e => setNewP({ ...newP, name: e.target.value })} />
                  <select className="ftb-glass-input" value={newP.position} onChange={e => setNewP({ ...newP, position: e.target.value })}>
                    {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  <input className="ftb-glass-input" placeholder="Time / Edição *" value={newP.team} onChange={e => setNewP({ ...newP, team: e.target.value })} />
                  <input className="ftb-glass-input" type="number" placeholder="Nº *" min="1" max="99" value={newP.number} onChange={e => setNewP({ ...newP, number: e.target.value })} />
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={doAdd} style={{ background: 'rgba(34,197,94,0.22)', border: '1px solid rgba(34,197,94,0.40)', color: '#86efac', borderRadius: 7, padding: '8px 20px', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem' }}>✓ Confirmar</button>
                  <button onClick={() => setShowAdd(false)} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.65)', borderRadius: 7, padding: '8px 20px', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem' }}>Cancelar</button>
                </div>
              </div>
            )}

            {/* Player list */}
            {POSITIONS.filter(pos => grouped[pos]).map(pos => (
              <div key={pos} style={{ marginBottom: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span className="ftb-pbadge" style={{ background: POSITION_HEX[pos] }}>{pos}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: 1, textTransform: 'uppercase' }}>{POSITION_LABELS[pos]}</span>
                  <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.30)' }}>— {grouped[pos].length}</span>
                </div>

                {grouped[pos].map(player =>
                  (!gameStarted && editingId === player.id) ? (
                    // Inline edit row
                    <div key={player.id} className="ftb-erow">
                      <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr 1fr 62px auto', gap: 8, alignItems: 'center' }}>
                        <select className="ftb-glass-input" value={editForm.position} onChange={e => setEditForm({ ...editForm, position: e.target.value })}>
                          {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                        <input className="ftb-glass-input" value={editForm.name} onChange={e => setEditForm({ ...editForm, name: e.target.value })} placeholder="Nome" />
                        <input className="ftb-glass-input" value={editForm.team} onChange={e => setEditForm({ ...editForm, team: e.target.value })} placeholder="Time" />
                        <input className="ftb-glass-input" type="number" value={editForm.number} onChange={e => setEditForm({ ...editForm, number: e.target.value })} placeholder="Nº" min="1" />
                        <div style={{ display: 'flex', gap: 4 }}>
                          <button className="ftb-ibtn save" onClick={() => saveEdit(player.id)} title="Salvar"><CheckCircle size={15} /></button>
                          <button className="ftb-ibtn" onClick={() => setEditingId(null)} title="Cancelar"><X size={15} /></button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Normal row
                    <div key={player.id} className="ftb-prow">
                      <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.38)', fontSize: '0.85rem', textAlign: 'right' }}>
                        #{player.number}
                      </span>
                      <span className="ftb-pbadge" style={{ background: POSITION_HEX[player.position] }}>
                        {player.position}
                      </span>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{player.name}</div>
                        <div style={{ fontSize: '0.70rem', color: 'rgba(255,255,255,0.42)', fontStyle: 'italic' }}>{player.team}</div>
                      </div>

                      {/* Edit mode: edit + delete */}
                      {!gameStarted && (
                        <div style={{ display: 'flex', gap: 4 }}>
                          <button className="ftb-ibtn" onClick={() => startEdit(player)} title="Editar"><Edit3 size={13} /></button>
                          <button className="ftb-ibtn danger" onClick={() => setConfirmDel(player)} title="Remover"><Trash2 size={13} /></button>
                        </div>
                      )}

                      {/* Read-only mode: status */}
                      {gameStarted && (
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end' }}>
                            <span className="ftb-sdot" style={{ background: player.status.dot }} />
                            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: player.status.color }}>{player.status.label}</span>
                          </div>
                          {player.status.team && (
                            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.40)', fontStyle: 'italic', marginTop: 2 }}>{player.status.team}</div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            ))}

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.38)', padding: '40px 0', fontStyle: 'italic' }}>
                Nenhum jogador encontrado.
              </div>
            )}

            {/* Footer note in edit mode */}
            {!gameStarted && (
              <div style={{ marginTop: 14, padding: '11px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 8 }}>
                <p style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.45)', margin: 0, textAlign: 'center' }}>
                  ⚠️ Após rolar o dado pela primeira vez, o baralho não poderá mais ser editado
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function FootballTeamBuilder() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [gameStarted, setGameStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formation, setFormation] = useState("4-4-2");
  const [diceResult, setDiceResult] = useState(null);
  const [drawnPlayers, setDrawnPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [discardedThisRound, setDiscardedThisRound] = useState([]);
  const [mainTeam, setMainTeam] = useState([]);
  const [reserves, setReserves] = useState([]);
  const [isRolling, setIsRolling] = useState(false);
  const [hideUnavailablePositions, setHideUnavailablePositions] = useState(true);
  const [hideCompletedPositions, setHideCompletedPositions] = useState(false);
  const [completedTeams, setCompletedTeams] = useState([]);
  const [showCompletedTeams, setShowCompletedTeams] = useState(false);

  const countPositions = (team) =>
    team.reduce((acc, p) => { acc[p.position] = (acc[p.position] || 0) + 1; return acc; }, {});

  const canAddToMain = (player) => {
    const counts = countPositions(mainTeam);
    return (counts[player.position] || 0) < FORMATIONS[formation][player.position];
  };

  const canAddToReserves = (player) => {
    const counts = countPositions(reserves);
    const maxRes = getMaxReservesForFormation(formation);
    return (counts[player.position] || 0) < (maxRes[player.position] || 0);
  };

  const isPositionAvailable = (pos) => FORMATIONS[formation][pos] > 0;

  const isPositionComplete = (pos) => {
    const mc = countPositions(mainTeam);
    const rc = countPositions(reserves);
    const maxRes = getMaxReservesForFormation(formation);
    return (mc[pos] || 0) >= FORMATIONS[formation][pos] &&
           (rc[pos] || 0) >= (maxRes[pos] || 0);
  };

  const shouldHidePlayer = (player) => {
    if (hideUnavailablePositions && !isPositionAvailable(player.position)) return true;
    if (hideCompletedPositions && isPositionComplete(player.position)) return true;
    return false;
  };

  const maxReservesTotal = Object.values(getMaxReservesForFormation(formation)).reduce((a, b) => a + b, 0);
  const isTeamComplete = mainTeam.length === 11 && reserves.length === maxReservesTotal;

  const rollDice = () => {
    if (drawnPlayers.length > 0) { alert("Você precisa escolher o destino de todos os jogadores sorteados antes de rolar novamente!"); return; }
    if (!gameStarted) setGameStarted(true);
    setIsRolling(true);
    let count = 0;
    const iv = setInterval(() => {
      setDiceResult(Math.floor(Math.random() * 6) + 1);
      if (++count > 10) {
        clearInterval(iv);
        const final = Math.floor(Math.random() * 6) + 1;
        setDiceResult(final);
        drawPlayers(final);
        setIsRolling(false);
      }
    }, 100);
  };

  const drawPlayers = (num) => {
    const savedIds = new Set(completedTeams.flatMap(t => [...t.mainTeam, ...t.reserves].map(p => p.id)));
    const used = [...selectedPlayers, ...mainTeam, ...reserves, ...discardedThisRound];
    let available = players.filter(p => !savedIds.has(p.id) && !used.find(s => s.id === p.id) && !shouldHidePlayer(p));
    if (available.length === 0) {
      setDiscardedThisRound([]);
      let fresh = players.filter(p => !savedIds.has(p.id) && !mainTeam.find(s=>s.id===p.id) && !reserves.find(s=>s.id===p.id) && !selectedPlayers.find(s=>s.id===p.id) && !shouldHidePlayer(p));
      alert("A pilha acabou! Embaralhando novamente.");
      setDrawnPlayers([...fresh].sort(() => Math.random() - 0.5).slice(0, Math.min(num, fresh.length)));
    } else {
      setDrawnPlayers([...available].sort(() => Math.random() - 0.5).slice(0, Math.min(num, available.length)));
    }
  };

  const selectPlayer  = (p) => { setSelectedPlayers([...selectedPlayers, p]); setDrawnPlayers(drawnPlayers.filter(x => x.id !== p.id)); };
  const discardPlayer = (p) => { setDiscardedThisRound([...discardedThisRound, p]); setDrawnPlayers(drawnPlayers.filter(x => x.id !== p.id)); };
  const moveToMainTeam = (p) => {
    if (!canAddToMain(p)) { alert(`A formação ${formation} já tem o máximo de ${POSITION_LABELS[p.position]}(s)!`); return; }
    setMainTeam([...mainTeam, p]); setSelectedPlayers(selectedPlayers.filter(x => x.id !== p.id));
  };
  const moveToReserves = (p) => {
    if (!canAddToReserves(p)) { alert(`Banco de reservas para ${POSITION_LABELS[p.position]} já está cheio!`); return; }
    setReserves([...reserves, p]); setSelectedPlayers(selectedPlayers.filter(x => x.id !== p.id));
  };
  const removeFromSelected = (p) => { setSelectedPlayers(selectedPlayers.filter(x => x.id !== p.id)); setDiscardedThisRound([...discardedThisRound, p]); };
  const removeFromMain     = (p) => { setMainTeam(mainTeam.filter(x => x.id !== p.id)); setSelectedPlayers([...selectedPlayers, p]); };
  const removeFromReserves = (p) => { setReserves(reserves.filter(x => x.id !== p.id)); setSelectedPlayers([...selectedPlayers, p]); };

  const reset = () => {
    setFormation("4-4-2"); setDiceResult(null); setDrawnPlayers([]);
    setSelectedPlayers([]); setDiscardedThisRound([]); setMainTeam([]); setReserves([]);
  };

  const resetAll = () => {
    if (confirm("Tem certeza? Todos os times criados serão perdidos.")) {
      reset(); setCompletedTeams([]); setGameStarted(false);
    }
  };

  const saveCurrentTeam = () => {
    if (mainTeam.length === 0) { alert("Não há time para salvar!"); return; }
    const teamName = prompt("Nome do time:");
    const finalName = teamName?.trim() || `Time ${completedTeams.length + 1}`;
    setCompletedTeams([...completedTeams, { id: Date.now(), name: finalName, formation, mainTeam: [...mainTeam], reserves: [...reserves], createdAt: new Date().toLocaleString('pt-BR') }]);
    setMainTeam([]); setReserves([]); setSelectedPlayers([]); setDiscardedThisRound([]);
    setFormation("4-4-2"); setDiceResult(null); setDrawnPlayers([]);
    alert(`Time "${finalName}" salvo!`);
  };

  const getPositionStatus = () => {
    const mainCounts = countPositions(mainTeam);
    const reserveCounts = countPositions(reserves);
    const maxRes = getMaxReservesForFormation(formation);
    const savedIds = new Set(completedTeams.flatMap(t => [...t.mainTeam, ...t.reserves].map(p => p.id)));
    const used = [...selectedPlayers, ...mainTeam, ...reserves, ...discardedThisRound];
    const deckCounts = countPositions(players.filter(p => !savedIds.has(p.id) && !used.find(s => s.id === p.id) && !shouldHidePlayer(p)));
    return Object.keys(POSITION_LABELS).map(pos => ({
      position: pos, label: POSITION_LABELS[pos],
      main: mainCounts[pos] || 0, maxMain: FORMATIONS[formation][pos],
      reserves: reserveCounts[pos] || 0, maxReserves: maxRes[pos],
      inDeck: deckCounts[pos] || 0, isAvailable: isPositionAvailable(pos)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-900 p-8">

      {/* Single unified modal */}
      {showModal && (
        <PlayerRosterModal
          players={players}
          setPlayers={setPlayers}
          gameStarted={gameStarted}
          mainTeam={mainTeam}
          reserves={reserves}
          selectedPlayers={selectedPlayers}
          drawnPlayers={drawnPlayers}
          completedTeams={completedTeams}
          onClose={() => setShowModal(false)}
        />
      )}

      <div className="max-w-7xl mx-auto">

        {/* Title row */}
        <div className="flex items-center justify-center gap-4 mb-2 flex-wrap">
          <h1 className="text-5xl font-bold text-center text-white drop-shadow-lg">
            ⚽ Montador de Time de Futebol
          </h1>
          {/* The one button — always visible */}
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-5 rounded-lg transition-all border border-white/30 text-sm"
          >
            {gameStarted ? <><Eye size={15} /> Ver Jogadores</> : <><Edit3 size={15} /> Editar Baralho</>}
          </button>
        </div>

        <p className="text-center text-white/80 mb-8 text-lg">
          Monte seu time com 11 titulares + {maxReservesTotal} reservas
          {!gameStarted && (
            <span className="ml-2 text-yellow-300 text-sm">• Baralho editável até o primeiro sorteio</span>
          )}
        </p>

        {/* Formação */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">📐 Escolha a Formação Tática</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {Object.keys(FORMATIONS).map(form => (
              <button key={form}
                onClick={() => mainTeam.length === 0 ? setFormation(form) : alert("Não pode mudar a formação com jogadores já escalados!")}
                className={`px-6 py-3 rounded-lg font-bold text-lg transition-all ${formation === form ? 'bg-yellow-400 text-green-900 scale-110' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                {form}
              </button>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/20">
            <h3 className="text-lg font-bold text-white mb-3 text-center">⚙️ Configurações do Deck</h3>
            <div className="flex flex-col gap-3 max-w-2xl mx-auto">
              <label className="flex items-center gap-3 bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                <input type="checkbox" checked={hideUnavailablePositions} onChange={e => setHideUnavailablePositions(e.target.checked)} className="w-5 h-5 cursor-pointer" />
                <span className="text-white">
                  <strong>Esconder posições não disponíveis na formação</strong>
                  <span className="text-white/70 text-sm block">(Ex: Laterais não aparecem no 3-5-2 e 3-4-3)</span>
                </span>
              </label>
              <label className="flex items-center gap-3 bg-white/10 p-3 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                <input type="checkbox" checked={hideCompletedPositions} onChange={e => setHideCompletedPositions(e.target.checked)} className="w-5 h-5 cursor-pointer" />
                <span className="text-white">
                  <strong>Esconder posições já completadas</strong>
                  <span className="text-white/70 text-sm block">(Jogadores de posições cheias não aparecem mais)</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Status por Posição */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4 text-center">📊 Status por Posição ({formation})</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {getPositionStatus().map(s => (
              <div key={s.position} className={`bg-gradient-to-br ${POSITION_COLORS[s.position]} rounded-lg p-3 text-white text-center ${!s.isAvailable ? 'opacity-40' : ''}`}>
                <div className="font-bold text-sm mb-1">{s.label}{!s.isAvailable && ' ❌'}</div>
                <div className="text-2xl font-bold">
                  <span className={s.main === s.maxMain ? 'text-green-300' : ''}>{s.main}</span>/{s.maxMain}
                </div>
                <div className="text-xs opacity-80 mt-1">
                  Reservas: <span className={s.reserves === s.maxReserves ? 'text-green-300' : ''}>{s.reserves}</span>/{s.maxReserves}
                </div>
                {s.isAvailable && (
                  <div className="text-xs opacity-70 mt-1 bg-black/20 rounded px-2 py-1">🃏 Deck: {s.inDeck}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Status Geral */}
        <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-8 text-center">
          <div className="flex justify-center gap-8 text-white font-bold text-xl flex-wrap">
            <div className={mainTeam.length === 11 ? 'text-green-300' : ''}>👕 Titulares: {mainTeam.length}/11</div>
            <div className={reserves.length === maxReservesTotal ? 'text-green-300' : ''}>🪑 Reservas: {reserves.length}/{maxReservesTotal}</div>
            <div className="text-blue-300">📋 Selecionados: {selectedPlayers.length}</div>
            <div className="text-yellow-300">🏆 Times Criados: {completedTeams.length}</div>
          </div>
          {isTeamComplete && (
            <div className="mt-4">
              <div className="text-2xl text-yellow-300 font-bold animate-pulse mb-3">🎉 TIME COMPLETO! 🎉</div>
              <button onClick={saveCurrentTeam} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                💾 Salvar Time e Criar Outro
              </button>
            </div>
          )}
        </div>

        {/* Dado */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-center">
          <button onClick={rollDice} disabled={isRolling || drawnPlayers.length > 0 || isTeamComplete}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 disabled:cursor-not-allowed shadow-lg">
            {isRolling ? '🎲 Rolando...' : drawnPlayers.length > 0 ? '⚠️ Escolha os jogadores primeiro' : '🎲 Rolar Dado D6'}
          </button>
          {diceResult && (
            <div className="mt-6">
              <div className="inline-flex items-center justify-center bg-white text-green-900 text-6xl font-bold w-24 h-24 rounded-lg shadow-2xl">
                {diceResult}
              </div>
              <p className="text-white text-xl mt-4">Você sorteou {diceResult} jogador(es)!</p>
            </div>
          )}
        </div>

        {/* Sorteados */}
        {drawnPlayers.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shuffle size={28} /> Jogadores Sorteados — Selecionar ou Descartar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {drawnPlayers.map(player => (
                <div key={player.id} className={`bg-gradient-to-br ${POSITION_COLORS[player.position]} rounded-lg p-4 shadow-xl border-2 border-white`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{player.name}</h3>
                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full font-bold text-sm">#{player.number}</span>
                  </div>
                  <p className="text-white/90 font-semibold mb-1">{POSITION_LABELS[player.position]}</p>
                  <p className="text-white/80 text-sm mb-4">🏟️ {player.team}</p>
                  <div className="flex gap-2">
                    <button onClick={() => selectPlayer(player)} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">✓ Selecionar</button>
                    <button onClick={() => discardPlayer(player)} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">✗ Descartar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selecionados */}
        {selectedPlayers.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">📋 Jogadores Selecionados — Definir Posição</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedPlayers.map(player => {
                const canBeMain = canAddToMain(player);
                const canBeReserve = canAddToReserves(player);
                return (
                  <div key={player.id} className={`bg-gradient-to-br ${POSITION_COLORS[player.position]} rounded-lg p-4 shadow-xl border-2 border-blue-300`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{player.name}</h3>
                      <span className="bg-white text-gray-900 px-3 py-1 rounded-full font-bold text-sm">#{player.number}</span>
                    </div>
                    <p className="text-white/90 font-semibold mb-1">{POSITION_LABELS[player.position]}</p>
                    <p className="text-white/80 text-sm mb-4">🏟️ {player.team}</p>
                    <div className="flex flex-col gap-2">
                      <button onClick={() => moveToMainTeam(player)} disabled={!canBeMain}
                        className="bg-green-700 hover:bg-green-800 disabled:bg-gray-500 disabled:opacity-50 text-white font-bold py-2 px-4 rounded transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        <ArrowDown size={16} /> Titular {!canBeMain && '(Cheio)'}
                      </button>
                      <button onClick={() => moveToReserves(player)} disabled={!canBeReserve}
                        className="bg-blue-700 hover:bg-blue-800 disabled:bg-gray-500 disabled:opacity-50 text-white font-bold py-2 px-4 rounded transition-colors disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        <ArrowDown size={16} /> Reserva {!canBeReserve && '(Cheio)'}
                      </button>
                      <button onClick={() => removeFromSelected(player)}
                        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2">
                        <Trash2 size={16} /> Descartar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Titular */}
        {mainTeam.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Users size={28} /> Time Titular ({mainTeam.length}/11) — {formation}
            </h2>
            {['GOL','LAT','ZAG','VOL','MEI','ATA'].map(pos => {
              const inPos = mainTeam.filter(p => p.position === pos);
              if (!inPos.length) return null;
              return (
                <div key={pos} className="mb-4">
                  <h3 className="text-white font-bold mb-2 text-lg">{POSITION_LABELS[pos]}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {inPos.map(player => (
                      <div key={player.id} className={`bg-gradient-to-br ${POSITION_COLORS[player.position]} rounded-lg p-3 shadow-lg border border-white/50`}>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-sm font-bold text-white">{player.name}</h3>
                          <span className="bg-white text-gray-900 px-2 py-0.5 rounded text-xs font-bold">#{player.number}</span>
                        </div>
                        <p className="text-white/90 text-xs font-semibold">{POSITION_LABELS[player.position]}</p>
                        <p className="text-white/70 text-xs mb-2">{player.team}</p>
                        <button onClick={() => removeFromMain(player)} className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs py-1 px-2 rounded transition-colors flex items-center justify-center gap-1">
                          <ArrowUp size={12} /> Voltar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Reservas */}
        {reserves.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">🪑 Banco de Reservas ({reserves.length}/{maxReservesTotal})</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {reserves.map(player => (
                <div key={player.id} className={`bg-gradient-to-br ${POSITION_COLORS[player.position]} rounded-lg p-3 shadow-lg border border-white/50 opacity-80`}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-white">{player.name}</h3>
                    <span className="bg-white text-gray-900 px-2 py-0.5 rounded text-xs font-bold">#{player.number}</span>
                  </div>
                  <p className="text-white/90 text-xs font-semibold">{POSITION_LABELS[player.position]}</p>
                  <p className="text-white/70 text-xs mb-2">{player.team}</p>
                  <button onClick={() => removeFromReserves(player)} className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs py-1 px-2 rounded transition-colors flex items-center justify-center gap-1">
                    <ArrowUp size={12} /> Voltar
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ações */}
        {(mainTeam.length > 0 || reserves.length > 0 || selectedPlayers.length > 0 || completedTeams.length > 0) && (
          <div className="text-center">
            <div className="flex justify-center gap-4 flex-wrap">
              {completedTeams.length > 0 && (
                <button onClick={() => setShowCompletedTeams(!showCompletedTeams)}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  {showCompletedTeams ? '👁️ Ocultar Times' : '🏆 Ver Times Criados'} ({completedTeams.length})
                </button>
              )}
              {(mainTeam.length > 0 || reserves.length > 0 || selectedPlayers.length > 0) && (
                <button onClick={reset} className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  🔄 Limpar Time Atual
                </button>
              )}
              <button onClick={resetAll} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                🗑️ Reiniciar TUDO
              </button>
            </div>
          </div>
        )}

        {/* Times Criados */}
        {showCompletedTeams && completedTeams.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 mt-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">🏆 Times Criados ({completedTeams.length})</h2>
            <div className="space-y-6">
              {completedTeams.map(team => (
                <div key={team.id} className="bg-white/20 rounded-xl p-6 border-2 border-yellow-400">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-300">{team.name}</h3>
                      <p className="text-white/70 text-sm">Formação: {team.formation} | Criado em: {team.createdAt}</p>
                    </div>
                    <button onClick={() => { if(confirm(`Remover "${team.name}"?`)) setCompletedTeams(completedTeams.filter(t => t.id !== team.id)); }}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                      🗑️ Remover
                    </button>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-white mb-3">👕 Titulares ({team.mainTeam.length}/11)</h4>
                    {['GOL','LAT','ZAG','VOL','MEI','ATA'].map(pos => {
                      const inPos = team.mainTeam.filter(p => p.position === pos);
                      if (!inPos.length) return null;
                      return (
                        <div key={pos} className="mb-2">
                          <h5 className="text-white/80 font-semibold text-sm mb-1">{POSITION_LABELS[pos]}:</h5>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {inPos.map(p => (
                              <div key={p.id} className={`bg-gradient-to-br ${POSITION_COLORS[p.position]} rounded p-2 text-xs`}>
                                <span className="text-white font-bold">{p.name}</span>
                                <span className="text-white/80 ml-1">#{p.number}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {team.reserves.length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">🪑 Reservas ({team.reserves.length})</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        {team.reserves.map(p => (
                          <div key={p.id} className={`bg-gradient-to-br ${POSITION_COLORS[p.position]} rounded p-2 text-xs opacity-80`}>
                            <span className="text-white font-bold">{p.name}</span>
                            <span className="text-white/80 ml-1">#{p.number}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
