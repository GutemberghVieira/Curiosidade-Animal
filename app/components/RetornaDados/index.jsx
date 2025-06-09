import Style from "./style.module.css";

const Dados = (props) => {
return(
props.Carrosel === true && <div className={Style.Container_Content}>
<h2>{props.Titulo}</h2>
<p>{props.Content}</p>
</div>
);
}

export default Dados;