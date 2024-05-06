import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home/HomeAsync";
import {About} from "../pages/About/AboutAsycn";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "../shared/lib/classNames/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <button onClick={toggleTheme}>toggle theme</button>
     <Suspense fallback={'Loading...'}>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
       </Routes>
     </Suspense>
    </div>
  );
};
``
export default App;
