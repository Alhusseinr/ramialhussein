import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from './Main/index';
import './assets/App.css';
const history = createBrowserHistory();

ReactDOM.render((
    <Router history={history} >
        <Main history={history} />
    </Router>
), document.getElementById('root'));



// import React from 'react';
// import logo from './logo.svg';
// import './assets/App.css';
//
// class App extends React.Component{
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             apiResponse: '',
//             error: '',
//         };
//     }
//
//     callAPI() {
//         fetch("http://127.0.0.1:5000/testAPI", {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//
//         })
//             .then(res => res.text())
//             .then(res => this.setState({ apiResponse: res}))
//             .catch(e => {
//                 this.setState({ error: e });
//                 console.log(this.state.error);
//             })
//     }
//
//     componentDidMount() {
//         this.callAPI();
//     }
//
//
//     render() {
//         return (
//             <div className="App">
//                 <p>{this.state.apiResponse}</p>
//             </div>
//         );
//     }
// }
//
// export default App;
