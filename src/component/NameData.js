function NameData (props) {
    return (
        <>
            <h1>{props.name}</h1>
            <p className="yellow">{props.address}</p>
            <p>{props.jobTitle}</p>
        </>
    );
}
export default NameData ;