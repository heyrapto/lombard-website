import Image from "next/image"
import Button from "./button"
import { PiX } from "react-icons/pi"

const Banner = () => {
    return (
        <div className="bg-blue-200 p-5 w-full">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Image
                        src="/images/btc-icon.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                    <p className="font-semibold text-[1.3rem]">Lombard Acquires BTC.b from Ava Labs in First-of-Its-Kind Deal</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="dark" hasIcon={false}>Read more</Button>
                    <PiX size={40} />
                </div>
            </div>
        </div>
    )
}

export default Banner