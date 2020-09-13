import React, {useEffect} from 'react'
import ApexChart, {Props} from 'react-apexcharts'
import {TReduxProps} from './Container'
import {StyledContainer} from './style'
import {getChartData} from "actions/chart";
import {Dropdown, Menu} from "antd";

export type TComponentProps = {

} & TReduxProps

const Rates: React.FC<TComponentProps> = (props) => {

    const chartOptions = {}
    const chartSeries = []
    const type = 'line'

    useEffect(() => {
        getChartData(props.currencyID, props.startDate, props.endDate)

    }, [props.currencyID, props.startDate, props.endDate])

    const menu = (
        <Menu>
            <Menu.Item key="1" >
                1st menu item
            </Menu.Item>
            <Menu.Item key="2" >
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3" >
                3rd menu item
            </Menu.Item>
        </Menu>
    )
    return (
        <StyledContainer>
            <ApexChart
                options={chartOptions}
                series={chartSeries}
                type={type}
                width={500}
                height={300}
            />
            <Dropdown.Button overlay={menu}>
                Dropdown
            </Dropdown.Button>
        </StyledContainer>
    )
}

export default Rates