import PizzaCard from "../components/PizzaCard";
import Category from "../components/UI/Category";
import Sort from "../components/UI/Sort";

export default function Home() {
    return (
        <div className="">
            <div className="flex flex-col  gap-2 sm:flex-row justify-between items-end sm:items-center mt-4 md:mt-10 ">
                <Category />
                <Sort />
            </div>

            <h1>Все пиццы</h1>

            <PizzaCard />
        </div>
    );
}
