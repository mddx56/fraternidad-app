import { useQuery } from 'react-query';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { getAllFraters } from '../../services/user-service';
import { UserType } from '../../types/UserType';
import { QUERY_KEY } from '../../utils/constant';
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

const handleOnSearch = (keyword: string, results: Item[]): void => {
    console.log(keyword, results)
}

const handleOnHover = (result: Item) => {
    // the item hovered
    console.log(result)
}

const handleOnSelect = (item: Item) => {
    // the item selected
    console.log(item)
}

const handleOnFocus = () => {
    console.log('Focused')
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

export function SelectFraterno() {
    let datos: Item[] = []
    const { data } = useQuery<UserType[], Error>(
        [QUERY_KEY.USERS],
        getAllFraters
    );

    if (data)
        datos = data.map((user: UserType) => ({ "id": user.id, "ci": user.username, "name": user.full_name }))

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
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            autoFocus
                            formatResult={formatResult}
                            placeholder={'Ingrese Ci o Nombre'}
                            showNoResultsText={"No hay resultados 😬"}
                            fuseOptions={{
                                keys: ['ci', 'name'],
                            }}
                        />
                        : <span className="loading loading-dots loading-lg"></span>}
                </div>
                <div className='grid place-items-center'>
                    <button className='btn btn-primary'>Siguiente</button>
                </div>
            </div>
        </TitleCard>
    )
}