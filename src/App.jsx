import { useCounter } from './useCounter';

function App() {
	const {count, plus, subtract, zero, initalValue} = useCounter()


	return (
		<main className="app">
			<div className="container">
				<div className="zero controls" onClick={zero}>
					{initalValue}
				</div>

				<div className="subtract controls" onClick={subtract}>
					-
				</div>
				<div className="count result">{count}</div>
				<div className="plus controls" onClick={plus}>
					+
				</div>
			</div>
		</main>
	);
}

export default App;
