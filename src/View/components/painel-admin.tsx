import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

interface Schedule {
  id: string;
  professional: string;
  date: string;
  time: string;
}

export default function PainelAdmin() {
  const [professional, setProfessional] = useState("Jessica");
  const [dates, setDates] = useState<string[]>([]);
  const [times, setTimes] = useState<string[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tab, setTab] = useState("Jessica");

  const availableTimes = [
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
    "19:00", "20:00", "21:00", "22:00"
  ];

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    const querySnapshot = await getDocs(collection(db, "schedules"));
    let data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Schedule));
    
    // Ordena pela data e hora
    data = data.sort((a, b) => {
      const dateTimeA = new Date(`${a.date}T${a.time}`);
      const dateTimeB = new Date(`${b.date}T${b.time}`);
      return dateTimeA.getTime() - dateTimeB.getTime();
    });

    setSchedules(data);
  };

  const handleTimeSelect = (time: string) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter(t => t !== time));
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  const generateDates = () => {
    if (!startDate || !endDate) {
      alert("Selecione as duas datas!");
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      alert("A data inicial não pode ser depois da final!");
      return;
    }

    const tempDates: string[] = [];
    const currentDate = new Date(start);

    while (currentDate <= end) {
      const formattedDate = currentDate.toISOString().split("T")[0];
      tempDates.push(formattedDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setDates(tempDates);
  };

  const removeDate = (date: string) => {
    setDates(dates.filter(d => d !== date));
  };

  const addSchedules = async () => {
    if (dates.length === 0 || selectedTimes.length === 0) {
      alert("Selecione ao menos uma data e horário!");
      return;
    }

    try {
      const batch = dates.flatMap((date) =>
        selectedTimes.map(async (time) => {
          await addDoc(collection(db, "schedules"), {
            professional,
            date,
            time,
          });
        })
      );

      await Promise.all(batch);

      setDates([]);
      setSelectedTimes([]);
      setStartDate("");
      setEndDate("");

      await fetchSchedules();

      alert("Horários adicionados com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar horários:", error);
      alert("Erro ao adicionar horários. Tente novamente.");
    }
  };

  const removeSchedule = async (id: string) => {
    const confirmed = window.confirm("Tem certeza que deseja excluir este horário?");
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "schedules", id));
      setSchedules(prev => prev.filter(schedule => schedule.id !== id));
      alert("Horário removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover horário:", error);
      alert("Erro ao remover horário. Tente novamente.");
    }
  };

  const filteredSchedules = schedules.filter(s => s.professional === tab);

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Painel de Horários</h2>

      {/* Tabs de profissionais */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
        {["Jessica", "Beatriz"].map((prof) => (
          <button
            key={prof}
            onClick={() => setTab(prof)}
            style={{
              padding: "10px 20px",
              backgroundColor: tab === prof ? "#4CAF50" : "#e0e0e0",
              color: tab === prof ? "#fff" : "#333",
              border: "none",
              borderRadius: "20px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              cursor: "pointer",
              fontWeight: "bold",
              minWidth: "120px"
            }}
          >
            {prof} ({schedules.filter(s => s.professional === prof).length})
          </button>
        ))}
      </div>

      {/* Inputs de datas */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button
          onClick={generateDates}
          style={{ padding: "10px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}
        >
          Gerar Datas
        </button>
      </div>

      {/* Datas geradas */}
      {dates.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h3>Datas Selecionadas:</h3>
          <ul>
            {dates.map((date, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {formatDate(date)}
                <button
                  onClick={() => removeDate(date)}
                  style={{ marginLeft: "10px", color: "red", border: "none", background: "none", cursor: "pointer" }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Seleção de horários */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Horários Disponíveis:</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {availableTimes.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              style={{
                padding: "10px",
                backgroundColor: selectedTimes.includes(time) ? "#4CAF50" : "#e0e0e0",
                color: selectedTimes.includes(time) ? "#fff" : "#333",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                minWidth: "70px",
                fontWeight: "bold"
              }}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Botão adicionar horários */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <button
          onClick={addSchedules}
          style={{ padding: "15px 30px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "10px", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}
        >
          Adicionar Horários
        </button>
      </div>

      {/* Tabela de horários */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
              <th style={{ padding: "10px", textAlign: "left" }}>Data</th>
              <th style={{ padding: "10px", textAlign: "left" }}>Horário</th>
              <th style={{ padding: "10px" }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchedules.map((schedule, index) => (
              <tr key={schedule.id} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
                <td style={{ padding: "10px" }}>{formatDate(schedule.date)}</td>
                <td style={{ padding: "10px" }}>{schedule.time}</td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  <button
                    onClick={() => removeSchedule(schedule.id)}
                    style={{ backgroundColor: "#f44336", color: "white", border: "none", padding: "8px 12px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
