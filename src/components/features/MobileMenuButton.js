import React from "react";

const MobileMenuButton = ({clickFunction, text, link}) => {
    return (
        <a
        href={link}
        className="btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
        onClick={clickFunction}
        >
        {text}
        </a>
    )
}

export default MobileMenuButton;