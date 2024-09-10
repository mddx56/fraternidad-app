import { UserCountStats } from "@/types/user-type";
import {
  CircleSlash2,
  CreditCard,
  HeartHandshake,
  Puzzle,
  Ribbon,
  UsersRound,
} from "lucide-react";
import { useQuery } from "react-query";
import SuspenseContent from "../../containers/SuspenseContent";
import { getCountUsersStat } from "../../services/user-service";
import { QUERY_KEY } from "../../utils/constant";
import AmountStats from "./components/amount-stats";
import DashboardStats from "./components/dashboard-stats";
import LineCharts from "./components/line-charts";
import PageStats from "./components/page-stats";
import UserChannels from "./components/table-stats";

const statsData = [
  {
    title: "Fraternos",
    value: "0",
    icon: <UsersRound className="w-8 h-8" />,
    description: "",
  },
  {
    title: "Total Sales",
    value: "0",
    icon: <CreditCard className="w-8 h-8" />,
    description: "↗︎",
  },
  {
    title: "Pending Leads",
    value: "0",
    icon: <CircleSlash2 className="w-8 h-8" />,
    description: "↙",
  },
];

const iconValue = (icon: string) => {
  switch (icon) {
    case "total":
      return <UsersRound className="w-8 h-8" />;
    case "act":
      return <HeartHandshake className="w-8 h-8" />;
    case "sus":
      return <Ribbon className="w-8 h-8" />;
    default:
      return <Puzzle className="w-8 h-8" />;
  }
};

function Dashboard() {
  const { isLoading, isError, data, error } = useQuery<UserCountStats[], Error>(
    {
      queryKey: [QUERY_KEY.USERS_DASH],
      queryFn: () => getCountUsersStat(),
      onSuccess() {
        console.log("ok..");
      },
      onError(error: Error) {
        console.log("fail..", error.message);
      },
    }
  );

  if (isLoading) {
    return <SuspenseContent />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {data ? (
          data.map((d, k) => {
            return (
              <DashboardStats
                key={k}
                title={d.title}
                value={d.value}
                description={d.description}
                icon={iconValue(d.icon)}
                colorIndex={k}
              />
            );
          })
        ) : (
          <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6" />
        )}
      </div>

      <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        <PageStats />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <UserChannels />
        <LineCharts />
      </div>
    </>
  );
}

export default Dashboard;
