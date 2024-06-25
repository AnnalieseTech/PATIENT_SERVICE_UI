// A bunch of common styles exported as  objects

/***********************
 * App.js
 ************************/
export const appWrapper = {
  display: "flex",
  height: "100vh",
  overflow: "hidden",
};

/***********************
 * Navigation
 ************************/

export const appBar = {
  backgroundColor: "#007BFF",
  color: "#fff",
};

export const toolbarWrapper = {
  display: "flex",
  justifyContent: "space-between",
  flexGrow: 1,
};

export const logoText = {
  fontSize: 22,
  ml: 1,
  fontFamily: "Oswald",
};

/***********************
 * SideList
 ************************/
export const sideListWrapper = {
  width: "100%",
  bgcolor: "#007BFF",
  borderRight: "1px solid #ddd",
};

/***********************
 * Notification List
 ************************/
export const notificationWrapper = {
  width: "100%",
  maxWidth: 360,
  pb: 0,
};

/***********************
 * AppContentArea
 ************************/
export const appContentWrapper = {
  display: "flex",
  mt: 8,
  width: "100vw",
  overflow: "hidden",
};

/************************
 * General styles
 ************************/
export const flexAlignCenter = {
  display: "flex",
  alignItems: "center",
};

export const flexColumnGrow = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

export const flexColumnCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

export const inlineText = { display: "inline", fontSize: 12 };

export const flex = { display: "flex" };

export const scrollWrapper = {
  overflowY: "scroll",
  "::-webkit-scrollbar": { height: "3px" },
};
export const hideOnMobile = { display: { xs: "none", sm: "flex" } };
