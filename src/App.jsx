import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Stats from "./components/Stats";
import WordsInput from "./components/WordsInput";

const App = () => {
	const [text, setText] = useState("");
	const numberofChars = text.length;
	const instaCharsLeft = 280 - numberofChars;
	const fbCharsLeft = 2200 - numberofChars;
	const words = text.split(/\s/).filter((word) => word !== "").length;
	const stats = {
		numberofChars,
		instaCharsLeft,
		fbCharsLeft,
		words,
	};

	return (
		<div>
			<Header />
			<Container>
				<WordsInput text={text} setText={setText} />
				<Stats stats={stats} />
			</Container>
		</div>
	);
};

export default App;
