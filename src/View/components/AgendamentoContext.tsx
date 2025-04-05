import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AgendamentoContextType {
  availableTimes: string[];
  addTime: (time: string) => void;
  removeTime: (time: string) => void;
}

const AgendamentoContext = createContext<AgendamentoContextType | undefined>(undefined);

export function AgendamentoProvider({ children }: { children: ReactNode }) {
  const [availableTimes, setAvailableTimes] = useState<string[]>(() => {
    const savedTimes = localStorage.getItem("availableTimes");
    return savedTimes ? JSON.parse(savedTimes) : ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];
  });

  useEffect(() => {
    localStorage.setItem("availableTimes", JSON.stringify(availableTimes));
  }, [availableTimes]);

  const addTime = (time: string) => {
    if (!availableTimes.includes(time)) {
      setAvailableTimes([...availableTimes, time].sort());
    }
  };

  const removeTime = (time: string) => {
    setAvailableTimes(availableTimes.filter(t => t !== time));
  };

  return (
    <AgendamentoContext.Provider value={{ availableTimes, addTime, removeTime }}>
      {children}
    </AgendamentoContext.Provider>
  );
}

export function useAgendamento() {
  const context = useContext(AgendamentoContext);
  if (!context) {
    throw new Error("useAgendamento deve ser usado dentro de um AgendamentoProvider");
  }
  return context;
}
