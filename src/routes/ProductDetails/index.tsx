import './styles.css';
import ButtonInverse from "../../components/buttonInverse";
import ButtonPrimary from "../../components/buttonPrimary";
import HeaderClient from "../../components/headerClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from '../../models/product';

const product: ProductDTO =  {
  id: 2,
  name: "Smart TV",
  description: "Esta TV é muito bonita",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
      id:2,
      name: "Eletrônicos"
    },
    {
      id:3,
      name: "Computadores"
    }
  ]

}

export default function ProductDetails() {

    return(
        <>
        <HeaderClient />
        <main>
          <section id="product-details-section" className="dsc-container">
            <ProductDetailsCard product={product} />
            <div className="dsc-btn-page-container">
              <ButtonPrimary /> 
              <ButtonInverse />
            </div>
          </section>
        </main>
      </>
    );
}