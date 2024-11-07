import React from 'react'

const MovingStrokeText = ({text, w, h}) => {
	return (
		<svg viewBox={`100 0 500 200`}>
			<symbol id="s-text">
				<text text-anchor="middle" x="50%" y="80%">{text}</text>
			</symbol>

			<g class="g-ants">
				<use xlinkHref="#s-text" class="text-copy"></use>
				<use xlinkHref="#s-text" class="text-copy"></use>
				<use xlinkHref="#s-text" class="text-copy"></use>
				<use xlinkHref="#s-text" class="text-copy"></use>
				<use xlinkHref="#s-text" class="text-copy"></use>
			</g>
		</svg>
	)
}

export default MovingStrokeText