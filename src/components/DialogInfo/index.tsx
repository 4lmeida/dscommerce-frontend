import ButtonPrimary from "../ButtonPrimary";

type Props = {
    messege: string;
    onDialogClouse: Function;
}

export default function DialogInfo({ messege, onDialogClouse} : Props) {

    return(
        <div className="dsc-dialog-background" onClick={() => onDialogClouse()}>
            <div className="dsc-dialog-box" onClick={(event) => event.stopPropagation()}>
                <h2>{messege}</h2>
                <div className="dsc-dialog-btn" onClick={() => onDialogClouse()}>
                    <ButtonPrimary text="OK"/>
                </div>
                
            </div>
        </div>
    );
}