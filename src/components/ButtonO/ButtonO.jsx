import Button from "react-bootstrap/Button"
export default function ButtonO(props){
    return(

    <button className="button" varient="btn-flat" style={{backgroundColor:'#F28D35', color:'#FFFFFF', border:"none", borderRadius:3}}>
        {props.name}
    </button>
    )
} 