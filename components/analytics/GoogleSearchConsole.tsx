interface GoogleSearchConsoleProps {
	verificationCode?: string;
}

export default function GoogleSearchConsole({
	verificationCode,
}: GoogleSearchConsoleProps) {
	if (!verificationCode) {
		return null;
	}

	return <meta name='google-site-verification' content={verificationCode} />;
}

// Alternative verification method using HTML file
// This function helps generate the verification file content
export const generateVerificationFileContent = (verificationCode: string) => {
	return `google-site-verification: ${verificationCode}.html`;
};

// Instructions for manual verification (to be displayed to user)
export const getVerificationInstructions = () => {
	return {
		metaTag: {
			title: "Meta Tag Verification",
			description:
				"Add the NEXT_PUBLIC_GSC_VERIFICATION_CODE environment variable with your verification code",
			steps: [
				"Go to Google Search Console (https://search.google.com/search-console)",
				"Add your property (https://spiceislandindonesia.com)",
				"Choose 'HTML tag' verification method",
				"Copy the verification code from the meta tag",
				"Add NEXT_PUBLIC_GSC_VERIFICATION_CODE=your_code to your environment variables",
				"Redeploy your site",
				"Click 'Verify' in Google Search Console",
			],
		},
		htmlFile: {
			title: "HTML File Verification",
			description: "Alternative method using HTML file upload",
			steps: [
				"Go to Google Search Console",
				"Add your property",
				"Choose 'HTML file' verification method",
				"Download the verification file",
				"Upload it to your public folder as /public/[filename].html",
				"Create a route at /app/[filename]/route.ts that returns the file content",
				"Click 'Verify' in Google Search Console",
			],
		},
		analytics: {
			title: "Google Analytics Verification",
			description:
				"Verify using existing Google Analytics (recommended)",
			steps: [
				"Ensure Google Analytics is set up and tracking",
				"Go to Google Search Console",
				"Add your property",
				"Choose 'Google Analytics' verification method",
				"Select your Analytics account",
				"Click 'Verify'",
			],
		},
	};
};
