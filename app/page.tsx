import Catalog from "./components/Catalog/Catalog";
import Categories from "./components/Categories/Categories";
import CustomersReview from "./components/CustomersReview/CustomersReview";
import ExclusiveOffers from "./components/ExclusiveOffers/ExclusiveOffers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MostSearched from "./components/MostSearched/MostSeached";
import OficialBrands from "./components/OficialBrands/OficialBrands";
import { CartProvider } from "./context/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <div className="flex flex-col">
        <Header />
        <Hero />
        <MostSearched />
        <OficialBrands />
        <Categories />
        <Catalog />
        <CustomersReview />
        <ExclusiveOffers />
        <Footer />
      </div>
    </CartProvider>
  );
}
