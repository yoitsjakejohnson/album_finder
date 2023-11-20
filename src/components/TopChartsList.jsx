import TopChartsCard from './TopChartsCard'
import styles from './TopChartsList.module.css'
import getTopCharts from '../utils/getTopCharts'
import { useEffect, useState } from 'react'

function TopChartsList() {
    const [topCharts, setTopCharts] = useState([])

    useEffect(() => {
        const fetchTopCharts = async () => {
            const chartsData = await getTopCharts()
            if (chartsData) {
                setTopCharts(chartsData.tacks)
            }
        }
        fetchTopCharts()
    }, [])

    return (
        <>
            <section id={styles.top_chart}>
                <div className="container">
                    <h1>top songs</h1>
                    <p className={styles.week}>week of August 21st</p>
                    <div>
                        {topCharts.map((track, index) => {
                            <TopChartsCard key={index} track={track} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopChartsList