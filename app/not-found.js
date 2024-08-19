import { Code } from "@nextui-org/react";
import './error.css'

const waifu = [
	'cry',
	'slap',
	'bonk',
	'kick'
]

export default async function NotFound() {
	const type = waifu[Math.floor(Math.random() * waifu.length)]; // Random anime pic type
	let src = await fetch(`https://api.waifu.pics/sfw/${type}`, {cache: 'no-store'});
  	let json = await src.json();

	const err = {
		statusCode: 404,
		description: "Page not found",
		waifu: type,
		datetime: Date.now()
	};

	return (
		<html lang="en">
			<body>
				<div className="py-4 px-6 lg:py-12 lg:px-24 flex flex-col gap-12">
					<h1 className="text-6xl">Ooops... Page not found</h1>
					<span className="text-xl opacity-50">
						Try another page.
					</span>
					<div className="flex flex-col justify-between gap-12">
						<img className="rounded-xl w-full lg:w-1/2" alt='waifu' src={json.url} />
						<Code
							className="text-white text-wrap text-sm bg-boxcolor w-fit text-opacity-80"
							color="default"
							size="lg"
						>
							{JSON.stringify(err, null, 4)}
						</Code>
					</div>
				</div>
			</body>
		</html>
	);
}
