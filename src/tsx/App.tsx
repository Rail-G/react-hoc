import '../css/App.css'
import MainViewTable from './aggregation/MainViewTable'
import MainVideoApp from './highlight/MainVideoApp'
import { MainVideo } from './time/MainVideo'


function App() {
  return (
    <>
      <div className="task t1">
        <MainVideo />
      </div>
      <div className="task t2">
        <MainVideoApp />
      </div>
      <div className="task3">
        <MainViewTable />
      </div>
    </>
  )
}

export default App
