import React, {useState, useEffect} from "react";
import ThemesSwitcher from './component/ThemesSwitcher';
import Result from './component/Result';
import Buttons from './component/Buttons';
import "./index.css";

function App() {
  const [theme, setTheme] = useState<1 | 2 | 3>(1);
  const [input, setInput] = useState('');

  useEffect(() => {
    const themeClasses = ['bg-theme1-bg', 'bg-theme2-bg', 'bg-theme3-bg'];
    themeClasses.forEach((c) => document.body.classList.remove(c));
    document.body.classList.add(themeClasses[theme - 1]);
  }, [theme]);

  return (
    <> 
      <ThemesSwitcher theme={theme} setTheme={setTheme}/>
      <Result theme={theme} input={input} />
      <Buttons theme={theme} input={input} setInput={setInput} />
    </>
  )
}

export default App;