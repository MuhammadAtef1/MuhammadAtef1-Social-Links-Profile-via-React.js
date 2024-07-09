function Links (props) {
    let result = [] ;
    console.log(props);
    for (let i = 0 ; i < props.linksData.link.length ; i++) {
            result.push(<a target="_blank" href={props.linksData.link[i]} className="link">{props.linksData.linkName[i]}</a>);
    }
    return result ;
}

export default Links ;