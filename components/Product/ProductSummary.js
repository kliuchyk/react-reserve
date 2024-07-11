import { Item, Label } from "semantic-ui-react";
import AddProductToCart from "./AddProductToCart";

function ProductSummary({ name, _id, price, sku }) {
  return (
    <Item.Group>
      <Item>
        <Item.Image
          size="medium"
          src="https://pozaszlakiem4x4.pl/wp-content/uploads/2021/04/chair-2@2x-1.jpg"
        />
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>
            <p>${price}</p>
            <Label>SKU: {sku}</Label>
          </Item.Description>
          <Item.Extra>
            <AddProductToCart productId={_id} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default ProductSummary;
