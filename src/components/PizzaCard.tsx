"use client";

import { usePizzaData } from "../store/store";

import data from "@/src/data/pizza.json";
import Card from "./UI/Card";
import { useEffect } from "react";

export default function PizzaCard() {
    const { pizza, filteredPizza, setPizza } = usePizzaData();

    useEffect(() => {
        setPizza(data);
    }, []);

    return (
        <ul className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredPizza.map((pizza) => (
                <Card key={pizza.id} pizza={pizza} />
            ))}
        </ul>
    );
}
