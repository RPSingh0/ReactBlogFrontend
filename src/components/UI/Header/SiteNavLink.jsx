import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleHeader} from "../uiSlice.js";
import {isMobile} from "react-device-detect";

function SiteNavLink({to, children}) {

    const dispatch = useDispatch();

    return (
        <NavLink to={to} onClick={() => isMobile ? dispatch(toggleHeader(false)) : ''}
                 className={"xl:text-xl lg:text-lg md:text-md sm:text-sm hover:text-blue-500 hover:bg-slate-200 flex flex-row items-center gap-x-4 text-xl w-full py-2 px-2 rounded-lg transition-all duration-200"}>
            {children}
        </NavLink>
    );
}

export default SiteNavLink;