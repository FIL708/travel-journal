import { GoGlobe } from "react-icons/go";

export default function Header() {
    return (
        <header>
        <GoGlobe className="header--logo"/>
            <p className="header--name">my travel journal.</p>
        </header>
    )
}