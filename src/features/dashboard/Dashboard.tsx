import { CircleSlash2, CreditCard, Users, Users2 } from "lucide-react"
import AmountStats from "./components/amount-stats"
import DashboardStats from "./components/dashboard-stats"
import PageStats from "./components/page-stats"
import UserChannels from "./components/table-stats"
import LineCharts from "./components/line-charts"

const statsData = [
    { title: "New Users", value: "34.7k", icon: <Users2 className='w-8 h-8' />, description: "↗︎ 2300 (22%)" },
    { title: "Total Sales", value: "$34,545", icon: <CreditCard className='w-8 h-8' />, description: "Current month" },
    { title: "Pending Leads", value: "450", icon: <CircleSlash2 className='w-8 h-8' />, description: "50 in hot leads" },
    { title: "Active Users", value: "5.6k", icon: <Users className='w-8 h-8' />, description: "↙ 300 (18%)" },
]

function Dashboard() {
    return (
        <>
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k} />
                        )
                    })
                }
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
    )
}

export default Dashboard