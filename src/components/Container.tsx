import { ContainerProps } from "../types/components"

function Container({ children, background }: ContainerProps) {
    return (
        <div className={`container ${background}`}>
            {children}
        </div>
    )
}

export default Container