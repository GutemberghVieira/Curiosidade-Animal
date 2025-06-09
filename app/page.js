
"use client"
import { useState } from "react";

import StylePrincipal from "./PrincipalStyle.module.css";

/**Topo CardStyle*/
import TopoCard from "./components/Topo_Animal";


/**Content CardStyle*/
import ContentAnimal from "./components/Content_Animal"

export default function Home()
{
const gato     = "Gato";
const cachorro = "Cachorro";
const ContentButton = `Ver informações sobre o `

const [Comparation,setComparation] = useState(true);
const [trufy,setTrufy] = useState(false);

const StyleLarge   = "Expandir";
const StyleSmall   = "Diminuir";

const StyleRecived = "StyleYea";

const removeElements = "NotStyle";
const removeX        = "NotStyleX";

const [Look,setLook] = useState(true);
const [Animal,setAnimal] = useState(true);

function MudaContent (){
setComparation(!Comparation);
setTrufy(true);
setLook(true);
setAnimal(!Animal);
document.querySelector("body").classList.toggle("ContainerBlue");
}


return(
<div className={StylePrincipal.ContainerPrincipal}>

<TopoCard 
MudarContent  = {MudaContent}
ButtonStyle   = {Comparation ? `StyleCat` : "StyleDog"}
ButtonContent = {Comparation ? `${ContentButton + gato}` : `${ContentButton + cachorro}`}
/>
{trufy&&<ContentAnimal Setado={trufy} HelpTwo={setLook} Help={Look} EstiloLarge={StyleLarge} EstiloSmall={StyleSmall} EstiloVerdadeiro={StyleRecived} RemoveX={removeX} EstiloRenegado={removeElements} CuriosityAnimal={Animal} Gato={gato} Cachorro={cachorro} mudardados={MudaContent}/>}

</div>

);
}