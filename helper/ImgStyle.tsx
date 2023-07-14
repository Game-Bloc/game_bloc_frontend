import React from "react";

interface props {
    className?: string;
    children?: any;
    src: any;
    alt?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
    blend?: string;
    margin?: string;
    position?: string
    top?: string
    bottom?: string
    right?: string
    left?: string
    opacity?: string
    border?: string
    borderWidth?: string
    borderStyle?: string
    borderColor?: string
    objectFit?: string;
    zIndex?:string;

    mddisplay?: string;
    mdgridcolumn?:string;
    mdwrap?:string;
    mdflexdirection?:string;
    mdwidth?:string;
    mdheight?:string;
    mdrowgap?:string;
    mdcolumngap?:string;
    mdgap?:string;
    mdmargin?:string;
    mdpadding?:string;
    mdradius?:string;
    mdalignitems?:string;
    mdjustifycontent?:string;
    mdflexratio?:string;
    mdoverflow?:string;
    mdtop?:string;
    mdleft?:string;
    mdright?:string;
    mdbottom?:string;

    xmdisplay?: string;
    xmdgridcolumn?:string;
    xmdwrap?:string;
    xmdflexdirection?:string;
    xmdwidth?:string;
    xmdheight?:string;
    xmdrowgap?:string;
    xmdcolumngap?:string;
    xmdgap?:string;
    xmdmargin?:string;
    xmdpadding?:string;
    xmdradius?:string;
    xmdalignitems?:string;
    xmdjustifycontent?:string;
    xmdflexratio?:string;
    xmdoverflow?:string;
    xmdtop?:string;
    xmdleft?:string;
    xmdright?:string;
    xmdbottom?:string;

    smdisplay?: string;
    smgridcolumn?:string;
    smwrap?:string;
    smflexdirection?:string;
    smwidth?:string;
    smheight?:string;
    smrowgap?:string;
    smcolumngap?:string;
    smgap?:string;
    smmargin?:string;
    smpadding?:string;
    smradius?:string;
    smalignitems?:string;
    smjustifycontent?:string;
    smflexratio?:string;
    smoverflow?:string;
    smtop?:string;
    smleft?:string;
    smright?:string;
    smbottom?:string;
    maxdisplay?:string;
}

export const ImgStyle = ({className, src, alt}:props) => {

    return (
        <img className={className} src={src} alt={alt} />
    )
}