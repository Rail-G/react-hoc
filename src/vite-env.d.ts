/// <reference types="vite/client" />
/* eslint @typescript-eslint/no-explicit-any: 0 */

interface VideoProps {
  list: VideoType[]; 
}

interface VideoData {
  url?: string,
  date: string
}

interface VideoArticleList {
  type: string,
  url?: string,
  title?: string,
  views: number
}

interface VideoArticleListProps {
  list: VideoArticleList[]
}

interface TableData {
  month?: string,
  year?: string,
  date?: string,
  amount: number
}

interface TableDataKey {
  month: string,
  year: string,
  date: string,
}

interface TableFinishDataProps {
  list: TableData[]
}