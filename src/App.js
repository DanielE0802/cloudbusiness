import { ThemeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/global/Header";
import SideBar from "./pages/global/SideBar.jsx";
import Dashboard from "./pages/dashboard";
import VentaPos from "./pages/pos/VentaPos";
import CrearBodega from "./pages/bodegas/CrearBodega";

function App() {

  const [theme, colorMode] = useMode();

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Reset css */}
        <CssBaseline />
        <div className="App" >
          <main className="content">
            <Header />
            <SideBar />
            <Routes>  
              <Route path="/" element={<Dashboard />} />
              <Route path="/pos/venta" element={<VentaPos />} />
              <Route path="/bodega/crear" element={<CrearBodega />}/>
            </Routes>
          </main>
        </div>

      </ThemeProvider>
    </ThemeContext.Provider >

  );
}

export default App;
