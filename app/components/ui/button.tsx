import { ReactNode } from "react"
import { BsArrowUpRight } from "react-icons/bs"

interface ButtonProps {
    children: ReactNode
    variant: "primary" | "secondary" | "dark" | "grey"
    hasIcon?: boolean
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const varaintClases = `
    ${props.variant === "primary" ? "bg-green-500 text-black p-5" : 
    props.variant === "secondary" ? "bg-transparent text-underline p-5" : 
    props.variant === "dark" ? "bg-black text-white p-3" : 
    props.variant === "grey" ? "bg-gray-600 text-white p-3" : 
    ""}`
    const baseClases = "rounded-[50px] w-fit inline-flex items-center gap-3 text-[1.3rem] cursor-pointer"
  return (
    <button className={`${baseClases} ${varaintClases}`}>
        {props.children}
        {props.hasIcon && (
            <BsArrowUpRight className="w-4 h-4" />
        )}
    </button>
  )
}

export default Button