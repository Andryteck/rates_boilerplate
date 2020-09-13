import axios from "axios";


const instance = axios.create({
        baseURL: 'https://www.nbrb.by/api/exrates/rates/dynamics'
    }
)

export const chartAPI = {
    getChartData(currencyID: number, startDate: string, endDate: string) {
        return instance.get<ChartDataType>(`/${currencyID}?startdate=${startDate}&enddate=${endDate}`)
    }
}


//types

type ChartDataType = [
    {
        "Cur_ID": number,
        "Date": string,
        "Cur_OfficialRate": number
    }
]


