import React from 'react';
import './ItemCard.scss';

const ItemCard = ({ id, title, img, price }) => {
	return (
		<div className='Card' key={id}>
			<div className='Card_inner'>
				<section>
					<img src={img} alt="Image" />
				</section>
				<section>
					<p>
						{title}
					</p>
					<h2>
						{price} com
					</h2>
				</section>
			</div>
		</div>
	)
}

export default ItemCard