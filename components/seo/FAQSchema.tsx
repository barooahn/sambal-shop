import { FC } from "react";

interface FAQItem {
	question: string;
	answer: string;
}

interface FAQSchemaProps {
	faqs: FAQItem[];
	pageTitle?: string;
}

const FAQSchema: FC<FAQSchemaProps> = ({ faqs, pageTitle }) => {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"name": pageTitle || "Frequently Asked Questions",
		"mainEntity": faqs.map((faq) => ({
			"@type": "Question",
			"name": faq.question,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": faq.answer
			}
		}))
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schemaData, null, 2)
			}}
		/>
	);
};

export default FAQSchema;
