import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchProductById,
  selectProduct,
  selectProductLoading,
  selectProductError,
} from "../../features/productSlice";
import "./itemDetails.scss";
import MenuHeader from "../MenuHeader/MenuHeader";
import ModalBasket from "../ModalBasket/ModalBasket";

const ItemDetail = () => {
  const [active, setActive] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="Page">
      <div className="Page_inner container">
      <div>
        <ModalBasket 
        active={active}
        setActive={setActive}
        />
      </div>
      <div className="Page_inner">
        <MenuHeader />
        <div className="block">
          <div className="img">
            <img src={product.image} alt="item image" />
          </div>
          <div className="Card_text">
            <div className="q1">
              <h2>{product.category}</h2>
              <p>{product.description}</p>
            </div>
            <div className="q2 text_price">
              <h1>Цена: </h1> <h3> {product.price} ⃀</h3>
            </div>
          </div>
        </div>
        <div className="basket">
          <button 
            className="basket_button"
            onClick={() => setActive(true)}
          >
            Добавить в корзину</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ItemDetail;
