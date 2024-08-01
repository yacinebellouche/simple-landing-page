
function CoreData(props){

return (
    <li>
        <img src={props.item.image} alt={props.item.title} />
        <h4>{props.item.title}</h4>
        <p>{props.item.text}</p>
    </li>
)

}

export default CoreData;