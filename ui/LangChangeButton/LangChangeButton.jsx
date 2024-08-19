"use client";
import { Button, Tooltip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export function LangChangeButton() {
	const path = usePathname();
	const router = useRouter();
	const t = useTranslations("Header");

	const changeLang = () => {
		const lang = path.substring(1, 3);
		const con = path.substring(3);
		if (lang === "en") {
			router.replace("/ru" + con);
		} else if (lang === "ru") {
			router.replace("/en" + con);
		}
	};
	return (
		<Tooltip content={t("changeLang")}>
			<Button
				color="primary"
				variant="flat"
				className="text-base"
				onPress={changeLang}
				isIconOnly
			>
				<Image
					src="/icons/ic_fluent_local_language_24_filled.svg"
					width={24}
					height={24}
				/>
			</Button>
		</Tooltip>
	);
}
