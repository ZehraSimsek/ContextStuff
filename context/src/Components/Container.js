import '../App.css';
import Button from './Button.js';
import {useTheme} from '../Context/ThemeContext.js';
import Profile from './Profile.js';

function Container() {
    const {theme} = useTheme()
  return (
    <div  className={`app ${theme === "dark" ? theme : ""}`}>
        <Button />
        <hr />
        <hr />
        <Profile/>
    </div>
  );
}

export default Container;
