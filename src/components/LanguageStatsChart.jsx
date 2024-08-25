import React from "react";

const LanguageStatsChart = ({ stats }) => {
	const createPoints = () => {
		const points = [];
		for (let i = 0; i < 4; i++) {
			const angle = i * (Math.PI / 2);
			const x = 150 + stats[i] * 4 * Math.cos(angle);
			const y = 64 + stats[i] * 4 * Math.sin(angle);
			points.push(`${x},${y}`);
		}
		return points.join(" ");
	};

	const createLabels = () => {
		const labels = [];
		const labelNames = ["Speed", "Complexity", "Usage", "Functionalities"];
		for (let i = 0; i < 4; i++) {
			const angle = i * (Math.PI / 2);
			let x = 150 + 80 * Math.cos(angle);
			let y = 72.5 + 80 * Math.sin(angle);

			if (i === 0) x += 20;
			if (i === 2) x -= 20;

			if (i === 1) y -= 40;
			if (i === 3) y += 20;

			labels.push(
				<text
					key={i}
					x={x}
					y={y}
					textAnchor="middle"
					fontSize="12"
					fill="#333" // Changed to dark grey
					dy="0.35em"
				>
					{`${labelNames[i]}: ${stats[i]}/10`}
				</text>
			);
		}
		return labels;
	};

	return (
		<div>
			<svg
				width="300"
				height="125"
				className="bg-gray-700 rounded-lg"
			>
				<rect
					x="0"
					y="0"
					width="300"
					height="125"
					fill="#F7F7F7"
				/>
				<circle
					cx="150"
					cy="64"
					r="40"
					fill="none"
					stroke="black"
					strokeWidth="1"
					style={{ opacity: 0.2 }}
				/>
				<polygon
					points={createPoints()}
					fill="rgba(50, 255, 156, 0.4)"
					stroke="rgba(255, 255, 255, 0.1)"
					strokeWidth="1"
				/>
				{createLabels()}
			</svg>
		</div>
	);
};

export default LanguageStatsChart;