import { Card } from "antd";

interface Props {
  id: string;
  name: string;
  price: number;
  description: string;
}
const ProductListItem = ({ id, name, price, description }: Props) => {
  return <Card title={name}>${price}</Card>;
};

export default ProductListItem;
