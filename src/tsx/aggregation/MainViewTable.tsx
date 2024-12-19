import React from "react";
import { MonthTable } from "./MonthTable";
import { YearTable } from "./YearTable";
import { SortTable } from "./SortTable";
import { withTable } from "./withTable";

export default class MainViewTable extends React.Component<unknown, TableFinishDataProps> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            list: []
        }
    }

    async componentDidMount(): Promise<void> {
        await fetch(import.meta.env.VITE_AGGREGATION_URL).then(response => response.json()).then(data => this.setState({list: data.list}))
    }

    render() {
        const {list} = this.state;
        const PrettySort = withTable(list)
        const PrettyMonthTable = PrettySort(MonthTable, 'month')
        const PrettyYearTable = PrettySort(YearTable, 'year')
        const PrettySortTable = PrettySort(SortTable)
        return (
            <div id="app">
                <PrettyMonthTable />
                <PrettyYearTable />
                <PrettySortTable />
            </div>
        );
    }
}