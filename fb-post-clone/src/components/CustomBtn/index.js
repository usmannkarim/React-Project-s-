import './index.css'

function CustomBtn(props) {
    const contact = () => {
        alert('090078601')
    }

    return <button 
    className="contact-us"
    style={{ backgroundColor: props.bgColor }}
    onClick={contact}>{props.title}</button>
}

export default CustomBtn