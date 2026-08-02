import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Shield,
  Users,
  Award,
  Clock,
  Zap,
  ArrowRight,
} from "lucide-react";

type IconType =
  | "custom"
  | "expert"
  | "solutions"
  | "durable";


interface AdvantageItem {
  id: string;
  iconType: IconType;
  title: string;
  desc: string;
  highlight: string;
}


const DATA = {
  badgeLabel: "POURQUOI NOUS CHOISIR",

  titleMain: "Une différence ",

  titleHighlight: "concrète",

  titleEnd: " à chaque étape.",

  description:
    "Nous ne vendons pas juste des aménagements ou des interfaces. Nous construisons des partenariats durables basés sur l’excellence opérationnelle et la confiance mutuelle.",

  items: [
    {
      id: "adv-1",
      iconType: "custom",
      title: "Approche personnalisée",
      desc: "Chaque projet est unique. Nous prenons le temps de comprendre en profondeur votre culture, vos besoins et vos ambitions.",
      highlight: "SUR-MESURE",
    },

    {
      id: "adv-2",
      iconType: "expert",
      title: "Expertise professionnelle",
      desc: "Une équipe multidisciplinaire senior combinant design, technologie et stratégie.",
      highlight: "MULTI-EXPERTISE",
    },

    {
      id: "adv-3",
      iconType: "solutions",
      title: "Solutions adaptées",
      desc: "Des solutions concrètes et évolutives intégrées à votre environnement.",
      highlight: "INTÉGRATION",
    },

    {
      id: "adv-4",
      iconType: "durable",
      title: "Accompagnement durable",
      desc: "Un suivi continu avec optimisation et amélioration permanente.",
      highlight: "LONG TERME",
    },
  ] as AdvantageItem[],
};



const listVariants: Variants = {

  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition:{
      staggerChildren:0.12
    }
  }
};



const itemVariants: Variants = {

  hidden:{
    opacity:0,
    x:30
  },

  visible:{
    opacity:1,
    x:0,

    transition:{
      type:"spring",
      stiffness:80,
      damping:15
    }
  }

};



export default function WhyChooseUs(){


const [hoveredId,setHoveredId]=useState<string | null>(null);



function getIcon(
  type:IconType,
  hover:boolean
){

const style =
`transition-transform duration-500 ${
hover ? "rotate-12 scale-110" : ""
}`;


switch(type){

case "custom":
return <Shield size={24} className={style}/>;


case "expert":
return <Users size={24} className={style}/>;


case "solutions":
return <Award size={24} className={style}/>;


case "durable":
return <Clock size={24} className={style}/>;


}

}




return (

<section
id="whyus"
className="
relative
py-20
bg-zinc-950
dark:bg-zinc-50
overflow-hidden
"
>


<div
className="
absolute inset-0
bg-[radial-gradient(#27272a_1px,transparent_1px)]
[background-size:40px_40px]
opacity-40
"
/>



<div
className="
relative z-10
max-w-7xl
mx-auto
px-6
"
>


<div
className="
grid
lg:grid-cols-12
gap-12
"
>



{/* LEFT */}

<motion.div

className="
lg:col-span-5
lg:sticky
lg:top-28
"

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<div
className="
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-zinc-900
dark:bg-white
mb-6
"
>

<Zap
size={14}
className="text-emerald-500"
/>


<span
className="
text-xs
font-bold
tracking-widest
text-zinc-400
"
>

{DATA.badgeLabel}

</span>

</div>




<h2
className="
text-4xl
font-black
text-white
dark:text-zinc-950
"
>

{DATA.titleMain}

<span
className="
text-emerald-500
"
>

{DATA.titleHighlight}

</span>

{DATA.titleEnd}

</h2>



<p
className="
mt-6
text-zinc-400
leading-relaxed
"
>

{DATA.description}

</p>


</motion.div>





{/* RIGHT */}

<motion.div

variants={listVariants}

initial="hidden"

whileInView="visible"

viewport={{
once:true
}}

className="
lg:col-span-7
space-y-5
"

>



{
DATA.items.map(item=>{


const active =
hoveredId===item.id;



return (

<motion.div

key={item.id}

variants={itemVariants}


onMouseEnter={()=>
setHoveredId(item.id)
}

onMouseLeave={()=>
setHoveredId(null)
}


className="
group
relative
bg-zinc-900/50
dark:bg-white
border
border-zinc-800
dark:border-zinc-200
rounded-2xl
p-6
transition-all
hover:border-emerald-500/40
"

>



<div
className={`
absolute
left-0
top-6
bottom-6
w-1
bg-emerald-500
transition-transform
${active ? "scale-y-100":"scale-y-0"}
`}
/>



<div
className="flex gap-5"
>


<div
className={`
p-3
rounded-xl
${active
?
"bg-emerald-500 text-white"
:
"bg-zinc-800 text-emerald-400"
}
`}
>

{getIcon(item.iconType,active)}

</div>




<div>

<h3
className="
text-xl
font-bold
text-white
dark:text-zinc-950
"
>

{item.title}

</h3>


<p
className="
mt-2
text-sm
text-zinc-400
"
>

{item.desc}

</p>



<div
className="
mt-4
flex
items-center
gap-2
text-xs
text-emerald-500
"
>

{item.highlight}

<ArrowRight size={14}/>

</div>


</div>


</div>


</motion.div>


)

})

}



</motion.div>



</div>


</div>


</section>


)

}