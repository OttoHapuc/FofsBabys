import Produc from "../../components/product";
import { listProducts, Product } from "../../utils/itemsProduct";

export default function Shop() {
  return (
    <>
      {listProducts.map((e: Product) => (
        <Produc key={e.image} e={e} />
      ))}
    </>
  );
}
