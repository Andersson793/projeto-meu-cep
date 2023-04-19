import { IMaskInput } from 'react-imask';
import { useRef } from "react";
import FormButtons from './FormButtons';

//Formulario de pesquisa por por CEP
export default function FormCep() {

    const ref = useRef(null);
    const inputRef = useRef(null);

    /*

        onAccept={
            (value) => console.log(value)
        }

    */

    return(
        <>
            <label>Coloque aqui um CEP para pesquisar</label>
            <div className="flex justify-center items-center py-9 mb-8">

                <IMaskInput
                    className="p-2 outline-none focus:border-b-slate-600 bg-slate-600/5 rounded-md text-center"
                    mask={"00000-000"}
                    ref={ref}
                    inputRef={inputRef}
                    placeholder='00000-000'
                />

            </div>
            <FormButtons value="Pesquisar por endereço" route="/" />
        </>
    )
}