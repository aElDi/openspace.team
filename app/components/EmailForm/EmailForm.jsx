"use client";
import React, { useMemo } from "react";
import { Button, Input, Tooltip } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export function EmailForm() {
	const t = useTranslations("EmailForm");
	const [email, setEmail] = React.useState("");
	const [error, setError] = React.useState("");
	const [isComplete, setComplete] = React.useState(false);

	const saveEmail = () => {
		const p = new URLSearchParams();
		p.append("email", email);
		fetch("/api/addEmail?" + p.toString()).then((data) => {
			if (data.status != 200) {
				setError(t("serverErrorMessage"));
			} else {
				setComplete(true);
			}
		});
	};

	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const isInvalid = useMemo(() => {
		if (email === "") {
			setError("");
			return false;
		}
		return !re.test(email);
	}, [email]);

	const saveWrapper = () => {
		saveEmail(email, setError);
	};

	return (
		<div className="flex flex-row gap-2 w-fit h-fit">
			<Tooltip placement='bottom' isOpen={isComplete} content={t("thank")}>
				<Input
					type="email"
					placeholder="Email"
					isInvalid={isInvalid || !(error === "")}
					errorMessage={error || t("invalidEmailErrorMessage")}
					onValueChange={setEmail}
				/>
			</Tooltip>

			<Button
				id="email-input"
				variant="flat"
				color="primary"
				className="text-base"
				onPress={saveWrapper}
			>
				{t("btnLabel")}
			</Button>
		</div>
	);
}
