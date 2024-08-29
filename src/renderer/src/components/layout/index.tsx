import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../header";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Sidebar } from "../sidebar";
import { useEffect, useState } from "react";

export function Layout() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        function handleNavigate() {
            navigate("/create")
        }

        const unsub = window.api.onNewCustomer(handleNavigate)

        return () => {
            unsub();
        }

    }, []);

    return (
        <Collapsible.Root
            defaultOpen
            className="h-screen w-screen bg-gray-950 text-slate-100 flex"
            onOpenChange={setIsSideBarOpen}
        >
            <Sidebar/>
            <div className="flex-1 flex flex-col max-h-screen">
                <Header isSideBarOpen={isSideBarOpen} />

                <Outlet />
            </div>
        </Collapsible.Root>
    )
}