import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MostSearched from "./components/MostSearched/MostSeached";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <MostSearched />
    </div>
  );
}
