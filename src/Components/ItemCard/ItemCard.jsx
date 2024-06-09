import React from 'react'
import CardImage from '../../assets/images/Rectangle 1.png'
import './ItemCard.scss'

const ItemCard = () => {
	return (
		<div className='Card'>
			<div className='Card_inner'>
				<section>
					<img src={CardImage} alt="Image" />
				</section>
				<section>
					<p>
						Lorem impsum
					</p>
					<h2>
						346 com
					</h2>
				</section>
			</div>
		</div>
	)
}

export default ItemCard