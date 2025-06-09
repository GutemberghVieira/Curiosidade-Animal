"use client";

import CardStyleAnimal from "./style.module.css";

/**Container Topo*/
export default function TopoAnimal(props)
{

return(
<div className={CardStyleAnimal.CardContainer}>

<div>
<h2>Mundo Animal</h2>
<p>Descubra 10 curiosidades sobre os dois animais mais amados pela população Brasileira.</p>

<ul>
<li><span className={CardStyleAnimal.Dog}>Cachorro</span></li>
<li className={CardStyleAnimal.ECommerceStyle}>&</li>
<li><span className={CardStyleAnimal.Cat}>Gato</span></li>
</ul>

<button type="button" className={props.ButtonStyle} onClick={props.MudarContent}>{props.ButtonContent}</button>
</div>

</div>
);
}