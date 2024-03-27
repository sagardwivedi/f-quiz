"use client";

import { notFound } from "next/navigation";

import { Options } from "@/components/Options";
import { ResultPage } from "@/components/Result";
import { Show } from "@/components/Show";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuizStore } from "@/lib/store/use-question-store";
import { getQuestions } from "@/lib/utils";

interface DisplayQuestionsProps {
  name: string;
}

export function DisplayQuestions({ name }: DisplayQuestionsProps) {
  const questions = getQuestions(name);
  const {
    currentQuestionIndex,
    selectAnswer,
    selectedAnswers,
    setCurrentQuestionIndex,
  } = useQuizStore();

  if (!questions) {
    return notFound();
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSelectAnswer = (optionId: string) => {
    selectAnswer(currentQuestionIndex, optionId);
  };

  const question = questions[currentQuestionIndex];

  return (
    <section className="flex flex-col gap-10 md:flex-row">
      <Show>
        <Show.When isTrue={currentQuestionIndex < questions.length}>
          <div className="md:w-1/2 md:h-[500px]">
            <p className="font-light">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
            <div className="md:h-[280px] gap-5 flex flex-col justify-between">
              <h1 className="md:text-3xl mt-4 md:mt-8 text-xl font-semibold leading-tight">
                {question.question}
              </h1>
              <Progress
                value={(currentQuestionIndex + 1) * 10}
                max={questions.length * 10}
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-5">
            {question.options.map((option) => (
              <Options
                key={option.id}
                option={option}
                onSelectAnswer={handleSelectAnswer}
                selectedAnswer={selectedAnswers[currentQuestionIndex]}
              />
            ))}
            <Button onClick={handleNextQuestion} className="w-full" size={"lg"}>
              {currentQuestionIndex === questions.length - 1
                ? "Submit"
                : "Next"}
            </Button>
          </div>
        </Show.When>
        <Show.Else>
          <ResultPage questions={questions} selectedAnswers={selectedAnswers} />
        </Show.Else>
      </Show>
    </section>
  );
}
