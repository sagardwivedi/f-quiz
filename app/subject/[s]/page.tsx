import { Layout, ModeToggle } from "@/components";
import { DisplayQuestions } from "@/components/Question";
import { getSubject } from "@/lib/utils";
import { notFound } from "next/navigation";

export default function TestPage({ params }: { params: { s: string } }) {
  const subject = getSubject(params.s);

  if (!subject) {
    return notFound();
  }

  return (
    <Layout>
      <section className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          {subject.icon}
          <p>{subject.name}</p>
        </div>
        <ModeToggle />
      </section>
      <DisplayQuestions name={params.s} />
    </Layout>
  );
}
