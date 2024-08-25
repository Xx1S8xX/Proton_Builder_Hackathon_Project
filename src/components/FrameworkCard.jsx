import Image from "next/image";

const frameworkData = ({ id, label }) => {
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
                border-gray-200 rounded-lg cursor-pointer"
            >
                <div className="block">
                    <div className="w-full text-lg font-semibold">{label}</div>
                </div>
            </label>
        </li>
    );
};

export default frameworkData;
