import { create } from "zustand";

interface State {
  currentQuestionIndex: number;
  results: string[];
}

interface Actions {
  setCurrentQuestionIndex: (index: number) => void;
  answerQuestion: (result: string) => void;
}

// Initial state
const initialState: State = {
  currentQuestionIndex: 0,
  results: [],
};

// Create store
export const useQuestionStore = create<State & Actions>()((set) => ({
  ...initialState,
  setCurrentQuestionIndex: (index: number) =>
    set({ currentQuestionIndex: index }),
  answerQuestion: (result: string) =>
    set((state) => ({ results: [...state.results, result] })),
}));
