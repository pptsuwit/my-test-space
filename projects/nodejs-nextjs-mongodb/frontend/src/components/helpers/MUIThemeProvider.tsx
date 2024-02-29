import { useTheme } from "next-themes";
import { GlobalStyles } from "@mui/material/";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { darkTheme, globalStyles, lightTheme } from "@/styles/theme";
import { FC, useEffect, useState } from "react";

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  useEffect(() => {
    resolvedTheme === "light" ? setCurrentTheme(lightTheme) : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
