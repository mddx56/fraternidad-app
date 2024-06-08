type Props = {
    styleClass: string,
    children?: string | JSX.Element | JSX.Element[]
}

function Subtitle({ styleClass, children }: Props) {
    return (
        <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
    )
}

export default Subtitle