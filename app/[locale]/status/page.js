import { StatusStop } from "@/app/components/StatusStop";
import React from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";


export default async function StatusPage({params: {locale}}) {
	unstable_setRequestLocale(locale);

	const t = await getTranslations("StatusPage");

	const statusesList = (await import(`./statuses.${locale}.js`)).Statuses

	return (
		<div className="flex flex-col h-full py-8 px-4 lg:px-10 lg:py-12">

			<div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
				<div className="w-full lg:w-1/3">
					<div className="flex flex-col gap-4 md:gap-8 h-full w-full px-4 py-4 md:px-8 md:py-6">
						<h1 className="text-4xl md:text-5xl lg:text-7xl ">
							{t("title")}
						</h1>
						<span className="flex flex-col gap-3 md:text-lg opacity-80">
							<p>
								{t("caption")}
							</p>
						</span>
					</div>
				</div>
				<div className="w-full lg:w-2/3 flex flex-wrap items-center gap-8">
					{statusesList.map((status, index) => (
						<StatusStop
							statusStop={status}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
