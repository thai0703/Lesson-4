import App from "../App"
import "./Tag.css"

const Tag = (props) => {
    console.log(props)
    const handleClick = () =>{
        alert('Họ và tên: ' + props.name + ', id: ' + props.id + ', total: ' + props.total)
        
    }
    return(
        <>
        <div className="wrapper" onClick={handleClick}>
            <p className="name">{props.name}</p>
            <p className="id"> {props.id} </p>
            <h6 className="total"> {props.total} </h6>
        </div>
        </>
    )
}
export default Tag
