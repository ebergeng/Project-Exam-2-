import { create } from "zustand";

// Hjelpefunksjon for å hente managerState og konvertere til tekst
const getManagerState = () => {
  const managerState = localStorage.getItem("managerState");
  return managerState === "false" ? "Customer" : "Manager";
};

// Definer en butikk som synkroniserer med localStorage
const useManagerStateStore = create((set) => ({
  managerState: getManagerState(),
  setManagerState: () => {
    // Få den nåværende verdien fra localStorage, snu den, og lagre den oppdaterte verdien
    const currentState = localStorage.getItem("managerState") === "true";
    const newState = !currentState; // Snu tilstanden
    const newStateText = newState ? "Manager" : "Customer"; // Konverter til tekst

    // Oppdater localStorage og butikkens tilstand
    localStorage.setItem("managerState", newState.toString());
    set({ managerState: newStateText });
  },
}));

export default useManagerStateStore;
