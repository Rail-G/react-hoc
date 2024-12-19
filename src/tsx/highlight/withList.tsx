import { New } from "./New"
import { Popular } from "./Popular"

export const withList = (Component: React.FunctionComponent<VideoArticleList>) => {
    return (props: VideoArticleList) => {
        if (props.views < 100) {
            return <New>
                <Component {...props}/>
            </New>
        } else if (props.views < Infinity) // Имитация 1000+
            return <Popular>
                <Component {...props}/>
            </Popular>
    }
}