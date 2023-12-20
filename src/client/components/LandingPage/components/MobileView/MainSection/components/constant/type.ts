export type SportDataItem = {
	gameType: string[];
	eventType: string[];
	[key: string]: string[] | undefined;
};

export type headBettingsSectionProps = {
	sports: boolean;
	sportBetType: string;
	setOddsHeaderLength: React.Dispatch<React.SetStateAction<number>>;
};
