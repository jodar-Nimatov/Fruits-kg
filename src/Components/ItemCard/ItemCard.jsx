import { useNavigate } from 'react-router-dom';
import './ItemCard.scss';
import React from 'react';

const ItemCard = ({id, title, img, price }) => { 	
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/item/${id}`);
    };

    return (
        <div className='Card' key={id} onClick={handleCardClick}>
            <div className='Card_inner'>
                <section className='section1'>
                    <img className='card-image' src={img} alt="Image" />
                </section>
                <section>
                    <p>{title}</p>
                    <h2>{price} com</h2>
                </section>
            </div>
        </div>
    );
};

export default ItemCard;
