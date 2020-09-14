import axios from "axios";


const instance = axios.create({
        baseURL: 'https://www.nbrb.by/api/exrates/rates/dynamics'
    }
)

export const chartAPI = {
    getChartData(currencyId: number, startDate: string, endDate: string) {
        return instance.get<ChartDataType[]>(`/${currencyId}?startdate=${startDate}&enddate=${endDate}`)
    }
}


//types

export type ChartDataType = {
        "Cur_ID": number,
        "Date": string,
        "Cur_OfficialRate": number
    }



