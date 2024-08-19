export default function sitemap() {
	return [
		{
			url: "https://openspace.team/",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://openspace.team/en",
					ru: "https://openspace.team/ru",
				},
			},
		},
		{
			url: "https://openspace.team/contact",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://openspace.team/en/contact",
					ru: "https://openspace.team/ru/contact",
				},
			},
		},
		{
			url: "https://openspace.team/status",
			lastModified: new Date(),
			alternates: {
				languages: {
					en: "https://openspace.team/en/status",
					ru: "https://openspace.team/ru/status",
				},
			},
		},
	];
}
