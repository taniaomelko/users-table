import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Table } from './components/Table/Table';

function App() {
  return (
    <Provider store={store}>
      <section className="py-40">
        <div className="container">
          <Table />
        </div>
      </section>
    </Provider>
  )
};

export default App;
