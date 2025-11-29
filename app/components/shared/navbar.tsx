import { navItems } from "@/constants";
import Button from "../ui/button";
import Image from "next/image";
import Banner from "../ui/banner";

const Navbar = () => {
    return (
        <header className="flex flex-col">
            <Banner />
            <nav className="bg-transparent text-white w-full fixed mt-35 z-9999">
                <div className="flex justify-between items-center mx-auto max-w-[1440px] py-6">
                    <div className="flex items-center gap-10">
                        <Image
                        src="/lombard-logo.png"
                        alt="Logo"
                        width={150}
                        height={150}
                        />
                        <ul className="flex items-center gap-5">
                            {navItems.map((n, i) => (
                                <li key={i} className="text-[1.3rem]">
                                    <a href="">{n.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button variant="primary" hasIcon>Launch app</Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;