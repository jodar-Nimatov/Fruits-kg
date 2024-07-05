import React, { useEffect, useState } from "react";
import "./Menu.scss";
import MenuHeader from "../MenuHeader/MenuHeader";
import ItemCard from "../ItemCard/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setFilter,
  selectFilteredProducts,
  fetchCatalogs,
  selectCatalogs,
} from "../../features/productsSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const products = useSelector(selectFilteredProducts);
  const catalogs = useSelector(selectCatalogs);
  const filter = useSelector((state) => state.products.filter);
  const error = useSelector((state) => state.products.error);
  const [all, setAll] = useState(true);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
      dispatch(fetchCatalogs());
    }
  }, [status, dispatch]);

  const handleFilterChange = (categoryId) => {
    dispatch(setFilter(categoryId));
  };
  const removeDuplicatesById = (array) => {
    const uniqueIds = new Set();
    return array.filter(item => {
      if (uniqueIds.has(item.id)) {
        return false; // Duplicate found, filter it out
      } else {
        uniqueIds.add(item.id); // Add id to Set
        return true; // Unique item, keep it in the filtered array
      }
    });
  };
  
  return (
    <div className="Menu">
      <div className="Menu_inner">
        <div className="container">
          <MenuHeader />
          <ul className="MenuHeader_inner_bellow_list">
            <li
              className={`MenuHeader_inner_bellow_list_item ${
                all ? "active" : ""
              }`}
              onClick={() => {
                setAll(true);
                handleFilterChange(0);
              }}
            >
              Все
            </li>
            {catalogs?.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`MenuHeader_inner_bellow_list_item ${
                    filter === item?.name ? "active" : ""
                  }`}
                  onClick={() => {
                    setAll(false);
                    handleFilterChange(item?.id);
                  }}
                >
                  {item?.description}
                </li>
              );
            })}
          </ul>
          <div className="Menu_inner_row">
            {status === "loading" && <p>Loading...</p>}
            {status === "succeeded" && (
              <ul>
                {removeDuplicatesById(products)?.map((product) => (
                  <ItemCard
                    key={product.id}
                    id={product.id}
                    price={product.price}
                    title={product.name}
                    img={product.image}
                  />
                ))}
              </ul>
            )}
            {status === "failed" && <p>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
