import PizzaCard from "@/src/components/PizzaCard";
import Category from "@/src/components/UI/Category";
import Sort from "@/src/components/UI/Sort";

export default function Home() {
    return (
        <section className="">
            <div className="flex flex-col items-end justify-between gap-2 sm:flex-row sm:items-center">
                <Category />
                <Sort />
            </div>

            <div className="my-5">
                <h1>Все пиццы</h1>
            </div>

            <PizzaCard />
        </section>
    );
}
