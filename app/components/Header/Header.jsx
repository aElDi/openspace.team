import Image from "next/image";
import React from "react";
import Link from "next/link";
import { SocialIcon } from "@/ui/SocialIcon";
import { useTranslations } from "next-intl";
import { LangChangeButton } from "@/ui/LangChangeButton";
export function Header() {
	const t = useTranslations("Header");

	const menuItems = [
		{ title: t("platform"), href: "/" },
		{ title: t("blog"), href: "/blog" },
		{ title: t("changelog"), href: "/status" },
		{ title: t("contact"), href: "/contact" },
	];

	return (
		<header className="flex flex-row py-2 lg:py-3 px-2 lg:px-12 gap-12 w-full items-center bg-blackbox">
			<div className="flex flex-row gap-3 min-w-fit items-center">
				<a href="/">
				<Image
					src="/icons/Logo.svg"
					alt="Logo"
					width={42}
					height={42}
					priority
				/>
				</a>
				<h1 className="hidden font-outfit lg:block lg:text-3xl">OpenSpace</h1>
			</div>
			{menuItems.map((item, index) => (
				<Link
					key={index}
					className="hidden lg:block text-lg leading-none opacity-50"
					href={item.href}
				>
					{item.title}
				</Link>
			))}
			<div className="flex flex-row-reverse gap-5 w-full">
				<LangChangeButton />
				<div className="flex flex-row gap-4 items-center">
					<SocialIcon
						size={24}
						href='/status'
						src='/icons/ic_fluent_pulse_square_24_filled.svg'
						className='block lg:hidden'
					/>
					<SocialIcon
						size={24}
						href='/contact'
						src='/icons/ic_fluent_info_24_filled.svg'
						className='block lg:hidden'
					/>
					<SocialIcon
						size={24}
						href="https://discord.gg/r4pBVcbhBU"
						src="/icons/ic_baseline-discord.svg"
					/>
					<SocialIcon
						size={24}
						href="https://t.me/openspacenews"
						src="/icons/ic_twotone-telegram.svg"
					/>
				</div>
			</div>
		</header>
	);
}
