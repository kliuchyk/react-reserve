import axios from "axios";
import ProductSummary from "../components/Product/ProductSummary";
import ProductAttributes from "../components/Product/ProductAttributes";

function Product({ product }) {
  console.log("product", product);
  return (
    <>
      <ProductSummary {...product} />
      <ProductAttributes {...product} />
    </>
  );
}

Product.getInitialProps = async (ctx) => {
  const {
    query: { _id },
  } = ctx;

  const url = `http://localhost:3000/api/product`;
  const payload = { params: { _id } };
  const productDetails = await axios.get(url, payload);

  return { product: productDetails.data };
};

export default Product;
