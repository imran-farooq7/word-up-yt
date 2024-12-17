import { useState } from "react";

const WordsInput = ({ text, setText }) => {
	return (
		<div className="textarea">
			<textarea
				placeholder="Enter your text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</div>
	);
};

export default WordsInput;
