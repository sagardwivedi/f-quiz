import Link from "next/link";

import { Layout } from "@/components/Layout";
import FrontendQuizHeader from "@/components/QuizHeader";
import { ModeToggle } from "@/components/mode-toggle";
import { SUBJECTS } from "@/lib/data";

export default function Home() {
	return (
		<Layout>
			<section className="flex justify-end">
				<ModeToggle />
			</section>
			<section className="flex flex-col gap-10 md:flex-row">
				<div className="md:w-1/2">
					<FrontendQuizHeader
						firstPart="Welcome to the"
						secondPart="Frontend Quiz!"
					/>
					<p className="font-light text-sm mt-4 md:mt-8">
						Pick a subject to get started.
					</p>
				</div>
				<div className="md:w-1/2 space-y-5">
					{SUBJECTS.map((subject) => (
						<Link
							key={subject.name}
							href={`/${subject.name.toLowerCase()}`}
							className="bg-secondary group p-3 rounded-lg shadow-sm flex flex-row items-center gap-5"
						>
							<div className="bg-primary/10 flex justify-center items-center size-12 rounded-sm">
								{subject.icon}
							</div>
							<p className="font-semibold md:group-hover:text-primary">
								{subject.name}
							</p>
						</Link>
					))}
				</div>
			</section>
		</Layout>
	);
}
