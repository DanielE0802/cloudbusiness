import React, { useContext } from "react";
import { ThemeContext, tokens } from "../../theme";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { DarkModeOutlined, Search, SettingsOutlined } from "@mui/icons-material";
import styles from "./global.module.scss";

function Header() {
  const Theme = useTheme();
  const colors = tokens(Theme.palette.mode);
  const colorMode = useContext(ThemeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" backgroundColor={colors.grey[400]} borderRadius="5px"  alignItems="center">

        {/* Init search section */}
        <InputBase sx={{ ml:2, flex:1 }} placeholder="Buscar" />
        <IconButton>
          <Search />
        </IconButton>
        {/* Finish search section */}
      </Box>
      <Box display="flex" alignItems="center">
      <IconButton onClick={colorMode.toggleColorMode}>
          {Theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
      <IconButton>
          <SettingsOutlined />
        </IconButton>
      </Box>

    </Box>
  );
}

export default Header;
