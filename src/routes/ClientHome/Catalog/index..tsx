import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as ProductService from '../../../Services/product-service';


export default function Catalog() {
  return (
    <main>
      <section id="catalog-details-section " className="dsc-container">
        <SearchBar />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            ProductService.findAll().map(
              product => <CatalogCard key={product.id} product={product} />)
          }
        </div>

        <ButtonNextPage text="Carregar Mais" />
      </section>
    </main>
  );
}
