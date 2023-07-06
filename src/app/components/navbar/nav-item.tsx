import Link from "next/link";
import { Section } from "./models/navbar.interface";

const NavItem: React.FC<Section> = ({ title, url, active, onClick }) => {
    const linkClassName = active
    ? "text-white border-b-sky-500 border-b-2 px-3 py-2 text-md font-medium"
    : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium";
    return (
        <Link className={linkClassName} href={url} onClick={onClick}>
            {title}
        </Link>
    );
};

export default NavItem;