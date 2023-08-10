type Props = {
    monthNumber: number;
}

function Month({ monthNumber }: Props) {
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    if (monthNumber >= 1 && monthNumber <= 12) {
        const monthName = months[monthNumber - 1];
        return <div>{monthName}</div>;
    } else {
        return <div>Mes inválido</div>;
    }
}

export default Month;
