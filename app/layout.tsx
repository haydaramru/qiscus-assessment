import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "@/components/ui/theme/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
  	subsets: ["latin"],
});

const geistMono = Geist_Mono({
  	variable: "--font-geist-mono",
  	subsets: ["latin"],
});

export const metadata: Metadata = {
  	title: "Qiscus Assesment - Haydar Amru",
  	description: "Submitted by Haydar Amru",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider 
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<TooltipProvider>
						{children}
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
