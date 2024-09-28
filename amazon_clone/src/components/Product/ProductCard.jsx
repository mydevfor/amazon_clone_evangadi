import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../../components/DataProvider/DataProvider";

function ProductCard({ product, flex, renderDesc, renderAdd , showRemoveItem }) {
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);
  
// console.log(state)

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div

      className={`${styles.card__container} ${
        flex ? styles.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={styles.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/*count  */}
          <small>{rating?.count}</small>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
            {/* price */}
            <CurrencyFormat amount={price} />
        
        </div>
        <div>
        {
          showRemoveItem && (
            <button className={styles.button}
              onClick={() => dispatch({ type: Type.REMOVE_ITEM_IMMEDIATELY, id })}
              style={{backgroundColor: "red", color: "white",padding:"5px"}}
            
          >
              remove from cart
            </button>
          )
        }
        </div>
        </div>
        {renderAdd && (
          <button className={styles.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
