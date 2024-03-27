import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Layout } from "@/components/Layout";
import { DisplayQuestions } from "@/components/Question";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { getQuestions, getSubject } from "@/lib/utils";

export default function TestPage({ params }: { params: { s: string } }) {
	const subject = getSubject(params.s);
	const questions = getQuestions(params.s);

	if (!subject || !questions) {
		return notFound();
	}

	return (
		<Layout>
			<section className="flex flex-row items-center justify-between">
				<div className="flex flex-row gap-4">
					<Button asChild size={"icon"} className="size-8" variant={"ghost"}>
						<Link href="/">
							<ArrowLeft />
						</Link>
					</Button>
					<div className="flex flex-row items-center gap-4">
						{subject.icon}
						<p>{subject.name}</p>
					</div>
				</div>
				<ModeToggle />
			</section>
			<DisplayQuestions questions={questions} />
		</Layout>
	);
}
