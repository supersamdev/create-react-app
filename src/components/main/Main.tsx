import BarChart from "../barchart/BarChart";
import LineChart from "../linechart/LineChart";
import ScatterChart from "../scatterchart/ScatterChart";
import "./Main.css";

const healthData = [10, 20, 30, 40, 50];
const healthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];


const barData = [15, 25, 35, 45, 55];
const barLabels = ['A', 'B', 'C', 'D', 'E'];

const scatterData = [
    { x: 10, y: 20, label: 'Point 1' },
    { x: 20, y: 30, label: 'Point 2' },
    { x: 30, y: 40, label: 'Point 3' },
    { x: 40, y: 50, label: 'Point 4' },
    { x: 50, y: 60, label: 'Point 5' }
];

const Main = () => {
    return(
        <main>
            <div className="main__container">
                
                <div className="main__title">
                    <div className="main__greeting">
                        <h1>Hello Supervisor</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Positives without symptoms</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Positives with symptoms</p>
                            <span className="font-bold text-title">3896</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Negatives</p>
                            <span className="font-bold text-title">248</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lighblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Negatives</p>
                            <span className="font-bold text-title">64</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Health Status</h1>
                                <p>Temperature</p>
                            </div>
                            <i className="fa fa-thermometer-empty"></i>
                        </div>
                        <LineChart data={healthData} labels={healthLabels} />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Other charts</h1>
                                <p>Bar, Scatter</p>
                            </div>
                            <i className="fa fa-handshake-o"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card2">
                                <BarChart data={barData} labels={barLabels} />
                            </div>

                            <div className="card2">
                                <ScatterChart data={scatterData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;

