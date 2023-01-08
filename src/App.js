import { ThemeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./pages/global/Header";
import SideBar from "./pages/global/SideBar.jsx";

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
          </main>
        </div>

      </ThemeProvider>
    </ThemeContext.Provider >

  );
}

export default App;
