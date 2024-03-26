"use client";

import { useQuestionStore } from "@/lib/store/use-question-store";
import { getQuestions } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

interface DisplayQuestionsProps {
  name: string;
}

export function DisplayQuestions({ name }: DisplayQuestionsProps) {
  const questions = getQuestions(name);
  const { currentQuestionIndex, setCurrentQuestionIndex } = useQuestionStore();

  if (!questions) {
    return notFound();
  }

  const question = questions[currentQuestionIndex];

  const handleClick = () => setCurrentQuestionIndex(currentQuestionIndex + 1);

  return (
    <section className="flex flex-col gap-10 md:flex-row">
      <div className="md:w-1/2">
        <p className="font-light ">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <h1 className="md:text-4xl mt-4 md:mt-8 text-xl font-semibold leading-tight">
          {question.question}
        </h1>
      </div>
      <div className="md:w-1/2 space-y-5">
        {question.options.map((option) => (
          <Options key={option.id} option={option} />
        ))}
        <Button onClick={handleClick} className="w-full" size={"lg"}>
          Submit answer
        </Button>
      </div>
    </section>
  );
}

interface OptionsProps {
  option: {
    id: string;
    answer: string;
  };
}

const Options = ({ option }: OptionsProps) => {
  return (
    <Label
      className="flex items-center gap-5 has-[:checked]:bg-blue-500/50 has-[:checked]:ring-blue-500 has-[:checked]:ring-1  bg-secondary p-3 rounded-lg"
      htmlFor={option.id}
    >
      <p className="dark:bg-primary-foreground bg-primary text-primary-foreground dark:text-secondary flex justify-center items-center size-9 rounded-sm">
        {option.id}
      </p>
      {option.answer}
      <input
        type="radio"
        hidden
        name="option"
        id={option.id}
        value={option.id}
      />
    </Label>
  );
};
