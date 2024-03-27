import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
	AccessibilityQuestions,
	CSSQuestions,
	HTMLQuestions,
	JavaScriptQuestions,
	SUBJECTS,
} from "./data";

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
  switch (name) {
    case "html":
      return HTMLQuestions;
    case "css":
      return CSSQuestions;
    case "javascript":
      return JavaScriptQuestions;
    case "accessibility":
      return AccessibilityQuestions;
    default:
      return null;
  }
}
