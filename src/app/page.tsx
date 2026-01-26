import Category from "../components/UI/Category";
import Sort from "../components/UI/Sort";

export default function Home() {
    return (
        <div className="flex justify-between items-center mt-10 ">
            <Category />
            <Sort />
        </div>
    );
}
