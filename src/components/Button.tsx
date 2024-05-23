import { useState } from "react";

type Props = {
    onClick:()=>void;
}

export const Button = ({onClick}:Props) => {

    const [show, setShow] = useState(false)


    return(
            <button onClick={onClick}
            className={` text-white ml-5
                ${show == false ? 'bg-slate-950':'bg-blue-400'}
            `}
            >Clique Aqui</button>
    )
}