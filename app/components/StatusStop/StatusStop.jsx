import React from "react";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
	Divider,
	Progress,
} from "@nextui-org/react";

const getColor = (percents) => {
	return percents === 100 ? "success": "primary";
}

export function StatusStop({ statusStop }) {
	return (
		<Card className="w-full lg:w-96 bg-boxcolor">
			<CardHeader className="flex flex-row justify-between items-center gap-4">
				<span className="text-3xl font-medium">{statusStop.title}</span>
				<Chip
					size="md"
					variant="dot"
					color={getColor(statusStop.value)}
				>
					{statusStop.status}
				</Chip>
			</CardHeader>
			<Divider />
			<CardBody className="opacity-70">{statusStop.desc}</CardBody>
			<CardFooter className="w-full flex flex-row gap-4 justify-between">
				<Progress aria-label="Progress" color={getColor(statusStop.value)} value={statusStop.value}/>
				<span className="text-sm opacity-50">
					{new Date(statusStop.date).toLocaleDateString("ru")}
				</span>
			</CardFooter>
		</Card>
	);
}
