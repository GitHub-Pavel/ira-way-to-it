import { useSelector, useDispatch } from 'react-redux'
import { setExample } from '../store'

const viewBox = {
  minHeight: 15,
  border: '1px solid #000',
  padding: 5,
  width: 200
}

function App() {
  const dispatch = useDispatch();
  const example = useSelector(state => state.common.example);

  const resetHandler = () => dispatch(setExample(''));
  const setHandler = () => dispatch(setExample('example'));

  return (
    <>
      <div style={viewBox}>{example}</div>
      <button onClick={setHandler}>Set example</button>
      <button onClick={resetHandler}>Reset example</button>
    </>
  );
}

export default App;
