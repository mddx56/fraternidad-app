interface PropEventCard {
    title: string;
    description: string;
    price: number;
}

function EventCard({ title, description, price }: PropEventCard) {
    return (
        <>
            <div className="card w-full p-6 bg-base-100 shadow-xl mt-2">
                <figure className="px-2 pt-2">
                    <img src="https://img.freepik.com/vector-gratis/fondo-celebracion-bandera-fiesta-colorida-confeti-cayendo_1314-2538.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h3 className="card-title text-xl font-bold mt-2">{title}</h3>
                    <p className="text-gray-500 text-sm mt-2 h-16 text-center overflow-auto">{description}</p>
                    <div className="flex items-center justify-between gap-2 mt-2">
                        <span className="font-bold text-lg">{price} Bs. </span>
                        <button className="btn btn-primary py-2 px-4 rounded-full font-bold">Reservar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventCard;