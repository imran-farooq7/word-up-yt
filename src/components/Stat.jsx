const Stat = ({ number, type }) => {
	console.log(number);
	return (
		<div className="stat">
			<span className="stat__number">{number}</span>
			<h2 className="second-heading">{type}</h2>
		</div>
	);
};

export default Stat;
