import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as ProductService from "../../../services/product-service";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import { isAuthenticated } from "../../../services/auth-service";

type QueryParams = {
  page: number;
  name: string;
};

export default function Catalog() {
  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueeryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
    console.log("AUTENTICADO", isAuthenticated());

    ProductService.findPageRequest(queryParams.page, queryParams.name).then(
      (response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      }
    );
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueeryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueeryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  return (
    <main>
      <section id="catalog-details-section " className="dsc-container">
        <SearchBar onSearch={handleSearch} />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>

        {   !isLastPage &&
          <div onClick={handleNextPageClick}>
            <ButtonNextPage text="Carregar Mais" />
          </div>
        }
      </section>
    </main>
  );
}
