"use client";
import { motion } from 'framer-motion';

function SquareImage({ src }: Readonly<{ src: string }>) {
  return (
    <motion.img initial={{ x: 500 }} viewport={{ once: true }} whileInView={{ x: 0 }} transition={{ type: "spring", duration: 2 }} whileHover={{ scale: 1.1 }} src={src} className='aspect-square rounded-lg' />
  )
}

function SmoothTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 1 }}>
      {children}
    </motion.div>
  )
}

function Experience({title,tools,resume,description,image}: Readonly<{title:string,tools:string,resume:string,description:string[],image:string}>){
      return (<div className='rounded-lg ms-24 me-24 mt-12 '>
          <div className="flex-row flex justify-center ">
            <div className="flex flex-col justify-center items-center basis-2/5 p-4 m-4">
          <img src={image}/>
          </div>
          <div className="flex flex-col justify-center rounded-lg basis-3/5 p-8 m-4 bg-white" style={{opacity:0.8}}>
            <p className="font-bold text-3xl">{title} <span className='ms-1 text-orange-400'>{tools}</span></p>
            <p className="font-light text-md">{resume}</p>
            <ul className='text-sm'>
                {description.map((d,i) => {
                  return <li key={i}>- {d}</li>
                })}
            </ul>
          </div>
          </div>
        </div>);
}

function MyButton({ name,src }: Readonly<{ name: string,src:string }>) {
  return (<motion.button whileHover={{ scale: 1.1 }} onClick={(e) => { location.href = src }} style={{ width: 200 }} className="text-orange-300 hover:bg-orange-300 hover:text-white border border-orange-300 p-2 my-2 rounded-lg" type="button">{name}</motion.button>)
}

function Resume() {
  return (
    <div>
      <h3 className="font-bold" >Vidan MURATI</h3>
      <h1 className="text-2xl font-bold">Ingénieur études et développement informatique Junior </h1>
      <p className="my-2">
        Jeune diplômé d&apos;un Master Informatique Sciences de l&apos;image
      </p>
      <MyButton name={"Découvrir mon CV"} src={"CV/CV.pdf"}></MyButton>
    </div>);
}


function RoundedPicture() {
  return (<motion.img initial={{ opacity: 0, width: 200 }} animate={{ opacity: 1, width: 200 }} alt="Vidan MURATI" className="" src="pp_rounded.png" />)
}

function Logo({ source, url }: Readonly<{ source: string, url: string }>) {
  return (<motion.img whileHover={{ scale: 1.1 }} style={{ width: 50 }} src={source} onClick={(e) => { location.href = url }} alt="linkedin" />)
}

export default function Page() {
  return (
    <main className="background-watercolor">
      <div className="flex min-h-screen items-center justify-between p-48">
        <SmoothTransition>
          <div className="rounded flex flex-col bg-white shadow-lg border-orange-100 border-4" style={{ opacity: 0.9 }}>
            <div className="flex-row flex ">
              <div className="flex flex-col p-4 m-4">
                <Resume />
              </div>
              <div className="flex my-auto flex-col p-4 m-4">
                <RoundedPicture />
              </div>
            </div>
          </div>
        </SmoothTransition>
        <div className="flex-col justify-center m-4 items-center flex">
          <div className='m-1'>
            <Logo source={"linkedin.png"} url={"https://www.linkedin.com/in/vidan-murati-ab02b91b3/"} />
          </div>
          <div className='m-1'>
            <Logo source={"Arobase.png"} url={"mailto:vidanmurati@hotmail.fr"} />
          </div>
          <div className='m-1'>
            <Logo source={"Instagram.png"} url={"https://www.instagram.com/vidanm_/"}/>
          </div>
        </div>
      </div>
      <SmoothTransition>
        <Experience title={"Cartographie des stocks"} 
        tools={"C# / Javascript / D3js"} 
        resume={"Projet logistique de visualisation des stocks, jusqu'au niveau des emplacements."} 
        image={"carto.png"}
        description={[
        "Mapping de données en BDD avec des graphs SVG",
        "Création de graphs représentant les stocks (vue de dessus / vue de face)",
        "Carte OSM avec visualisation du nombre d'articles par entrepôt",
        "Recherche et filtres parmi tous les articles",
        "Dégradé de couleurs pour représenter des critères customisables"]}/>
      </SmoothTransition>
      <SmoothTransition>
        <Experience title={"GLTF Viewer"} 
        tools={"C++"} 
        resume={"Réalisation d'un outil de rendu d'objets 3D au format GLTF."} 
        image={"gltfviewer.png"}
        description={[
        "Étude du format GLTF, structures de données etc.",
        "Affichage des meshes",
        "Application des textures",
        "Calcul des lumières (Directional lighting / Spotlight...)",
        "Permettre à l'utilisateur de se déplacer dans la scène 3D",
        "Permettre à l'utilisateur d'agir sur les paramètres de la scène 3D",
        "Calcul des normal maps"]}/>
      </SmoothTransition>
      <SmoothTransition>
        <Experience title={"Animation physique d'un drapeau"} 
        tools={"C / Raylib"} 
        resume={"Réalisation d'un drapeau animé en 3D."} 
        image={"drapeau.jpg"}
        description={[
        "Implémentation d'un système masses ressorts",
        "Affinage des paramètres de la simulation",
        "Modification dynamique des paramètres",
        "Calcul des forces",
        "Calcul du vent"]}/>
      </SmoothTransition>
      <SmoothTransition>
        <Experience title="Rust Allocine Scraper"
          tools={"Rust"}
          resume={"Développement d'une application de scraping du site allocine.fr"}
          image={"rust_1.png"}
          description={["https://github.com/vidanm/rust_allocine_scraper"]}
        />
      </SmoothTransition>
      <SmoothTransition>
        <Experience title={"Aide à l'implantation des articles en vue d'un office"} 
        tools={"C# / Javascript / D3js"} 
        resume={"Projet logistique, permettant à un utilisateur d'attribuer des articles à des emplacements en fonction de différents critères."} 
        image={"implantation.png"}
        description={[
        "Mapping de données en BDD avec des graphs SVG",
        "Interactivité, pour permettre l'association article / emplacement",
        "Filtres et recherche parmis les critères",
        "Recueil de besoin, réunions régulières avec les services concernés par l'outil",
        "État d'avancement régulier, difficultés étudiées en équipe"]}/>
      </SmoothTransition>
      <div className='rounded-lg ms-24 me-24 mt-24 '>
        <div className="flex-row flex justify-center ">
          <div className="flex flex-col justify-center items-center basis-2/5 p-4 m-4">
            <div className="grid grid-cols-4 gap-1">
              <SquareImage src={"3D/Church2.jpg"} />
              <SquareImage src={"3D/cofee.png"} />
              <SquareImage src={"3D/Ecrire.jpg"} />
              <SquareImage src={"3D/Origami.jpg"} />
              <SquareImage src={"3D/Photo.jpg"} />
              <SquareImage src={"3D/porcorossi.png"} />
              <SquareImage src={"3D/raquette.png"} />
              <SquareImage src={"3D/telephone.png"} />
              <SquareImage src={"3D/TV.png"} />
              <SquareImage src={"3D/Velo.jpg"} />
              <SquareImage src={"3D/tulp.png"} />
              <SquareImage src={"Dessins/fusain_1.png"} />
              <SquareImage src={"Dessins/plante.png"} />
              <SquareImage src={"Dessins/portrait.png"} />
              <SquareImage src={"Dessins/noel.png"} />
              <SquareImage src={"3D/Church.png"} />

            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-4 m-4 basis-2/5">
            <SquareImage src={"3D/church.png"} />
          </div>
        </div>
      </div>
    </main>
  )
}