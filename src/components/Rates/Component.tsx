import React, {useEffect, useMemo} from 'react'
import ApexChart, {Props} from 'react-apexcharts'
import {TReduxProps} from './Container'
import {StyledContainer} from './style'
import {Select} from 'antd';

export type TComponentProps = {} & TReduxProps

const Rates: React.FC<TComponentProps> = (props) => {

    const chartOptions = useMemo(
        () => ({
                series: [{
                    name: "Rates",
                    data: props.chartRate.map((c, i) => [props.chartDate[i], c])
                }],
                options: {
                    chart: {
                        type: 'line',
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'straight'
                    },
                    title: {
                        text: 'Сurrency rates',
                        align: 'left'
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'],
                            opacity: 0.5
                        },
                    },
                    xaxis: {
                        labels: {
                            datetimeUTC: false
                        },
                        type: 'datetime'
                    }
                },
            }
        ), [props.chartRate, props.chartDate]
    )


    const type = 'line'

    useEffect(() => {
        props.getChartData(props.currencyId)
    }, [props.currencyId])


    return (
        <StyledContainer>
            <ApexChart
                options={chartOptions.options}
                series={chartOptions.series}
                type={type}
                width={500}
                height={400}
            />
            <>
                <Select
                    style={{width: 200, marginTop: 20}}
                    defaultValue={props.currencies[0].value}
                    options={props.currencies}
                    placeholder={props.currencies[0].label}
                    disabled={props.fetching}
                    onChange={props.setChartCurrency}
                />

            </>
        </StyledContainer>
    )
}

export default Rates