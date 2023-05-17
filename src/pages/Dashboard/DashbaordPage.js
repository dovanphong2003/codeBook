import { DashboardEmpty } from "./components/DashboardEmpty";
import { DashboardCard } from "./components/DashboardCard";
import { useEffect, useState } from "react";
import { getUserOrders } from "../../services";
import { toast } from "react-toastify";
export const DashbaordPage = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        async function getOrders() {
            try {
                const data = await getUserOrders();
                setOrders(data);
            } catch (error) {
                toast.error(error.message, {
                    position: "bottom-center",
                    closeButton: true,
                });
            }
        }
        getOrders();
    }, []);
    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
                    My Dashboard
                </p>
            </section>
            <section>
                {orders &&
                    orders.length &&
                    orders.map((order) => (
                        <DashboardCard key={order.id} order={order} />
                    ))}
            </section>
            <section>
                {orders && !orders.length && <DashboardEmpty />}
                {/** nghia la neu = 0, thi se tra ve false, !fale = true, chueyn sang ben kia se hien thi DashbaordEmpty */}
            </section>
        </main>
    );
};
