import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<Layout>
			<div className="flex flex-col gap-5 justify-center items-center h-full">
				<p>Not Found</p>
				<Button variant={"outline"} asChild>
					<Link href={"/"}>Back to Home</Link>
				</Button>
			</div>
		</Layout>
	);
}
