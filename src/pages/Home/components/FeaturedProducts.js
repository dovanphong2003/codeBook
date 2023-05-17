import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services/productService";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchProductions() {
            try {
                const dataResult = await getFeaturedList();
                setData(dataResult);
            } catch (error) {
                toast.error(error.message, {
                    closeButton: true,
                    position: "bottom-center",
                    autoClose: 5000,
                    closeOnClick: false,
                });
            }
        }
        fetchProductions();
    }, []);
    return (
        <section className="my-20">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
                Featured eBooks
            </h1>
            <div className="flex flex-wrap justify-center lg:flex-row">
                {data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};
