import {
	Code2Icon,
	FileCode,
	PaintRollerIcon,
	PersonStanding,
} from "lucide-react";

export const SUBJECTS = [
	{
		name: "HTML",
		icon: <Code2Icon className="text-primary" />,
	},
	{
		name: "CSS",
		icon: <PaintRollerIcon className="text-primary" />,
	},
	{
		name: "Javascript",
		icon: <FileCode className="text-primary" />,
	},
	{
		name: "Accessibility",
		icon: <PersonStanding className="text-primary" />,
	},
];

export const Questions = [
	{
		name: "html",
		questions: [
			{
				question: "What does HTML stand for?",
				options: [
					{ id: "A", answer: "Hyper Text Markup Language" },
					{ id: "B", answer: "Hyperlinks and Text Markup Language" },
					{ id: "C", answer: "Home Tool Markup Language" },
					{ id: "D", answer: "Hyperlink Transfer Markup Language" },
				],
				correctAnswer: "A",
			},
			{
				question: "Which tag is used to define an unordered list in HTML?",
				options: [
					{ id: "A", answer: "<ol>" },
					{ id: "B", answer: "<li>" },
					{ id: "C", answer: "<ul>" },
					{ id: "D", answer: "<list>" },
				],
				correctAnswer: "C",
			},
			{
				question: "What is the correct HTML for creating a hyperlink?",
				options: [
					{ id: "A", answer: '<a url="http://www.example.com">Example</a>' },
					{ id: "B", answer: '<a src="http://www.example.com">Example</a>' },
					{ id: "C", answer: '<a href="http://www.example.com">Example</a>' },
					{
						id: "D",
						answer:
							'<hyperlink href="http://www.example.com">Example</hyperlink>',
					},
				],
				correctAnswer: "C",
			},
			{
				question:
					"Which HTML attribute specifies an alternate text for an image if the image cannot be displayed?",
				options: [
					{ id: "A", answer: "src" },
					{ id: "B", answer: "alt" },
					{ id: "C", answer: "title" },
					{ id: "D", answer: "img-alt" },
				],
				correctAnswer: "B",
			},
			{
				question: "What is the correct HTML for inserting a line break?",
				options: [
					{ id: "A", answer: "<br>" },
					{ id: "B", answer: "<lb>" },
					{ id: "C", answer: "<break>" },
					{ id: "D", answer: "<line>" },
				],
				correctAnswer: "A",
			},
			{
				question:
					"Which HTML element is used to define the structure of an HTML document, including the header and body sections?",
				options: [
					{ id: "A", answer: "<structure>" },
					{ id: "B", answer: "<document>" },
					{ id: "C", answer: "<html>" },
					{ id: "D", answer: "<head>" },
				],
				correctAnswer: "C",
			},
			{
				question: "What does the <iframe> element do in HTML?",
				options: [
					{ id: "A", answer: "Defines an image" },
					{ id: "B", answer: "Defines an inline frame" },
					{ id: "C", answer: "Defines a clickable area inside an image map" },
					{ id: "D", answer: "Defines a paragraph" },
				],
				correctAnswer: "B",
			},
			{
				question:
					"Which HTML element is used to define the title of a document?",
				options: [
					{ id: "A", answer: "<title>" },
					{ id: "B", answer: "<header>" },
					{ id: "C", answer: "<head>" },
					{ id: "D", answer: "<h1>" },
				],
				correctAnswer: "A",
			},
			{
				question:
					"Which HTML attribute specifies the URL of the page the link goes to?",
				options: [
					{ id: "A", answer: "link" },
					{ id: "B", answer: "href" },
					{ id: "C", answer: "src" },
					{ id: "D", answer: "url" },
				],
				correctAnswer: "B",
			},
			{
				question: "Which HTML element is used to define a table row?",
				options: [
					{ id: "A", answer: "<td>" },
					{ id: "B", answer: "<tr>" },
					{ id: "C", answer: "<th>" },
					{ id: "D", answer: "<table>" },
				],
				correctAnswer: "B",
			},
		],
	},
];
