import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import {Chart} from 'react-chartjs-2'
import React from "react";
import {useProfile} from "../../Context/ProfileContext/ProfileContext";
import moment from "moment";
import styled from "styled-components";


const BarWrapper = styled.div`
color: var(--red-0);
`

export const RenderGraph = () => {

    const profileContext = useProfile()
    const dataCounter = () => {
        console.log('start dataCounter')
        const ses = profileContext.sessions.session
        const map = {}
        ses.forEach(session => {
            const date = moment(session.startTime).format("MMM Do")
            console.log()
            const startDateTime = new moment(session.startTime)
            // if (ses.endTime !== "0"){
            const endDateTime = new moment(session.endTime)
            console.log(endDateTime)
            console.log(startDateTime)
            const counter = endDateTime - startDateTime
            console.log('counter', counter)
            if (map[date] === undefined) {
                return map[date] = counter
            }
            return map[date] += counter
            // }
            // return null
        })
        console.log('map', map)
        return map
    }
    if (profileContext.sessions) {
        const dateMap = dataCounter()
        const options = {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    align: 'center',
                    position: 'top',
                    labels: {
                        // usePointStyle: true,
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
                outlabels: {
                    backgroundColor: "white",
                    color: "black",
                },
                labels: {
                    color: 'white'
                },
                tooltip: {
                    backgroundColor: "rgba(24,24,24,0.8)",
                }
            }

        }
        const labels = Object.keys(dateMap)
        console.log('Object.values(dateMap)', Object.values(dateMap))
        console.log(' Object.keys(dateMap)', labels)
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
                <Bar options={options} data={data}/>
            </BarWrapper>
        )
    }
    return null
}