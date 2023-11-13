import { Tooltip } from '@heathmont/moon-core-tw';

type Props = {
    element: React.JSX.Element;
    title: string;
    text: string;
}

const ToolTip = ({element, title, text}: Props) => (
	<>
		<div className='flex flex-wrap items-center justify-around gap-2 w-full'>
			<Tooltip>
				<Tooltip.Trigger>
                    {element}
				</Tooltip.Trigger>
				<Tooltip.Content position='bottom-center' className='border z-50 bg-white'>
                    <div>
                        <p>{title}</p>
                        <p>{text}</p>
                    </div>
					<Tooltip.Arrow className='border bg-white' />
				</Tooltip.Content>
			</Tooltip>
		</div>
	</>
);

export default ToolTip;
