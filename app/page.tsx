import Catalog from "./components/Catalog/Catalog";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MostSearched from "./components/MostSearched/MostSeached";
import OficialBrands from "./components/OficialBrands/OficialBrands";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <MostSearched />
      <OficialBrands />
      <Categories />
      <Catalog />
    </div>
  );
}
