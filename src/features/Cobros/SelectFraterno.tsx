import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { getAllFraters } from '../../services/user-service';
import { useCobroStore } from '../../stores/cobro-store';
import { UserType } from '../../types/user-type';
import { COBRO, QUERY_KEY } from '../../utils/constant';
import TitleCard from "../common/components/Cards/TitleCard";

export function Steeps() {
    return (
        <div className="grid place-items-center">
            <ul className="steps">
                <li className="step"></li>
                <li className="step step-primary">Elegir Fraterno</li>
                <li className="step"></li>
            </ul>
        </div>
    )
}

type Item = {
    id: string;
    ci: string,
    name: string;
}

export function SelectFraterno() {
    const navigation = useNavigate()
    const setFraterno = useCobroStore((state) => state.setFraterno);

    const [error, setError] = useState<boolean>(true)
    const [idFrater, setIdFrater] = useState<string>("")

    let datos: Item[] = []
    const { data } = useQuery<UserType[], Error>(
        [QUERY_KEY.FRATERS],
        getAllFraters
    );

    if (data)
        datos = data.map((user: UserType) => ({ "id": user.id, "ci": user.username, "name": user.full_name }))

    const handleOnSearch = (keyword: string, results: Item[]): void => {
        console.log(keyword, results)
    }

    const handleOnSelect = (item: Item) => {
        setError(false)
        setIdFrater(item.id)
        setFraterno(item.id)
    }

    const onClear = () => {
        setError(true)
        setIdFrater("")
    }

    const formatResult = (item: Item) => {
        return (
            <>
                <span className='block text-sm text-left'>
                    {item.ci}<span className='font-bold'>, </span>{item.name}
                </span>
            </>
        )
    }

    const cobroOnClick = () => {
        const tipo = useCobroStore.getState().tipoCobro;
        console.log("aqui noo cae", idFrater)
        if (typeof idFrater === 'string' && idFrater === "") {
            setError(true)
        }
        if (!error) {
            if (tipo === COBRO.EXTRAORD) {
                navigation('/app/extraord')
            }
            if (tipo === COBRO.MENSUALIDAD) {
                navigation('/app/mesualidad')
            }
        }
    }

    return (
        <TitleCard title="Fraterno" topMargin="mt-2">
            <Steeps />
            <div className="grid h-56">
                <div className="px-10 py-4 md:px-4 md:py-2 sm:p-0">
                    {datos ?
                        <ReactSearchAutocomplete
                            className='sm:p-0'
                            items={datos}
                            onSearch={handleOnSearch}
                            onSelect={handleOnSelect}
                            autoFocus
                            formatResult={formatResult}
                            placeholder={'Ingrese Ci o Nombre'}
                            showNoResultsText={"No hay resultados 😬"}
                            onClear={onClear}
                            fuseOptions={{
                                keys: ['ci', 'name'],
                            }}
                        />
                        : <span className="loading loading-dots loading-lg"></span>}
                </div>
                <div className='grid place-items-center'>
                    {error ? <span className='text-red-600 text-pretty'>Ingrese Fraterno</span> : ""}
                    <button className='btn btn-primary' onClick={cobroOnClick}>Siguiente</button>
                </div>
            </div>
        </TitleCard>
    )
}