import React from 'react';

const Forum = () => {
	return (
		<svg
			width='42'
			height='42'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<filter
					x='0%'
					y='0%'
					width='100%'
					height='100%'
					filterUnits='objectBoundingBox'
					id='a'>
					<feGaussianBlur in='SourceGraphic' />
				</filter>
			</defs>
			<g
				fill='none'
				fill-rule='evenodd'>
				<path
					d='M21 41.5C9.678 41.5.5 32.322.5 21S9.678.5 21 .5 41.5 9.678 41.5 21 32.322 41.5 21 41.5z'
					fill='#CA203A'
					fill-rule='nonzero'
				/>
				<path
					d='M21 36.5c8.56 0 15.5-6.94 15.5-15.5 0-8.56-6.94-15.5-15.5-15.5-8.56 0-15.5 6.94-15.5 15.5 0 8.56 6.94 15.5 15.5 15.5z'
					fill='#FFF'
					fill-rule='nonzero'
				/>
				<path
					d='M15.43 14.352V27h-3.157v-6.781c0-.98-.023-1.568-.07-1.766-.047-.198-.176-.348-.387-.45-.21-.1-.68-.151-1.41-.151h-.312v-1.477c1.526-.328 2.685-1.003 3.476-2.023h1.86zm7.25 5.476c.463.188.82.468 1.07.84.25.372.375 1.26.375 2.66 0 1.021-.099 1.774-.297 2.258-.198.484-.583.881-1.156 1.191-.573.31-1.341.465-2.305.465-.937 0-1.68-.148-2.226-.445-.547-.297-.94-.69-1.176-1.18-.237-.49-.356-1.304-.356-2.445 0-.766.059-1.43.176-1.992.117-.563.486-1.013 1.106-1.352a1.835 1.835 0 01-.88-.894c-.195-.41-.292-.929-.292-1.559 0-1.089.302-1.905.906-2.45.604-.543 1.508-.816 2.71-.816 1.392 0 2.352.29 2.884.868.531.578.797 1.403.797 2.476 0 .682-.088 1.175-.262 1.477-.175.302-.533.601-1.074.898zm-1.774-2.719c0-.427-.038-.71-.113-.847-.076-.138-.22-.207-.434-.207-.208 0-.349.074-.422.222-.072.149-.109.426-.109.832v.961c0 .38.042.644.125.79.083.145.224.218.422.218.208 0 .349-.071.422-.215.073-.143.11-.439.11-.886v-.868zm.063 5.258c0-.484-.05-.806-.149-.965-.099-.159-.255-.238-.468-.238-.209 0-.359.077-.45.23-.09.154-.136.478-.136.973v1.64c0 .548.05.9.152 1.055.102.157.262.235.48.235.224 0 .375-.08.454-.238.078-.16.117-.517.117-1.075v-1.617zm4.18-2.633h2.804v-2.812h1.906v2.812h2.82v1.907h-2.82v2.797h-1.906V21.64h-2.805v-1.907z'
					fill='#1B1E25'
					filter='url(#a)'
				/>
			</g>
		</svg>
	);
};

export default Forum;
