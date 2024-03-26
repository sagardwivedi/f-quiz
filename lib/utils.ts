import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Questions, SUBJECTS } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSubject(name: string) {
  const search = SUBJECTS.find(
    (subject) => subject.name.toLowerCase() === name
  );
  return search;
}

export function getQuestions(name: string) {
  const search = Questions.find((q) => q.name === name)?.questions;
  return search;
}
