"use client";
import { motion } from 'framer-motion';

function SmoothTransition({children}){
  return (
    <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{type:"spring",duration:1}}>
      {children}
    </motion.div>
  )
}

function MyButton({ name }: Readonly<{ name: string }>) {
  return (<motion.button whileHover={{scale:1.1}} style={{ width: 200 }} className="text-orange-300 hover:bg-orange-300 hover:text-white border border-orange-300 p-2 my-2 rounded-lg" type="button">{name}</motion.button>)
}

function Resume() {
  return (
  <div>
    <h3 >Vidan MURATI</h3>
    <h1>Développeur Junior </h1>
    <h5><span className="text-orange-300">Compétences</span> en C++ / Programmation orientée objet / OpenGL </h5>
    <p className="my-2">
      Jeune diplômé d'un Master Informatique Sciences de l'image,
      passionné d'algorithmie, des technologies 3D et de vision par ordinateur.
    </p>
  </div>);
}

function RoundedPicture() {
  return (<motion.img initial={{y:-100,rotate:180,borderRadius:50}} animate={{y:0,rotate:0,borderRadius:100}} alt="Vidan MURATI" style={{ width: "200px" }} className="rounded-full shadow-lg" src="photo_profil.jpg" />)
}

function Logo({source} : Readonly<{source:string}>) {
  return (<img style={{width:50}} src={source} alt="linkedin"/>)
}

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      <div className="flex flex-col">
        <div className="flex-row flex">
          <div className="flex flex-col p-4 m-4">
            <SmoothTransition>
              <Resume/>
              <MyButton name={"En savoir plus"} />
            </SmoothTransition>
          </div>
          <div className="flex my-auto flex-col p-4 m-4">
            <RoundedPicture />
          </div>
        </div>
        <div className="flex-row justify-center m-4 items-center flex">
          <Logo source={"linkedin.png"}/>
        </div>
      </div>
    </main>
  )
}