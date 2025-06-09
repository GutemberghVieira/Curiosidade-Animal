"use client"

import {DadosCat, DadosDog} from "../Content/Cat_And_Dog/index";
import Dados from "../RetornaDados";
import Style from "./style.module.css";

import { useState  } from "react";
import Link from "next/link";
import Image from "next/image";

/**Icon Arrow Right and Left */
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright} from "react-icons/io"; 

/**Icons NetWorking */
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin  } from "react-icons/ci";
import { FaGithubAlt } from "react-icons/fa";  


const Content = (props) => {

let [Contador,setContador] = useState(0);

/**Botão da Direita vai */
function Aumentar()
{
setContador(Contador === 11 ? Contador : Contador += 1);
}

/**Botão da esquerda volta */
function Diminuir(){
setContador(Contador === 0 ? Contador : Contador -= 1);
}


return(
<div className={Style.ContainerTwoDivs}>

<div className={Style.Container}>

<div className={Style.ArrowLeft}>
<IoMdArrowDropleft onClick={() => Diminuir()}/>
</div>


<div className={Contador === 0 ? Style.ContainerApresentation : Style.Remove}>
<h2>Bem Vindo(a)s</h2>
<h3>é gratificante que você queira saber como o seu animalzinho se comporta ou tem atividades peculiares próprias.</h3>
<p>Você escolheu <span className={props.Animal === "Gato" ? Style.CatStyle : Style.DogStyle}>{props.Animal}</span> Passe para o lado para ver curiosidades incríveis sobre esse Animal!!</p>
</div>

<div className={Style.DadosStyle}>
{
props.MudarDados ? DadosCat.map((val,index) => (<Dados 
key={index}
Titulo={val.Titulo}
Content={val.Content}
Carrosel={Contador === val.id}
/>
))
: 
DadosDog.map((val,index) => (<Dados 
key={index}
Titulo={val.Titulo}
Content={val.Content}
Carrosel={Contador === val.id}
/>))}
</div>
 
<div className={Contador === 11 ? Style.SocialStyle : Style.NoSocialStyle}>
<p>&copy; No-Copy Right 2024 Developed By <span><Link className={props.Animal === "Gato" ? Style.CatStyle : Style.DogStyle} href={"https://vercel.com/gutemberghvieiras-projects"} rel={"noopener noreferrer"} target={"_blank"}>Gutembergh</Link></span> Vieira</p>
<p>Follow-me in my social NetWork </p> 

<nav>
<li><Link href={"https://www.instagram.com/gutovieira04/"} rel={"noopener noreferrer"} target={"_blank"}><CiInstagram className={Style.ColorLinksHover}/></Link></li>
<li><Link href={"https://www.linkedin.com/in/front-endgutembegrh/"} rel={"noopener noreferrer"} target={"_blank"}><CiLinkedin className={Style.ColorLinksHover}/></Link></li>
<li><Link href={"https://github.com/GutemberghVieira"} rel={"noopener noreferrer"} target={"_blank"}><FaGithubAlt className={Style.ColorLinksHover}/></Link></li>
</nav>
</div>

<div className={Style.ArrowRight}>
<IoMdArrowDropright onClick={() => Aumentar()}/>
</div>
</div> 

</div>
);
}

export default Content;