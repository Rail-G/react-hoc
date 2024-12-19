import moment from 'moment';
import 'moment/dist/locale/ru.js'
export function withDate(Component: React.FunctionComponent<{ date: string }>) {

    return (props: {date: string}) => {
        const targetDate = moment(props.date);
        const newDate = targetDate.fromNow();
        return <Component date={newDate} />
    }
}