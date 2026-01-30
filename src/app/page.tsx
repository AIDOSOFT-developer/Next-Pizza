import PizzaCard from "../components/PizzaCard";
import Category from "../components/UI/Category";
import Sort from "../components/UI/Sort";

export default function Home() {
  return (
    <div className="">
      <div className="mt-4 flex flex-col items-end justify-between gap-2 sm:flex-row sm:items-center md:mt-10">
        <Category />
        <Sort />
      </div>

      <h1>Все пиццы</h1>

      <PizzaCard />
    </div>
  );
}
