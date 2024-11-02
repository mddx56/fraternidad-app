import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Pen, Settings, Trash2 } from "lucide-react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import SuspenseContent from "../../containers/SuspenseContent";
import { getAllUsers } from "../../services/user-service";
import { UserAdminType } from "../../types/user-type";
import { QUERY_KEY, ROLE } from "../../utils/constant";
import TitleCard from "../common/components/Cards/TitleCard";

interface PropsSideButton {
  onClickBtn: () => void;
}

const TopSideButtons = ({ onClickBtn }: PropsSideButton) => {
  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => {
          onClickBtn();
        }}
      >
        Agregar
      </button>
    </div>
  );
};

function UserAdmin() {
  const navigate = useNavigate();

  //const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery<UserAdminType[], Error>(
    [QUERY_KEY.USERS],
    getAllUsers,
    {
      refetchInterval: 1500,
    }
  );

  if (isLoading) {
    return <SuspenseContent />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const onClickAdd = () => {
    navigate("/app/useradd");
  };

  /*const updateSuspendUser = async (id: string, name: string) => {
    suspendUser(id).then(() => {
      toast(`Fraterno suspendido. ${name}`, {
        type: "success",
        position: "bottom-right",
      });
      queryClient.invalidateQueries([QUERY_KEY.USERS]);
    });

  };*/

  return (
    <TitleCard
      title="Usuarios"
      topMargin="mt-2"
      TopSideButtons={<TopSideButtons onClickBtn={onClickAdd} />}
    >
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="bg-base-200">
              <th className="w-1/12">Ci</th>
              <th className="w-2/12">Nombre Completo</th>
              <th className="w-1/12">Rol</th>
              <th className="w-1/12">Estado</th>
              <th className="w-1/12"></th>
              <th className="w-1/12"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, k) => {
              return (
                <tr key={k}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="font-bold">{user.username}</div>
                    </div>
                  </td>
                  <td>{user.full_name}</td>
                  <td>
                    {user.role === ROLE.FRATERNO ? (
                      <span className="badge badge-secondary font-semibolds">
                        {user.role}
                      </span>
                    ) : (
                      <span className="badge badge-info font-semibold">
                        {user.role}
                      </span>
                    )}
                  </td>
                  <td>
                    {user.suspend ? (
                      <span className="badge badge-error font-semibold">
                        Suspendido
                      </span>
                    ) : (
                      <span className="badge badge-primary font-semibold">
                        Activo
                      </span>
                    )}
                  </td>
                  <td>
                    {/*<input
                      type="checkbox"
                      className="toggle toggle-primary"
                      defaultChecked={user.suspend}
                      onClick={() => updateSuspendUser(user.id, user.full_name)}
                    />*/}

                  </td>
                  <td>
                    <div className="flex justify-center space-x-1">
                      <Menu>
                        <MenuButton className="btn btn-primary btn-sm">
                          <Settings className="size-4" />
                        </MenuButton>

                        <MenuItems
                          transition
                          anchor="bottom"
                          className="w-52 origin-top-right rounded-xl border text-sm/6 text-base transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                        >
                          <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-base/10">
                              <Pen className="size-4" />
                              Ver
                            </button>
                          </MenuItem>
                          <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-base/10">
                              <Trash2 className="size-4" />
                              Update
                            </button>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TitleCard>
  );
}
export default UserAdmin;
