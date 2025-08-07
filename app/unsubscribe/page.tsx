"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { unsubscribeFromNewsletter } from "@/lib/actions";
import Link from "next/link";

function UnsubscribeForm() {
	const searchParams = useSearchParams();
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [result, setResult] = useState<{
		success: boolean;
		message: string;
	} | null>(null);

	useEffect(() => {
		const emailParam = searchParams.get("email");
		if (emailParam) {
			setEmail(decodeURIComponent(emailParam));
		}
	}, [searchParams]);

	const handleUnsubscribe = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await unsubscribeFromNewsletter(email);
			setResult(response);
		} catch (error) {
			setResult({
				success: false,
				message: "Something went wrong. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
			<Card className='max-w-md w-full'>
				<CardHeader className='text-center'>
					<CardTitle className='text-2xl font-bold text-gray-900'>
						Unsubscribe from Newsletter
					</CardTitle>
					<CardDescription>
						We&apos;re sorry to see you go! You can unsubscribe
						from our newsletter below.
					</CardDescription>
				</CardHeader>
				<CardContent>
					{!result ? (
						<form
							onSubmit={handleUnsubscribe}
							className='space-y-4'
						>
							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700 mb-2'
								>
									Email Address
								</label>
								<Input
									id='email'
									type='email'
									value={email}
									onChange={(e) =>
										setEmail(e.target.value)
									}
									placeholder='Enter your email address'
									required
									className='w-full'
								/>
							</div>
							<Button
								type='submit'
								className='w-full bg-red-600 hover:bg-red-700'
								disabled={isSubmitting}
							>
								{isSubmitting
									? "Unsubscribing..."
									: "Unsubscribe"}
							</Button>
						</form>
					) : (
						<div className='text-center space-y-4'>
							<div
								className={`p-4 rounded-lg ${
									result.success
										? "bg-green-50 text-green-800"
										: "bg-red-50 text-red-800"
								}`}
							>
								<p className='font-medium'>
									{result.message}
								</p>
							</div>

							{result.success ? (
								<div className='space-y-3'>
									<p className='text-sm text-gray-600'>
										You have been successfully
										unsubscribed from our
										newsletter.
									</p>
									<p className='text-sm text-gray-600'>
										If you change your mind, you
										can always subscribe again on
										our homepage.
									</p>
								</div>
							) : (
								<Button
									onClick={() => setResult(null)}
									variant='outline'
									className='w-full'
								>
									Try Again
								</Button>
							)}

							<Link href='/' className='block'>
								<Button
									variant='outline'
									className='w-full'
								>
									Return to Homepage
								</Button>
							</Link>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}

export default function UnsubscribePage() {
	return (
		<Suspense
			fallback={
				<div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
					<Card className='max-w-md w-full'>
						<CardHeader className='text-center'>
							<CardTitle className='text-2xl font-bold text-gray-900'>
								Loading...
							</CardTitle>
						</CardHeader>
					</Card>
				</div>
			}
		>
			<UnsubscribeForm />
		</Suspense>
	);
}
