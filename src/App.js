import { Route, Routes } from "react-router-dom";
import { useMode, colorModeContext } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
// prettier-ignore
import { TopBar,SideBar,Team, Bar, Line, Pie, Invoices, Geography, Faq, Dashboard, Form, Contacts, Calendar } from "./scenes";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <SideBar />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar-chart" element={<Bar />} />
                <Route path="/line-chart" element={<Line />} />
                <Route path="/pie-chart" element={<Pie />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/faq" element={<Faq />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
