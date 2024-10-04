import { SocialIcon } from "@/ui/SocialIcon";
import { useTranslations } from "next-intl";
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

/** @type {import('next').Metadata} */
export const metadata = {
	title: "Contact",
};

const links = [
	{
		title: "Telegram",
		icon: "/icons/ic_twotone-telegram.svg",
		href: "https://t.me/openspacesupportbot",
		text: "@openspacesupportbot",
	},
	{
		title: "Email",
		icon: "/icons/fluent_mail-48-filled.svg",
		href: "mailto:support@openspace.team",
		text: "support@openspace.team",
	},
	{
		title: "Discord",
		icon: "/icons/ic_baseline-discord.svg",
		href: "https://discord.gg/CCkgMGgt",
		text: "OpenSpace Community",
	},
];

export default function ContactPage({ params: { locale } }) {
	unstable_setRequestLocale(locale);
	const t = useTranslations("Contact");
	return (
		<div className="flex flex-col h-screen lg:h-full items-center py-12 lg:py-28 gap-12">
			<h1 className="font-medium text-4xl w-fit">{t("title")}</h1>
			<div className="flex flex-col lg:flex-row py-5 px-7 gap-12 w-fit lg:bg-boxcolor lg:border-1 lg:border-blinkbox rounded-xl">
				{links.map((link, i) => (
					<div className="flex flex-col items-center gap-2" key={i}>
						<SocialIcon
							size={48}
							src={link.icon}
							href={link.href}
						/>
						<h3 className="text-2xl">{link.title}</h3>
						<span className="text-base opacity-50">
							{link.text}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
