import chefClaudeLogo from "../assets/Chef Claude Icon.png"

export default function Header(){
    return(
        <header>
            <img className="logo" src={chefClaudeLogo} alt="Chef Claude logo"/>
            <h1>Chef Claude</h1>
        </header>
    )
}