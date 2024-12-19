import moment from 'moment'
import 'moment/dist/locale/ru.js'
export const withTable = (data: TableData[]) => (Component: React.FunctionComponent<TableFinishDataProps>, key: keyof TableDataKey| '' = '') => {
    if (data.length) {
        data.sort((a: TableData, b: TableData) => new Date(a.date!).getTime() - new Date(b.date!).getTime())
    }
    return () => {
        const resultData: TableData[] = []
        let formatKey: string | null;
        switch(key) {
            case 'month':
                formatKey = 'MMMM'
                break;
            case 'year':
                formatKey = 'YYYY'
                break;
            default:
                formatKey = null; 
        }

        if (data.length === 0) {
            return <Component list={resultData} />; 
        }
        if (formatKey !== null) {
            data.forEach((el) => {
                const date = moment(el.date)
                const format = date.format(formatKey)
                const index = resultData.findIndex(el => el[key as keyof TableDataKey] === format)
                if (index !== -1) {
                    resultData[index].amount += el.amount
                } else {
                    resultData.push({[key]: format, amount: el.amount})
                }
            })
        }
        const result = resultData.length ? resultData : data
        return <Component list={result}/>
    }

}