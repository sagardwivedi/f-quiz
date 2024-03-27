import { create } from "zustand";

interface State {
	currentQuestionIndex: number;
	selectedAnswers: string[];
	showResult: boolean;
}

interface Action {
	setCurrentQuestionIndex: (index: number) => void;
	selectAnswer: (index: number, answer: string) => void;
	resetQuiz: () => void;
	setShowResult: () => void;
}

type QuizStateAndAction = State & Action;

export const useQuizStore = create<QuizStateAndAction>()((set) => ({
	currentQuestionIndex: 0,
	selectedAnswers: [],
	showResult: false,
	setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
	selectAnswer: (index, answer) =>
		set((state) => ({
			selectedAnswers: [
				...state.selectedAnswers.slice(0, index),
				answer,
				...state.selectedAnswers.slice(index + 1),
			],
		})),
	resetQuiz: () => set({ currentQuestionIndex: 0, selectedAnswers: [] }),
	setShowResult: () => set((state) => ({ showResult: !state.showResult })),
}));
