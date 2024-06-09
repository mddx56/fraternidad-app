import TitleCard from "../../../features/common/components/Cards/TitleCard";

import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

// Sample chart data
const pdata = [
    {
        name: "MongoDb",
        student: 11,
        fees: 120,
    },
    {
        name: "Javascript",
        student: 15,
        fees: 12,
    },
    {
        name: "PHP",
        student: 5,
        fees: 10,
    },
    {
        name: "Java",
        student: 10,
        fees: 5,
    },
    {
        name: "C#",
        student: 9,
        fees: 4,
    },
    {
        name: "C++",
        student: 10,
        fees: 8,
    },
];

function LineCharts() {
    return (
        <>
            <TitleCard title={"Line Chart"}>
                <ResponsiveContainer width="100%" aspect={2}>
                    <LineChart data={pdata} className="bg-base-100 shadow rounded p-1">
                        <CartesianGrid />
                        <XAxis dataKey="name" interval={"preserveStartEnd"} />
                        <YAxis />
                        <Legend />
                        <Tooltip />
                        <Line
                            dataKey="student"
                            stroke="#5d5dc0"
                            activeDot={{ r: 8 }}
                        />
                        <Line dataKey="fees" stroke="#2c832b " activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </TitleCard>
        </>
    );
}

export default LineCharts;
