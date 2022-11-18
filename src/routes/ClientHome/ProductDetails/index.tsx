import "./styles.css";
import ButtonInverse from "../../../components/buttonInverse";
import ButtonPrimary from "../../../components/buttonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../Services/product-service';
import { useParams } from "react-router-dom";

export default function ProductDetails() {

  const params = useParams();

  const product = productService.findById(Number(params.productId));

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {
          product &&
          <ProductDetailsCard product={product} />
        }
        
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonInverse text="Início" />
        </div>
      </section>
    </main>
  );
}
