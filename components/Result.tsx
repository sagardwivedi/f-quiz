import { useQuizStore } from "@/lib/store/use-question-store";
import { Question } from "@/lib/types/quizType";
import FrontendQuizHeader from "./QuizHeader";
import { Button } from "./ui/button";

interface ResultPageProps {
  questions: Question[];
  selectedAnswers: string[];
}

export const ResultPage = ({ questions, selectedAnswers }: ResultPageProps) => {
  let correctAnswers = 0;
  const { setCurrentQuestionIndex, resetQuiz } = useQuizStore();

  questions.forEach((question, index) => {
    const selectedAnswer = selectedAnswers[index];
    if (selectedAnswer === question.correctAnswer) {
      correctAnswers++;
    }
  });

  const handleClick = () => {
    setCurrentQuestionIndex(0);
    resetQuiz();
  };

  return (
    <section className="w-full mb-5 flex flex-col md:flex-row gap-10">
      <div className="">
        <FrontendQuizHeader
          firstPart="Quiz Completed"
          secondPart="You scored..."
        />
      </div>
      <div className="w-full">
        <div className="bg-secondary md:w-full h-[400px] rounded-md flex flex-col justify-center items-center">
          <p className="text-8xl mb-5 text-primary">{correctAnswers}</p>
          <span className="text-gray-500">out of {questions.length}</span>
        </div>
        <Button onClick={handleClick} className="mt-5 w-full" size={"lg"}>
          Play Again
        </Button>
      </div>
    </section>
  );
};
