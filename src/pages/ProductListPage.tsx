import ProductItem from "../components/ProductListItem";
import styles from "./product-list-page.module.scss";
import { Row, Col } from "antd";

const ProductListPage = () => {
  type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
  };

  const products: Product[] = [
    {
      id: "1",
      name: "Laptop",
      price: 1500,
      description: "A high-performance laptop for work and gaming.",
    },
    {
      id: "2",
      name: "Smartphone",
      price: 800,
      description: "A latest-generation smartphone with a stunning display.",
    },
    {
      id: "3",
      name: "Wireless Headphones",
      price: 200,
      description: "Noise-cancelling wireless headphones for an immersive sound experience.",
    },
    {
      id: "4",
      name: "Smartwatch",
      price: 250,
      description: "A smartwatch with fitness tracking and notification features.",
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 100,
      description: "Portable Bluetooth speaker with excellent sound quality.",
    },
  ];

  return (
    <Row gutter={[16, 16]} className={styles["product-list-page"]}>
      {products.map((product) => (
        <Col span={8} className={styles["product-item-column"]}>
          <ProductItem key={product.id} {...product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductListPage;
