import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Heart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Tyler Zander Memorial",
	description: "In loving memory of Tyler Zander Stanley-Camba",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='scroll-smooth'
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Nav />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

const Nav = () => {
	//
	return (
		<div className='group sticky top-0 bg-background'>
			<nav className='flex p-2 relative justify-between items-center border-b-[1px]'>
				<Title />
				<div className='gap-3 items-center hidden sm:flex'>
					<NavLink href={"/#obituary"}>Obituary</NavLink>
					<NavLink href={"/funeral"}>Funeral</NavLink>
					<NavLink href={"/gallery"}>Gallery</NavLink>
				</div>
				<div className='flex justify-center items-center gap-1'>
					<DonateButton />
					<ThemeToggle />
					<MobileNav />
				</div>
			</nav>
			<hr className='w-full mx-auto my-0 scale-x-0 group-hover:scale-x-100 border-primary transition-all duration-500' />
		</div>
	);
};

const NavLink = ({ className, ...props }: ComponentProps<typeof Link>) => {
	//
	return (
		<Link
			className={cn(
				"flex justify-center items-center p-2 h-full text-muted-foreground rounded-lg text-xs hover:bg-muted transition-colors hover:cursor-pointer hover:text-foreground underline-offset-2 hover:underline",
				className
			)}
			{...props}
		/>
	);
};

const Title = () => {
	//
	return (
		<Link
			href={"/"}
			className='flex flex-col gap-[.0625rem] justify-center items-start'
		>
			<span className={`text-muted-foreground text-sm font-['cursive']`}>
				In loving memory of
			</span>
			<h1 className='text-lg font-semibold'>Tyler Zander</h1>
		</Link>
	);
};

const DonateButton = () => {
	//
	return (
		<a
			href='https://gofund.me/65a94ed6'
			target='_blank'
			className=''
		>
			<Button className='gap-[.125rem]'>
				Donate
				<Heart fill='currentColor' />
			</Button>
		</a>
	);
};

const MobileNav = () => {
	//
	return (
		<Sheet>
			<SheetTrigger
				className={cn(buttonVariants({ variant: "ghost" }), "sm:hidden")}
			>
				<Menu />
			</SheetTrigger>
			<SheetContent>
				<nav className='flex flex-col gap-1 [&>a]:justify-start'>
					<NavLink href={"/"}>Obituary</NavLink>
					<NavLink href={"/funeral"}>Funeral</NavLink>
					<NavLink href={"/gallery"}>Gallery</NavLink>
				</nav>
			</SheetContent>
		</Sheet>
	);
};
