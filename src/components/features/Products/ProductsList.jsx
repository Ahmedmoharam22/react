import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import styles from './products.module.css'
export default function ProductsList({products}) {
  return (
    <div>
      <ul className="row list-unstyled row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-5">
        {products?.map((product) => (
          <li key={product._id} className={`${styles.product} col `}>
            <Link to={`/products/${product._id}`}>
              <div className={`${styles.productImg} mb-2`}>
                <img
                  src={product.images[0]}
                  className="object-fit"
                  alt={product.title}
                />
              </div>
              <div className={styles.text}>
                <small className="main-color fs-6">
                  {product.subcategory[0].name}
                </small>
                <h4 className="h6 mb-3 ">
                  {product.title.split(" ").length > 4
                    ? `${product.title.split(" ").slice(0, 4).join(" ")}...`
                    : product.title}
                </h4>
                <div
                  className={`d-flex justify-content-between align-items-center ${styles.footer}`}
                >
                  <p className="mb-0 fw-semibold">{product.price}EGY</p>
                  <span>
                    <AiFillStar /> {product.ratingsAverage}
                  </span>
                </div>
              </div>
              <div className={styles.buttons}>
                <button className={styles.addToCart}>
                  <IoIosAdd />
                </button>
                <button className={styles.addToWishlist}>
                  <AiFillHeart />
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
