import { InfoCard } from "../components/InfoCard";
import { EmailForm } from "../components/EmailForm";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

/** @type {import('next').Metadata} */
export const metadata = {
	title: {
		absolute: "OpenSpace",
	},
};

export default function Home({params: {locale}}) {
	unstable_setRequestLocale(locale);
	const t = useTranslations("Home");
	return (
		<div className="py-12 lg:py-48 px-4 lg:px-28 flex flex-col lg:flex-row gap-10 lg:gap-20">
			<div className="flex flex-col gap-6 w-fit">
				<h1 className="text-6xl font-outfit lg:text-[4rem] w-fit">OpenSpace</h1>
				<span className="text-base lg:text-2xl font-normal w-full">{t("desc")}</span>
				<EmailForm />
			</div>
			<div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
				<div className="flex flex-col gap-3 lg:gap-6">
					<InfoCard title={t("card1.title")} desc={t("card1.desc")} />
					<InfoCard title={t("card2.title")} desc={t("card2.desc")} />
				</div>
				<div className="flex flex-col gap-3 lg:gap-6 lg:pt-12">
					<InfoCard title={t("card3.title")} desc={t("card3.desc")} />
					<InfoCard title={t("card4.title")} desc={t("card4.desc")} />
				</div>
			</div>
		</div>
	);
}
