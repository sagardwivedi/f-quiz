import { Option } from "@/lib/types/quizType";
import { Label } from "./ui/label";

interface OptionsProps {
  option: Option;
  onSelectAnswer: (optionId: string) => void;
  selectedAnswer: string;
}

export const Options = ({
  option,
  onSelectAnswer,
  selectedAnswer,
}: OptionsProps) => {
  const handleSelect = () => {
    onSelectAnswer(option.id);
  };

  return (
    <Label
      className={`flex cursor-pointer items-center gap-5 has-[:checked]:bg-blue-500/50 has-[:checked]:ring-blue-500 has-[:checked]:ring-1 bg-secondary p-3 rounded-lg ${
        selectedAnswer === option.id ? "bg-blue-200" : ""
      }`}
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
        checked={selectedAnswer === option.id}
        onChange={handleSelect}
      />
    </Label>
  );
};
