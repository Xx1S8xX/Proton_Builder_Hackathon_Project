import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "material-symbols";
import { AppProvider } from "@/context/framework";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Proton Builder",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<AppProvider>
				<body className={cn("min-h-screen flex flex-col justify-between", inter.className)}>
					<div>
						<Navbar />
						{children}
					</div>
					<Footer />
				</body>
			</AppProvider>
		</html>
	);
}
