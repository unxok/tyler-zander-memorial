import { H2, H3, P } from "@/components/Typography";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Page() {
	//
	return (
		<div className='w-full flex justify-center'>
			<div className='w-[70ch]'>
				<br />
				<H2>Funeral Arrangements</H2>
				<P>
					Tyler’s funeral ceremony will be held in San Jose for all of those
					whose lives he's touched and for anyone else who would like to send
					him off with love from the San Jose area. Tyler’s final resting place
					will be in Eureka, CA at home close to his family.
				</P>
				<P>
					In lieu of flowers, the family kindly requests donations to{" "}
					<a
						href='https://gofund.me/65a94ed6'
						target='_blank'
						className='underline text-primary'
					>
						Tyler's Go Fund Me
					</a>{" "}
					account to assist with covering funeral expenses and other end-of-life
					costs.
				</P>
				<br />
				<Card>
					<CardHeader>
						<CardTitle>Funeral Ceremony</CardTitle>
						<CardDescription>11-18-2024, 9AM - 8PM</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className='list-disc pl-4'>
							<li>Monday, November 18th</li>
							<li>
								Open visitation from 9:00 AM - 8:00 PM, with service scheduled
								at 4:00 PM
							</li>
							<li>
								Held at Oak Hill Funeral Home & Memorial Park in the "Drawing
								Room": 300 Curtner Ave, San Jose, CA 95125
							</li>
						</ul>
					</CardContent>
				</Card>
				<br />
				<Card>
					<CardHeader>
						<CardTitle>Burial Ceremony</CardTitle>
						<CardDescription>11-23-2024, 10AM - TBD</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className='list-disc pl-4'>
							<li>Saturday, November 23rd</li>
							<li>Burial service from 10:00 AM - TBD</li>
							<li>
								Held at Sunset Memorial Park, close to the end of the road: 3975
								Broadway St, Eureka, CA 95503
							</li>
						</ul>
					</CardContent>
				</Card>
				<br />
				<br />
			</div>
		</div>
	);
}
