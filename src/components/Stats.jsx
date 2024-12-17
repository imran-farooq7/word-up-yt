import Stat from "./Stat";

const Stats = ({ stats }) => {
	return (
		<div className="stats">
			<Stat type="Words" number={stats.words} />
			<Stat type="Characters" number={stats.numberofChars} />
			<Stat type="Instagram" number={stats.instaCharsLeft} />
			<Stat type="Facebook" number={stats.fbCharsLeft} />
		</div>
	);
};

export default Stats;
