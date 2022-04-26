import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import {Chart} from 'react-chartjs-2'
import React from "react";
import {useProfile} from "../../Context/ProfileContext/ProfileContext";
import moment from "moment";
import styled from "styled-components";


const BarWrapper = styled.div`
  position: relative;
  color: var(--red-0);
  height: 100%;
  width: 100%;
`

export const RenderGraph = () => {

    const profileContext = useProfile()
    const dataCounter = () => {
        const ses = profileContext.sessions.session
        const map = {}
        ses.forEach(session => {
            const date = moment(session.startTime).format("MMM Do")
            const startDateTime = new moment(session.startTime)
            if (session.endTime !== "0") {
                const endDateTime = new moment(session.endTime)
                const counter = endDateTime - startDateTime
                if (map[date] === undefined) {
                    return map[date] = counter
                }
                return map[date] += counter
            }
            return null
        })
        console.log('map', map)
        return map
    }
    if (profileContext.sessions) {
        const dateMap = dataCounter()
        const options = {
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff',
                        font: {
                            size: 17,
                            weight: 600
                        },
                    },
                    grid: { display: false }

                },
                y: {
                    ticks: {
                        color: '#ffffff',
                        font: {
                            size: 13,
                            weight: 600
                        },
                    },
                    // grid: { color: '#fff'}
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    align: 'center',
                    position: 'top',
                    labels: {
                        font: {
                            size: 16,
                        },
                        color: "#ffffff",
                    }
                },
                title: {
                    display: true,
                    text: 'attendance schedule',
                    color: 'white',
                    font: {size: '30rem', weight: '700'}
                },
                text: {
                    color: 'white',
                },
                labels: {
                    color: 'white'
                },
                tooltip: {
                    backgroundColor: "rgba(24,24,24,0.8)",
                }
            },
        }
        const labels = Object.keys(dateMap)
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Sessions',
                    data: Object.values(dateMap),
                    fill: false,
                    backgroundColor: [`red`]
                }
            ]
        }

        return (
            <BarWrapper>
                <Bar style={{
                    width: "100%",
                    // // height: 'auto'
                }}
                     options={options}
                     data={data}/>
            </BarWrapper>
        )
    }
    return null
}