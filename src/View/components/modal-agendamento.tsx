import { useState, useEffect } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

interface AgendamentoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  servico: string;
}

export default function AgendamentoModal({ isOpen, onRequestClose, servico }: AgendamentoModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      if (!selectedDate) return;
      const querySnapshot = await getDocs(collection(db, "schedules"));
      const times = querySnapshot.docs
        .map(doc => doc.data())
        .filter(schedule => schedule.date === selectedDate.toISOString().split("T")[0])
        .map(schedule => schedule.time);
      setAvailableTimes(times);
    };

    fetchAvailableTimes();
  }, [selectedDate]);

  const generateWhatsappLink = () => {
    if (!selectedDate || !selectedTime) return;
    const formattedDate = selectedDate.toLocaleDateString("pt-BR");
    const whatsappMessage = `Olá! Gostaria de agendar o serviço de ${servico} para o dia ${formattedDate}, horário: ${selectedTime}`;
    const phoneNumber = "24992737045";
    return `https://wa.me/+55${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Escolha a data e horário</h2>
      <DatePicker selected={selectedDate} onChange={setSelectedDate} dateFormat="dd/MM/yyyy" minDate={new Date()} />
      <div>
        {availableTimes.length > 0 ? (
          availableTimes.map(time => (
            <button key={time} onClick={() => setSelectedTime(time)} className={selectedTime === time ? "selected" : ""}>
              {time}
            </button>
          ))
        ) : (
          <p>Sem horários disponíveis</p>
        )}
      </div>
      <button onClick={() => window.open(generateWhatsappLink(), "_blank")} disabled={!selectedDate || !selectedTime}>
        Confirmar e Agendar
      </button>
    </Modal>
  );
}
