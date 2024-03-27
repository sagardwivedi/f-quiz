interface FrontendQuizHeaderProps {
  firstPart: string;
  secondPart: string;
}

const FrontendQuizHeader: React.FC<FrontendQuizHeaderProps> = ({
  firstPart,
  secondPart,
}) => {
  return (
    <h1 className="md:text-5xl text-4xl leading-tight">
      <span className="font-extralight">{firstPart}</span>{" "}
      <span className="font-bold text-primary">{secondPart}</span>
    </h1>
  );
};

export default FrontendQuizHeader;
