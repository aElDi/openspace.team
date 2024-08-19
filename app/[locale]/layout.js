import "../globals.css";
import { Header } from "../components/Header";
import { Providers } from "../components/Providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Suspense } from "react";
import { Metrika } from "../components/Metrika";
import {unstable_setRequestLocale} from 'next-intl/server';

/**@type {Promise<import("next").Metadata>} */
export async function generateMetadata() {
	return {
		title: {
			template: "%s | OpenSpace",
			default: "OpenSpace",
		},
		description: "OpenSpace - free collaborative platform",
		keywords: [
			"team",
			"collaborative",
			"openspace",
			"team work",
			"developers",
			"web developers",
			"projects",
		],
		openGraph: {
			title: "OpenSpace",
			description: "OpenSpace - Work In Progress...",
			url: "https://openspace.team",
			siteName: "OpenSpace",
			images: [
				{
					url: "https://openspace.team/images/banner.png",
					width: 512,
					height: 512,
				},
			],
			locale: "en_US",
			type: "website",
		},
	};
}

export function generateStaticParams() {
	return [{locale: 'ru'}, {locale: 'en'}]
}

/**
 * Asynchronous React component for setting up the main layout of a Next.js application.
 * Configures HTML structure, applies global styles, and integrates internationalization and other providers.
 * @param {Object} props - Props object containing children and params with locale parameter.
 * @returns {JSX.Element} JSX element representing the main layout.
 */
export default async function LocaleLayout({ children, params: { locale } }) {
	unstable_setRequestLocale(locale);
	// Fetch internationalization messages
	const messages = await getMessages();

	return (
		<html lang={locale} className="dark">
			<body>
				<Suspense>
					<Metrika/>
				</Suspense>
				<div className="-z-50 w-full h-full lg:h-screen">
					<Providers>
						<NextIntlClientProvider messages={messages}>
							<Header />
							{children}
						</NextIntlClientProvider>
					</Providers>
				</div>
			</body>
		</html>
	);
}
