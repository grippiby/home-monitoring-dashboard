import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import TopNavbar from './components/TopNavbar/TopNavbar'

import Logo from './components/TopNavbar/Logo/Logo'
import MyClock from './components/TopNavbar/GetDate/myClock'
import ContentSide from './components/Content/ContentSide'
import Logged from './components/TopNavbar/Authentification/Logged'

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="header">
					<div className="userAuth">
						<Logged></Logged>
					</div>
					<div className="date">
						{/* <GetDate></GetDate> */}
						<MyClock></MyClock>
					</div>
					<div className="logo">
						<div>
							<Logo></Logo>
						</div>
					</div>
				</div>
				<div className="footer">footer (info about me)</div>
				<div className="menu">
					<Sidebar></Sidebar>
				</div>
				<div className="content">
					<ContentSide></ContentSide>
				</div>
			</div>
		</div>
	)
}

export default App
