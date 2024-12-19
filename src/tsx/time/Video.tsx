import { DateTime } from "./DateTime";
import { withDate } from "./withDate";

export function Video(props: VideoData) {
    const DateTTime: React.FunctionComponent<{date: string}> = withDate(DateTime)
    return (
        <div className="video">
            <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTTime date={props.date} />
        </div>
    )
}