
import profile from './profile.png';
import { faGithub, faFirefoxBrowser } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Guy",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Final Project Video",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Guy",
	description: "A CyberOps/ISA dual major wondering if he should get a math major as well.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Heya! I'm Guy Nguyen-Phuoc, a senior at the University of Hawaii West Oahu dual majoring in Cyber Operations and Information Security & Assurances. I’m expecting to graduation in Fall 2022. Currently, I’m debating on getting a degree in mathematics to assist my pursuits of going to graduate school, where I will attain my PhD in either Cyber Security or Computer Science.",
		"Currently an Intern for an undisclosed company where I work as a Cybersecurity Engineer, I enjoy researching low-level binary exploitation that involves the stack, studying Artificial Intelligence/Machine Learning applications in signal analysis, and participating in Capture The Flag events. In my spare time I learn about photography and VFX.",
		"I was born in Tulsa, Oklahoma in 1994, making me 27 years old and ever so close to the magic 30. Having lived there for about 14 years, my family decided to move to Hawaii in 2008. The biggest surprise for me was the temperature difference, in Oklahoma the temperature ranges from -20 degrees Fahrenheit to 110 degrees Fahrenheit. Here in Hawaii, the temperature is practically consistent throughout the year, and as someone from Oklahoma I do miss the seasons, winter especially. Outside of photography and VFX, some of my hobbies include reading history, an old board game called Baduk, playing strategy games, and my struggles with the piano.",
		"Looking forward to the future and where it takes me.",
		"Solving Problems for a Safer World,",
		"Guy Nguyen-Phuoc",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Cybersecurity Engineer",
			description: "I explore exploitation techniques that involve the stack: ROP, buffer-overflow, stack canaries, DEP/NX, ASLR, and return-to-libc.",
			icons: null,
		},
		{
			title: "Cybersecurity Research Analyst",
			description: "I research AI/ML localization techniques regarding rouge access points.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Improving SNR with Optimized Kaiser Window FIR Filter Coefficients Via Genetic Algorithm.",
			description: "A paper researching Signal-to-Noise-Ratio with FIR Filters and Genetic Algorithms to attain a least noisy signal.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/GuyNguyen/pdfs/blob/master/480C_Research_Paper.pdf",
				},
			]
		},
		{
			title: "Escaping Metasploit - vsFTPd 2.3.4",
			description: "A paper exploring manual ways of exploitation with regards to automated frameworks like Metasploit.",
			icons: [
				{
					icon: faFirefoxBrowser,
					link: "https://westoahu.hawaii.edu/cyber/forensics-weekly-executive-summmaries/8424-2/",
				},
			]
		},
		{
			title: "Android Kernel Source Code Tagging",
			description: "An interactive static webpage that presents a navigable Android Kernel. Currently down to host this project.",
			icons: [
				{
					icon: faGithub,
					link: "https://guynguyen.github.io/",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at nguyen46@hawaii.edu.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:nguyen46@hawaii.edu",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
	title: "Guy Nguyen-Phuoc | Cybersecurity Engineer | Forensics Analyst | Python Zealot",
	description: "I'm a simple guy just trying to make my way through the galaxy.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@guynguyen",
	description: "Cybersecurity Engineer | Forensics Analyst | Python Zealot",
	cards: [
		{
			title: "Under Construction...",
			link: "",
		},
	]
}