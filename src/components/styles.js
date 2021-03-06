//-------------------------------------LOGIN
export const logInBlockStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
export const logInFormStyle = {
  display: "flex",
  flexDirection: "column"
};
//------------------------------------SEARCH
export const searchBarStyle = {
  display: "flex",
  // flexDirection: "column",
  padding: "16px 0px 4px 0px",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
};
export const searchArrayStyle = {
  display: "flex",
  width: "96vw",
  overflowX: "scroll",
  //eventually I might remove this scroll bar
  overflowY: "hidden",
  height: "230px",
  padding: "0px 48px 0px 48px",
  margin: "32px 0px 8px 0px",
  scrollbarColor: "rgba(225, 225, 225, 0%) rgba(225, 225, 225, 0%)",
  scrollbarWidth: "thin",
  scrollBehavior: "smooth"
};
//---------------------------------MOVIE CARD
export const movieCardStyle = {
  height: "200px",
  borderRadius: "15%",
  position: "relative",
  width: "130px",
  margin: "0px 16px 0px 16px",
  boxShadow:
    "0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)"
};
export const posterStyle = {
  borderRadius: "8px",
  overflow: "hidden",
  width: "inherit",
  height: "100%"
};
export const briefStyle = {
  padding: "8px",
  color: "rgba(255, 255, 255, 0.9)",
  borderRadius: "0px 0px 8px 8px",
  height: "45%",
  width: "inherit",
  backgroundColor: "rgba(31, 31, 31, 0.6)",
  position: "absolute",
  bottom: "0px",
  lineHeight: "1.1em",
  fontSize: "14px"
};
export const movieTypeStyle = {
  position: "absolute",
  backgroundColor: "grey",
  textAlign: "center",
  padding: ".2em",
  width: "5em",
  borderRadius: "8px",
  bottom: "12px"
};
//------------------------------------BUTTONS
export const buttonRightStyle = {
  transform: "rotate(180deg)",
  color: "white",
  border: "none",
  position: "absolute",
  width: "60px",
  height: "inherit",
  right: "0px",
  // opacity: "50%",
  background:
    "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(16,16,16,1) 75%, rgba(16,16,16,1) 100%)"
};
export const buttonLeftStyle = {
  border: "none",
  position: "absolute",
  width: "60px",
  height: "inherit",
  left: "0px",
  // opacity: "50%",
  background:
    "linear-gradient(270deg, rgba(255,255,255,0) 0%, rgba(16,16,16,1) 75%, rgba(16,16,16,1) 100%)"
};
//-------------------------------------------------DETAILS POSTER
