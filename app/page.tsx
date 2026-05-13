import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
    </div>
  );
}
