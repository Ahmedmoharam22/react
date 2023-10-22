import React, { Fragment } from "react";
import MainSlider from "./MainSlider";
import img_1 from "../../../assets/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.avif";
import img_2 from "../../../assets/photo-1546069901-ba9599a7e63c.jpeg";
import styles from "./Home.module.css";
import CategoriesSlider from "./CategoriesSlider";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../../features/Products/ProductsList";
export default function Home() {
  const products = useLoaderData();
  return (
    <Fragment>
      <section className={styles.mainslider}>
        <MainSlider />
        <div className={styles.images}>
          <div style={{ width: "350px", height: "280px" }}>
            <img
              src={img_1}
              alt=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ width: "350px", height: "350px" }}>
            <img
              src={img_2}
              alt=""
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </section>
      <section className={`${styles.categoriesslidr} container`}>
        <CategoriesSlider />
      </section>
      <section className="container">
        <ProductsList products={products} />
      </section>
    </Fragment>
  );
}

export async function loader() {
  const res = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/products"
  );
  const {
    data: { data },
  } = res;
  return data;
}
