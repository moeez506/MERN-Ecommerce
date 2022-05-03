import React, { Fragment, useEffect } from "react";
import { BiMouse } from "react-icons/bi";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

// const product = {
//   name: "Brown Tshirt",
//   image: [
//     {
//       url: "https://cdn.shopify.com/s/files/1/2219/4051/collections/T-Shirts_Sub_Category_Banner.jpg?v=1572244644",
//     },
//   ],
//   price: "3000",
//   _id: "moeez",
// };

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"OneMoreSTEP"} />
          <div className="banner">
            <p>Welcome to <span>One More STEP</span></p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <BiMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
