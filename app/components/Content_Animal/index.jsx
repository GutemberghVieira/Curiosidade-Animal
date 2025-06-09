'use client'
import { useState } from "react";

import StyleContent from "./style.module.css";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { IoCloseSharp } from "react-icons/io5";

/**Content Dog and Cat*/
import Content from "../Content";

export default function ContentAnimal (props){

const [Mudar,setMudar] = useState(false);

function Condition(){
props.HelpTwo(!props.Help)
}

function SetarMudarEstilo(){
setMudar(!Mudar);
}

return (
<div className={`${props.Setado === true && props.Help !== false ? props.EstiloVerdadeiro : props.EstiloRenegado} ${Mudar ? props.EstiloLarge : props.EstiloSmall}`}>
 
<div className={StyleContent.ContainerArrow}>
<i>
{Mudar ? <IoIosArrowDown onClick={SetarMudarEstilo}/> : <IoIosArrowUp onClick={SetarMudarEstilo}/>}
<p>{Mudar ?  "Diminuir" : "Expandir" }</p>
<p>Conteúdo</p>
</i>
</div>

<div className={StyleContent.X_Style}>
<i>
{Mudar ? "" :<IoCloseSharp title={"Fechar"} onClick={Condition}/>}
</i>
</div>

<div className={StyleContent.NewContainer}>
{Mudar ? props.CuriosityAnimal ? 
<Content MudarDados={props.mudardados} Mudanca={props.CuriosityAnimal} Animal={props.Gato}/>:<Content Mudanca={props.CuriosityAnimal} Animal={props.Cachorro}/> : ""}

</div>

</div>
);
}