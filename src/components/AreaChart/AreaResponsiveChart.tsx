import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
interface AreaChartProps {
	count: number
	date: string
}
const AreaResponsiveChart = ({ monthlyApplications }: { monthlyApplications: AreaChartProps[] }) => {
	return (
		<div style={{ height: 300, width: '99%', margin:'0 auto' }}>
			<ResponsiveContainer width='99%'>
				<AreaChart
					data={monthlyApplications}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='date' />
					<YAxis />
					<Tooltip />
					<Area type='monotone' dataKey='count' stroke='#2683ee' fill='#3b30df' />
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}

export default AreaResponsiveChart
