import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { toast } from "react-toastify";
import * as yup from "yup";
import { AlertWarnig } from "../../components/AlertWarning";
import { createEvento, getAllTipoEvento } from "../../services/evento-service";
import { getAllFraters } from "../../services/user-service";
import { EventoInput, TipoEventoType } from "../../types/EventoType";
import { UserType } from "../../types/UserType";
import { Estados_Evento, QUERY_KEY } from "../../utils/constant";
import { esFinDeSemana } from "../../utils/dateFormat";
import TitleCard from "../common/components/Cards/TitleCard";
import { useState } from "react";


type Item = {
  id: string;
  ci: string,
  name: string;
}



function EventoAdd() {

  let fraternos: Item[] = []
  const { data: fraters } = useQuery<UserType[], Error>(
    [QUERY_KEY.USERS],
    getAllFraters
  );

  if (fraters)
    fraternos = fraters.map((user: UserType) => ({ "id": user.id, "ci": user.username, "name": user.full_name }))

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data } = useQuery<TipoEventoType[], Error>(
    [QUERY_KEY.TIPOEVENTO],
    getAllTipoEvento
  );

  const [userId, setUserId] = useState<string | undefined>(undefined);

  const defaultValues: EventoInput = {
    fecha: "",
    hora_inicio: "",
    hora_fin: "",
    descripcion: "",
    // estado_reserva: Estados_Evento.PENDIENTE,
    tipo_evento: 0,
    // user: ""
  };

  const validationSchema = yup.object({
    fecha: yup.string().required("Fecha de evento es requerido"),
    hora_inicio: yup.string().required("inicio de hora es requerida"),
    hora_fin: yup.string().required("fin de hora requerido"),
    descripcion: yup.string().required("Ingrese una descripcion"),
    tipo_evento: yup.number().required("Tipo de evento es requerido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const mutation = useMutation(createEvento, {
    onSuccess: (data) => {
      console.log(data.id);
      queryClient.invalidateQueries([QUERY_KEY.EVENTOS]);
      navigate(-1);
      reset();
      toast.success("Evento agregado");
    },
    onError: (data) => {
      console.log(data);
      toast.error("No registrado..");
    },
  });

  const onSubmitHandler = (values: EventoInput) => {
    try {
      values.user = userId;
      values.estado_reserva = Estados_Evento.PENDIENTE;
      console.log(values);
      mutation.mutate(values);
    } catch (error) {
      console.log(error);
    }
  };

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
    setUserId(item.id);
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item: Item) => {
    return (
      <>
        <span className='w-full px-4 py-0 block text-sm text-left'>
          {item.ci}<span className='font-bold'>, </span>{item.name}
        </span>
      </>
    )
  }


  return (
    <TitleCard title="Agregar Evento">
      <form className="px-32" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="form-control w-full mb-2">
          <label className="label" htmlFor="fecha">
            Fraterno
          </label>
          <ReactSearchAutocomplete
            items={fraternos}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            styling={{
              backgroundColor: "#f5f5f4",

            }}
            formatResult={formatResult}
            placeholder={'Ingrese Ci o Nombre'}
            showNoResultsText={"No hay resultados 😬"}
            fuseOptions={{
              keys: ['ci', 'name'],
            }}
          />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <div className="form-control w-full mb-2">
            <label className="label" htmlFor="fecha">
              Fecha
            </label>
            <input
              className="input input-bordered w-full"
              id="fecha"
              type="date"
              {...register("fecha", { required: true })}
            />
            {errors.fecha && <AlertWarnig titleAlert={errors.fecha.message} />}
          </div>
          <div className="form-control w-full mb-2">
            <label className="label" htmlFor="tipo_evento">
              Tipo de evento
            </label>
            <select
              className="select select-bordered w-full"
              id="tipo_evento"
              {...register("tipo_evento", { required: true })}
            >
              <option disabled selected>
                Elija Tipo de evento
              </option>
              {data &&
                data.map((es: TipoEventoType) => (
                  <option key={es.id} value={es.id}>
                    {es.nombre},{" "}
                    {esFinDeSemana() ? es.costo_finsemana : es.costo_entresemana}{" "}
                    Bs.
                  </option>
                ))}
            </select>
            <span className="errors">
              {errors.tipo_evento && "Elija un Tipo de evento"}
            </span>
          </div>

        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <div className="form-control w-full mb-2">
            <label className="label" htmlFor="hora_inicio">
              Hora de inicio
            </label>
            <input
              className="input input-bordered w-full"
              id="hora_inicio"
              type="time"
              {...register("hora_inicio", { required: true })}
            />
            {errors.hora_inicio && (
              <AlertWarnig titleAlert={errors.hora_inicio.message} />
            )}
          </div>
          <div className="form-control w-full mb-2">
            <label className="label" htmlFor="hora_fin">
              Hora Fin
            </label>
            <input
              className="input input-bordered w-full"
              id="hora_fin"
              type="time"
              {...register("hora_fin", { required: true })}
            />
            {errors.hora_fin && (
              <AlertWarnig titleAlert={errors.hora_fin.message} />
            )}
          </div>
        </div>


        <div className="form-control w-full mb-2">
          <label className="label" htmlFor="descripcion">
            Descripcion
          </label>
          <input
            className="input input-bordered w-full"
            id="descripcion"
            type="text"
            placeholder="Escriba una descripcion"
            {...register("descripcion")}
          />
          {errors.descripcion && (
            <AlertWarnig titleAlert={errors.descripcion.message} />
          )}
        </div>


        <div className="flex justify-between mt-8">
          {mutation.isLoading ? (
            "Agregando evento..."
          ) : (
            <>
              {mutation.isError ? <div>error al agregar..</div> : null}

              <button className="btn btn-primary" type="submit">
                Guardar
              </button>
            </>
          )}
          <Link
            to={"/app/events"}
            className="btn btn-secondary"
            type="button"
          >
            Atras
          </Link>
        </div>
      </form>
    </TitleCard>
  );
}

export default EventoAdd;
