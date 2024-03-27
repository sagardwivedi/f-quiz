export interface Option {
  id: string;
  answer: string;
}

export interface Question {
  question: string;
  options: Option[];
  correctAnswer: string;
}
