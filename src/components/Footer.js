import github from "./pages/images/github.png"
import linked from "./pages/images/linked.png"
function Footer() {
    return (
        <footer style={{backgroundImage:`url("https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY3OTc4MDAyNQ&ixlib=rb-4.0.3")`,
        backgroundSize: "cover"}}>
            <div className="footerContent">
            <a href="https://github.com/felixbor"> <img  className="icon" src={github} alt=" html CSS Java script intoduction"></img></a>
           
            <a href="https://www.linkedin.com/in/feliks-borshchevskyi-25325826a/" > <img  className="icon" src={linked}></img></a>
            </div>
        </footer>
    );
}

export default Footer;
