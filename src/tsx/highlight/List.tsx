import { Video } from "./Video";
import { Article } from "./Article";
import { withList } from "./withList";

export function List(props: VideoArticleListProps) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video': {
                const VideoContentEvaluation = withList(Video)
                return (
                    <VideoContentEvaluation {...item}/>
                );
            }

            case 'article': {
                const ArticleContentEvaluation = withList(Article)
                return (
                    <ArticleContentEvaluation {...item}/>
                );
            }
        }
    });
};