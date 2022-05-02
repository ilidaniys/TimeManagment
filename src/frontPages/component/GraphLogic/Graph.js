import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import {Chart} from 'react-chartjs-2'
import React from "react";
import moment from "moment";
import styled from "styled-components";
import {secondToHour} from "../CounterLogic/CounterFunction";
import {useSelector} from "react-redux";


const BarWrapper = styled.div`
  position: relative;
  color: var(--red-0);
  height: 100%;
  width: 100%;
`

export const RenderGraph = () => {

    const sessions = useSelector(state => state.profileReducer.sessions)
    const map = {}
    const dataCounter = () => {
        sessions?.session?.forEach(session => {
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
        return map
    }
    if (sessions) {
        const dateMap = dataCounter()
        const value = Object.values(dateMap)
        console.log('value', value)
        const time =  value.map(value => secondToHour(value))
        console.log('time',time)
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
                    label: 'duration of sessions per day',
                    data: time,
                    fill: false,
                    backgroundColor: [`rgb(255, 255, 255)`]
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