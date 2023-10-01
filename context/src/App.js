import './App.css';
import { ThemeProvider } from './Context/ThemeContext.js';
import Container from './Components/Container.js';
import { UserProvider } from './Context/UserContext.js';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
