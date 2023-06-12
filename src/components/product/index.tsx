import { CardProduct } from "../../assets/style/cards/cardProduct";

export default function Produc({ e }: any) {
  return (
    <CardProduct>
      <img src={e.image} alt="" />
      <p>{e.name}</p>
      <span>$ {e.price}</span>
    </CardProduct>
  );
}
