
import './App.css';
import Form from './component/Form';
import List from './component/List';

function App() {
	return (
		<div className="App">
			<div className="inner">
				<h1>연락처</h1>
				<section>
					<div className="section_box form_box">
						<Form></Form>
					</div>
					<div className="section_box content_box">
						<List></List>
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
