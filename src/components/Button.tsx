import { useState } from "react";

type Props = {
    onClick:()=>void;
    mudar:boolean;
}

export const Button = ({onClick,mudar}:Props) => {

    const [show, setShow] = useState(false)


    return(
            <button 
            onClick={onClick}
            
            className={`
            ${mudar == true ? ' text-white ml-5 bg-slate-500 p-2 rounded-md'
            :'text-black bg-blue-400 ml-5 p-2 rounded-md'}
            `}
            >Clique Aqui </button>
    )
}