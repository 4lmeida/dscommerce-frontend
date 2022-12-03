import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as ProductService from '../../../Services/product-service';
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";


export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [productName, setProductName] = useState("");

  useEffect(() => {
    ProductService.findPageRequest(0, productName)
      .then(response => {
        setProducts(response.data.content);
      })
  }, [productName]);

  function handleSearch(searchText: string) {
    setProductName(searchText);
  }

  return (
    <main>
      <section id="catalog-details-section " className="dsc-container">
        <SearchBar onSearch={handleSearch}/>

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
