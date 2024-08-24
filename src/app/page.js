"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	// Immediately route to the languages page
	router.push("/languages");

	return <div>{/* Your page content */}</div>;
}
