import { sideListItems } from "@data/app.data";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem, { listItemClasses } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const SideList = () => {
  const navigate = useNavigate();
  const handleOnClick = (event) => {
    let route = event.target.textContent.toLowerCase();
    navigate(route);
  };

  return (
    <Box>
      {sideListItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item.subdivision ? (
              <>
                <Divider />
                <Box sx={{ ml: 2, mt: 2 }}>
                  <Typography
                    sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                    variant="button"
                    display="block"
                    gutterBottom
                  >
                    {item.text}
                  </Typography>
                </Box>
              </>
            ) : item.divider ? (
              <Divider />
            ) : (
              <nav aria-label="Side list items">
                <List
                  sx={{
                    color: "#fff",
                    "& svg": {
                      fill: "#fff",
                    },
                    [`& .active, & .${listItemClasses.root}:hover`]: {
                      color: "#13293D",
                      fontWeight: "bold",
                      "& svg": {
                        fill: "#13293D",
                      },
                    },
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleOnClick}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default SideList;
