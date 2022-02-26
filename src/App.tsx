import './App.css';
import { NotificationContainer } from '@components/Notification';
import { HomePage } from '@pages';

function App() {
  return (
    <div className="App">
      <NotificationContainer>
        <HomePage />
      </NotificationContainer>
    </div>
  );
}

export default App;
