import { Provider } from 'react-redux'

import { store } from './Store'
import Counter from './features/counter/Counter'

const Application = () => {
  return (
    <Provider store={store}>
      <header>
        <h1>Star wars character</h1>
      </header>
      <Counter />
    </Provider>
  )
}
export default Application
