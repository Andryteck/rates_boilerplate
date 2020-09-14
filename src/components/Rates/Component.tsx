import React, {useEffect} from 'react'
import ApexChart, {Props} from 'react-apexcharts'
import {TReduxProps} from './Container'
import {StyledContainer} from './style'
import {Select} from 'antd';
const { Option } = Select;

export type TComponentProps = {} & TReduxProps

const Rates: React.FC<TComponentProps> = (props) => {

    const chartOptions = {}
    const chartSeries = []
    const type = 'line'

    useEffect(() => {
        props.getChartData(props.currencyId)
    }, [props.currencyId])

    return (
        <StyledContainer>
            <ApexChart
                options={chartOptions}
                series={chartSeries}
                type={type}
                width={500}
                height={300}
            />
            <>
            <Select style={{width: 200}}
                    defaultValue={props.currencies[0].value}
                    options={props.currencies}
                    placeholder={props.currencies[0].label}
                    optionFilterProp="children"
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
                </>
        </StyledContainer>
    )
}

export default Rates