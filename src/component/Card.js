import Image from "./Avatar";
import NameData from "./NameData";
import Links from "./Links";
function Card(props) {
    console.log(props);
    return (
        <div className = "container flex">
        <Image src={props.data.src} />
        <NameData name = {props.data.name} address={props.data.address} jobTitle={props.data.jobTitle}/>
        <Links linksData={props.data.linksData}/>
        </div>
    );
}
export default Card ;