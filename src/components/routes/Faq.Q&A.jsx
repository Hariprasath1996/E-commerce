import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";
const FaqQuestionsAndAnswers  = () => {
    const {question,answer}=items;
    const [Show,setShow]=useState(false)
        
    const ClickFaqHandler =()=>{
        setShow((prev)=>!(prev))
    }

    return ( 
        <article >
                <div>
                <h1>{question}</h1>
                <BiDownArrow OnClick ={ ClickFaqHandler} />
                </div>
                <div>
                { Show && <p>{answer}</p> }
                <BiUpArrow />                                       
                </div>
        </article>
    );
}

export default FaqQuestionsAndAnswers ;
