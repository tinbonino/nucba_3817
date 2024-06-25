import ThemeContext, {themes} from "./context";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Layout from "./Components/Layout";

import { useState } from "react";



function AppContext() {

    const [tema,setTema] = useState(themes.claro);

    const handleTema= () => {
      tema===themes.oscuro?setTema(themes.claro):setTema(themes.oscuro);
    }
  return (
    <div>
        <ThemeContext.Provider value={{tema,handleTema}}>
            <Layout>
                <Navbar/>
                <Body/>
            </Layout>
        </ThemeContext.Provider>
    </div>
  )
}

export default AppContext