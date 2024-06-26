import { ReactNode } from "react";

type Props = {
    styleClass: string;
    children: ReactNode;
}

function ErrorText({ styleClass, children }: Props) {
    return (
        <p className={`text-center  text-error ${styleClass}`}>{children}</p>
    )
}

export default ErrorText