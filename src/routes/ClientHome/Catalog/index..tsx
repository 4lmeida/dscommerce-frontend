import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as ProductService from '../../../Services/product-service';
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import axios from "axios";


export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products?size=12")
      .then(response => {
        setProducts(response.data.content);
      })
  }, [])

  return (
    <main>
      <section id="catalog-details-section " className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />)
          }
        </div>

        <ButtonNextPage text="Carregar Mais" />
      </section>
    </main>
  );
}
