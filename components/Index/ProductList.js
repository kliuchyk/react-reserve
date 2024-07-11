import { Card } from "semantic-ui-react";

function ProductList({ products }) {
  const mapProductsToItems = (products) => {
    return products.map((product) => ({
      header: product.name,
      image:
        "https://pozaszlakiem4x4.pl/wp-content/uploads/2021/04/chair-2@2x-1.jpg",
      meta: `$${product.price}`,
      color: "teal",
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`,
    }));
  };

  return (
    <Card.Group
      stackable
      itemsPerRow={3}
      centered
      items={mapProductsToItems(products)}
    />
  );
}

export default ProductList;
