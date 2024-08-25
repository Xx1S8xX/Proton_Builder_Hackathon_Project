import LanguageStatsChart from "@components/LanguageStatsChart";
import Image from "next/image";

const CheckboxComponent = ({ id, label, description, imageSrc, stats }) => {
	return (
		<li className="relative flex group overflow-clip">
			<input
				type="checkbox"
				id={id}
				value={label}
				className="hidden peer"
			/>
			<label
				htmlFor={id}
				className="inline-flex items-center justify-between w-full px-4 py-3 text-gray-500 bg-white border-2
				border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700
				peer-checked:border-blue-300 hover:text-gray-600 dark:peer-checked:text-gray-300
				peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
			>
				<div className="block">
					<div className="w-7 h-7 mb-2">
						<Image src={imageSrc} alt="logo" width={50} height={50}  />
					</div>
					<div className="w-full text-lg font-semibold">{label}</div>
					<div className="group-hover:opacity-0 w-full text-sm">
						{description}
					</div>
				</div>
			</label>
			<div className="pointer-events-none flex h-full justify-end items-center  absolute end-1">
				<div className=" inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
					<LanguageStatsChart stats={stats} />
				</div>
			</div>
		</li>
	);
};

export default CheckboxComponent;
