import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import "./globals.css";
export const metadata:Metadata={title:"Karthikeya Mishra | Software Developer & Applied AI",description:"Karthikeya Mishra — software developer building backend systems and applied AI. Explore GitHub projects, experience, and technical skills."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navigation/>{children}</body></html>}
