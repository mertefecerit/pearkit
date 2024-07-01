import scss from "./BButton.module.scss";

function BButton({label}) {
    return (
        <button className={scss.bbutton}>{label}</button>
    )
}

export default BButton;