import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
    messege: string;
    onDialogAnswer: Function;
}

export default function DialogConfirmation({ messege, onDialogAnswer} : Props) {

    return(
        <div className="dsc-dialog-background" onClick={() => onDialogAnswer(false)}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{messege}</h2>
                <div className="dsc-dialog-btn-container" >
                    <div onClick={() => onDialogAnswer(false)}>
                        <ButtonInverse text="Não"/>
                    </div>
                    <div onClick={() => onDialogAnswer(true)}>
                        <ButtonPrimary text="Sim"/>
                    </div>  
                </div>
     
            </div>
        </div>
    );
}