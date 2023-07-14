import styled from "styled-components";
import { ContainerStyle as StyledContainer } from "../../helper/ContainerStyle";

export const Container = styled(StyledContainer)`
  width: ${(props) => (props.width ? props.width : "initial")};
  height: ${(props) => (props.height ? props.height : "initial")};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  margin: ${(props) => (props.margin ? props.margin : "0rem 0rem 0rem 0rem")};
  padding: ${(props) =>
    props.padding ? props.padding : "0rem 0rem 0rem 0rem"};
  position: ${(props) => (props.position ? props.position : "initial")};
  top: ${(props) => (props.top ? props.top : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
  right: ${(props) => (props.right ? props.right : "unset")};
  left: ${(props) => (props.left ? props.left : "unset")};
  display: ${(props) => (props.display ? props.display : "block")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "initial"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "initial"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "initial")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  grid-template-columns: ${(props) =>
    props.gridColumn ? `${props.gridColumn}` : "unset"};
  gap: ${(props) => (props.gap ? `${props.gap}` : "unset")};
  border-width: ${(props) =>
    props.borderWidth ? `${props.borderWidth}` : "unset"};
  border-color: ${(props) =>
    props.borderColor ? `${props.borderColor}` : "unset"};
  border-style: ${(props) =>
    props.borderStyle ? `${props.borderStyle}` : "unset"};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0rem 0rem 0rem 0rem"};
  border-bottom: ${(props) => props.borderBottom && `${props.borderBottom}`};
  border-top: ${(props) => props.borderTop && `${props.borderTop}`};
  border-left: ${(props) => props.borderLeft && `${props.borderLeft}`};
  border-right: ${(props) => props.borderRight && `${props.borderRight}`};
  z-index: ${(props) => (props.zIndex ? `${props.zIndex}` : "unset")};
  cursor: ${(props) => props.cursor && "pointer"};
  overflow-y: ${(props) => (props.overFlowY ? `${props.overFlowY}` : "unset")};
  flex-wrap: ${(props) => (props.flexWrap ? `${props.flexWrap}` : "")};

  &:hover {
    color: ${(props) => (props.hovercolor ? `${props.hovercolor}` : "")};
    background-color: ${(props) =>
      props.hoverBgColor ? `${props.hoverBgColor}` : ""};
  }

  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.mddisplay ? `${props.mddisplay}` : "")};
    grid-template-columns: ${(props) =>
      props.mdgridcolumn ? `${props.mdgridcolumn}` : ""};
    flex-wrap: ${(props) => props.mdwrap && "wrap"};
    flex-direction: ${(props) =>
      props.mdflexdirection ? `${props.mdflexdirection}` : ""};
    width: ${(props) => (props.mdwidth ? `${props.mdwidth}` : "")};
    height: ${(props) => (props.mdheight ? `${props.mdheight}` : "")};
    row-gap: ${(props) => (props.mdrowgap ? `${props.mdrowgap}` : "")};
    column-gap: ${(props) => (props.mdcolumngap ? `${props.mdcolumngap}` : "")};
    gap: ${(props) => (props.mdgap ? `${props.mdgap}` : "")};
    margin: ${(props) => (props.mdmargin ? `${props.mdmargin}` : "")};
    padding: ${(props) => (props.mdpadding ? `${props.mdpadding}` : "")};
    border-radius: ${(props) => (props.mdradius ? `${props.mdradius}` : "")};
    align-items: ${(props) =>
      props.mdalignitems ? `${props.mdalignitems}` : ""};
    justify-content: ${(props) =>
      props.mdjustifycontent ? `${props.mdjustifycontent}` : ""};
    flex: ${(props) => (props.mdflexratio ? `${props.mdflexratio}` : "")};
    overflow: ${(props) => (props.mdoverflow ? props.mdoverflow : "")};
    top: ${(props) => (props.mdtop ? `${props.mdtop}` : "")};
    left: ${(props) => (props.mdleft ? `${props.mdleft}` : "")};
    right: ${(props) => (props.mdright ? `${props.mdright}` : "")};
    bottom: ${(props) => (props.mdbottom ? `${props.mdbottom}` : "")};
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.xmdisplay ? `${props.xmdisplay}` : "")};
    grid-template-columns: ${(props) =>
      props.xmdgridcolumn ? `${props.xmdgridcolumn}` : ""};
    flex-wrap: ${(props) => (props.smwrap ? "wrap" : "")};
    grid-template-columns: ${(props) =>
      props.mdgridcolumn ? `${props.mdgridcolumn}` : ""};
    height: ${(props) => (props.xmdheight ? `${props.xmdheight}` : "")};
    flex-direction: ${(props) =>
      props.xmdflexdirection ? `${props.xmdflexdirection}` : ""};
    gap: ${(props) => (props.xmdgap ? `${props.xmdgap}` : "")};
    margin: ${(props) => (props.xmdmargin ? `${props.xmdmargin}` : "")};
    padding: ${(props) => (props.xmdpadding ? `${props.mdpadding}` : "")};
    align-items: ${(props) =>
      props.xmdalignitems ? `${props.xmdalignitems}` : ""};
    justify-content: ${(props) =>
      props.xmdjustifycontent ? `${props.xmdjustifycontent}` : ""};
    overflow: ${(props) => (props.xmdoverflow ? props.xmdoverflow : "")};
    top: ${(props) => (props.xmdtop ? `${props.xmdtop}` : "")};
    left: ${(props) => (props.xmdleft ? `${props.xmdleft}` : "")};
    right: ${(props) => (props.xmdright ? `${props.xmdright}` : "")};
    bottom: ${(props) => (props.xmdbottom ? `${props.xmdbottom}` : "")};
  }

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.smdisplay ? `${props.smdisplay}` : "")};
    grid-template-columns: ${(props) =>
      props.smgridcolumn ? `${props.smgridcolumn}` : ""};
    flex-direction: ${(props) =>
      props.smflexdirection ? `${props.smflexdirection}` : ""};
    width: ${(props) => (props.smwidth ? `${props.smwidth}` : "")};
    align-items: ${(props) =>
      props.smalignitems ? `${props.smalignitems}` : ""};
    height: ${(props) => (props.smheight ? `${props.smheight}` : "")};
    gap: ${(props) => (props.smgap ? `${props.smgap}` : "")};
    margin: ${(props) => (props.smmargin ? `${props.smmargin}` : "")};
    padding: ${(props) => (props.smpadding ? `${props.smpadding}` : "")};
    border-radius: ${(props) => (props.smradius ? `${props.smradius}` : "")};
    overflow: ${(props) => (props.smoverflow ? props.smoverflow : "")};
    top: ${(props) => (props.smtop ? `${props.smtop}` : "")};
    left: ${(props) => (props.smleft ? `${props.smleft}` : "")};
    right: ${(props) => (props.smright ? `${props.smright}` : "")};
    bottom: ${(props) => (props.smbottom ? `${props.smbottom}` : "")};
  }
`;
