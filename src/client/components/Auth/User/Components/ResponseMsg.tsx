export const ResponseMsg = ({
	response,
	failedResText,
}: {
	response: string;
	failedResText: string;
}) => {
	return (
		<>
			{response && (
				<p
					className={`flex text-center font-bold pb-3 text-green-500 ${
						response?.includes(failedResText) ? 'text-red-600' : 'text-green-600'
					}`}>
					{response}
				</p>
			)}
		</>
	);
};
