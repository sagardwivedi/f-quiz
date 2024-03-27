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

export const HTMLQuestions = [
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
				answer: '<hyperlink href="http://www.example.com">Example</hyperlink>',
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
		question: "Which HTML element is used to define the title of a document?",
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
];

export const JavaScriptQuestions = [
	{
		question: "What does JavaScript stand for?",
		options: [
			{ id: "A", answer: "Just Style Sheets" },
			{ id: "B", answer: "Java Style Sheets" },
			{ id: "C", answer: "Just Scripting" },
			{ id: "D", answer: "JavaScript" },
		],
		correctAnswer: "C",
	},
	{
		question: "Which built-in method returns the length of a string?",
		options: [
			{ id: "A", answer: "size()" },
			{ id: "B", answer: "index()" },
			{ id: "C", answer: "length()" },
			{ id: "D", answer: "count()" },
		],
		correctAnswer: "C",
	},
	{
		question: "What is the correct way to write a JavaScript array?",
		options: [
			{ id: "A", answer: "var colors = 'red', 'green', 'blue';" },
			{ id: "B", answer: "var colors = ['red', 'green', 'blue'];" },
			{ id: "C", answer: "var colors = {'red', 'green', 'blue'};" },
			{ id: "D", answer: "var colors = {'red': 1, 'green': 2, 'blue': 3};" },
		],
		correctAnswer: "B",
	},
	{
		question:
			"What is the correct JavaScript syntax to change the content of the HTML element <p id='demo'>?",
		options: [
			{ id: "A", answer: "#demo.innerHTML = 'Hello World!';" },
			{
				id: "B",
				answer: "document.getElementById('demo').innerHTML = 'Hello World!';",
			},
			{
				id: "C",
				answer: "document.getElementByName('p').innerHTML = 'Hello World!';",
			},
			{
				id: "D",
				answer: "document.getElement('p').innerHTML = 'Hello World!';",
			},
		],
		correctAnswer: "B",
	},
	{
		question: "Which event occurs when the user clicks on an HTML element?",
		options: [
			{ id: "A", answer: "onchange" },
			{ id: "B", answer: "onmouseclick" },
			{ id: "C", answer: "onclick" },
			{ id: "D", answer: "onmouseover" },
		],
		correctAnswer: "C",
	},
	{
		question: "How do you declare a JavaScript variable?",
		options: [
			{ id: "A", answer: "variable carName;" },
			{ id: "B", answer: "v carName;" },
			{ id: "C", answer: "var carName;" },
			{ id: "D", answer: "v carName = '';" },
		],
		correctAnswer: "C",
	},
	{
		question: "Which operator is used to assign a value to a variable?",
		options: [
			{ id: "A", answer: "=" },
			{ id: "B", answer: "-" },
			{ id: "C", answer: "*" },
			{ id: "D", answer: "x" },
		],
		correctAnswer: "A",
	},
	{
		question: "What is the correct way to write a JavaScript comment?",
		options: [
			{ id: "A", answer: "<!--This is a comment-->;" },
			{ id: "B", answer: "//This is a comment" },
			{ id: "C", answer: "/*This is a comment*/" },
			{ id: "D", answer: "'This is a comment" },
		],
		correctAnswer: "B",
	},
	{
		question:
			"Which function is used to parse a string to a number in JavaScript?",
		options: [
			{ id: "A", answer: "parseInt()" },
			{ id: "B", answer: "stringToNumber()" },
			{ id: "C", answer: "parseNumber()" },
			{ id: "D", answer: "numberParse()" },
		],
		correctAnswer: "A",
	},
	{
		question: "Which method is used to add new items to the end of an array?",
		options: [
			{ id: "A", answer: "append()" },
			{ id: "B", answer: "push()" },
			{ id: "C", answer: "addToEnd()" },
			{ id: "D", answer: "concat()" },
		],
		correctAnswer: "B",
	},
];

export const CSSQuestions = [
	{
		question: "What does CSS stand for?",
		options: [
			{ id: "A", answer: "Cascading Style Sheets" },
			{ id: "B", answer: "Creative Style Sheets" },
			{ id: "C", answer: "Computer Style Sheets" },
			{ id: "D", answer: "Colorful Style Sheets" },
		],
		correctAnswer: "A",
	},
	{
		question:
			"Which CSS property is used to change the text color of an element?",
		options: [
			{ id: "A", answer: "font-color" },
			{ id: "B", answer: "color" },
			{ id: "C", answer: "text-color" },
			{ id: "D", answer: "text-style" },
		],
		correctAnswer: "B",
	},
	{
		question:
			"What is the correct CSS syntax to select elements with class 'example'?",
		options: [
			{ id: "A", answer: ".example" },
			{ id: "B", answer: "#example" },
			{ id: "C", answer: "*example" },
			{ id: "D", answer: "example" },
		],
		correctAnswer: "A",
	},
	{
		question:
			"Which CSS property is used to control the space between the elements' border and inner content?",
		options: [
			{ id: "A", answer: "margin" },
			{ id: "B", answer: "padding" },
			{ id: "C", answer: "spacing" },
			{ id: "D", answer: "border-spacing" },
		],
		correctAnswer: "B",
	},
	{
		question: "What does the 'float' property in CSS do?",
		options: [
			{ id: "A", answer: "Pushes an element to the right" },
			{ id: "B", answer: "Pushes an element to the left" },
			{ id: "C", answer: "Allows an element to wrap around another element" },
			{ id: "D", answer: "Hides an element from view" },
		],
		correctAnswer: "C",
	},
	{
		question: "Which CSS property is used to make text italic?",
		options: [
			{ id: "A", answer: "font-style" },
			{ id: "B", answer: "text-style" },
			{ id: "C", answer: "italic" },
			{ id: "D", answer: "style" },
		],
		correctAnswer: "A",
	},
	{
		question:
			"Which CSS property is used to control the order of elements along the z-axis?",
		options: [
			{ id: "A", answer: "order" },
			{ id: "B", answer: "z-index" },
			{ id: "C", answer: "position" },
			{ id: "D", answer: "z-order" },
		],
		correctAnswer: "B",
	},
	{
		question: "What does the 'display: none;' property do in CSS?",
		options: [
			{ id: "A", answer: "Hides an element from view" },
			{ id: "B", answer: "Displays an element as a block" },
			{ id: "C", answer: "Displays an element as an inline element" },
			{ id: "D", answer: "Centers an element horizontally" },
		],
		correctAnswer: "A",
	},
	{
		question: "Which CSS property is used to create rounded corners?",
		options: [
			{ id: "A", answer: "border-radius" },
			{ id: "B", answer: "corner-radius" },
			{ id: "C", answer: "round-corner" },
			{ id: "D", answer: "edge-radius" },
		],
		correctAnswer: "A",
	},
	{
		question:
			"What is the correct CSS syntax to change the background color of a webpage?",
		options: [
			{ id: "A", answer: "background-color: red;" },
			{ id: "B", answer: "bgcolor: red;" },
			{ id: "C", answer: "color: red;" },
			{ id: "D", answer: "bg-color: red;" },
		],
		correctAnswer: "A",
	},
];

export const AccessibilityQuestions = [
	{
		question: "What does WCAG stand for?",
		options: [
			{ id: "A", answer: "Web Content Accessibility Guidelines" },
			{ id: "B", answer: "Worldwide Content Accessibility Guidelines" },
			{ id: "C", answer: "Web Compatibility Assistance Group" },
			{ id: "D", answer: "Web Compatibility Accessibility Guidelines" },
		],
		correctAnswer: "A",
	},
	{
		question:
			"Which HTML attribute is used to provide an alternative text for an image for accessibility?",
		options: [
			{ id: "A", answer: "alt" },
			{ id: "B", answer: "title" },
			{ id: "C", answer: "description" },
			{ id: "D", answer: "aria-label" },
		],
		correctAnswer: "A",
	},
	{
		question: "What is the purpose of ARIA roles?",
		options: [
			{ id: "A", answer: "To define the style of elements" },
			{ id: "B", answer: "To define the accessibility of elements" },
			{ id: "C", answer: "To define the layout of elements" },
			{ id: "D", answer: "To define the content of elements" },
		],
		correctAnswer: "B",
	},
	{
		question: "Which HTML element should be used to create a semantic heading?",
		options: [
			{ id: "A", answer: "<div>" },
			{ id: "B", answer: "<p>" },
			{ id: "C", answer: "<span>" },
			{ id: "D", answer: "<h1>-<h6>" },
		],
		correctAnswer: "D",
	},
	{
		question: "What is the purpose of the tabindex attribute in HTML?",
		options: [
			{ id: "A", answer: "To specify the font size of an element" },
			{ id: "B", answer: "To specify the order of focusable elements" },
			{ id: "C", answer: "To specify the alignment of an element" },
			{ id: "D", answer: "To specify the color of an element" },
		],
		correctAnswer: "B",
	},
	{
		question: "What does ARIA stand for?",
		options: [
			{ id: "A", answer: "Accessible Rich Internet Applications" },
			{ id: "B", answer: "Accessible Responsive Internet Applications" },
			{ id: "C", answer: "Accessible Responsive Internet Attributes" },
			{ id: "D", answer: "Accessible Rich Internet Attributes" },
		],
		correctAnswer: "A",
	},
	{
		question: "What does semantic HTML mean?",
		options: [
			{ id: "A", answer: "HTML that is used only for styling purposes" },
			{ id: "B", answer: "HTML that uses meaningful tags to convey structure" },
			{ id: "C", answer: "HTML that includes JavaScript code" },
			{ id: "D", answer: "HTML that uses inline styles for layout" },
		],
		correctAnswer: "B",
	},
	{
		question: "Which type of color contrast is important for accessibility?",
		options: [
			{ id: "A", answer: "Low contrast" },
			{ id: "B", answer: "High contrast" },
			{ id: "C", answer: "Medium contrast" },
			{ id: "D", answer: "No contrast" },
		],
		correctAnswer: "B",
	},
	{
		question: "What is the purpose of the alt attribute on an image?",
		options: [
			{ id: "A", answer: "To specify the image width" },
			{ id: "B", answer: "To provide a description for the image" },
			{ id: "C", answer: "To specify the image source" },
			{ id: "D", answer: "To provide a title for the image" },
		],
		correctAnswer: "B",
	},
	{
		question: "Why is it important to provide keyboard accessibility?",
		options: [
			{ id: "A", answer: "To improve search engine optimization" },
			{ id: "B", answer: "To enhance user experience for keyboard users" },
			{ id: "C", answer: "To prevent hackers from accessing the website" },
			{ id: "D", answer: "To reduce website loading times" },
		],
		correctAnswer: "B",
	},
];
