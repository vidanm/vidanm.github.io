"use client";
import { motion } from 'framer-motion';

function SquareImage({ src }: Readonly<{ src: string }>) {
  return (
    <motion.img initial={{ x: 500 }} viewport={{ once: true }} whileInView={{ x: 0 }} transition={{ type: "spring", duration: 2 }} whileHover={{ scale: 1.3 }} src={src} className='aspect-square rounded-lg' />
  )
}

function SmoothTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 1 }}>
      {children}
    </motion.div>
  )
}

function MyButton({ name,src }: Readonly<{ name: string,src:string }>) {
  return (<motion.button whileHover={{ scale: 1.1 }} onClick={(e) => { location.href = src }} style={{ width: 200 }} className="text-orange-300 hover:bg-orange-300 hover:text-white border border-orange-300 p-2 my-2 rounded-lg" type="button">{name}</motion.button>)
}

function Resume() {
  return (
    <div>
      <h3 className="font-bold" >Vidan MURATI</h3>
      <h1 className="text-2xl font-bold">Développeur Junior </h1>
      <h5 className="font-bold"><span className="text-orange-300">Compétences</span> en C++ / Programmation orientée objet / OpenGL </h5>
      <p className="my-2">
        Jeune diplômé d&apos;un Master Informatique Sciences de l&apos;image,
        passionné d&apos;algorithmie, des technologies 3D et de vision par ordinateur.
      </p>
      <MyButton name={"Découvrir mon CV"} src={"CV/CV.pdf"}></MyButton>
    </div>);
}

function RoundedPicture() {
  return (<motion.img initial={{ opacity: 0, width: 200 }} animate={{ opacity: 1, width: 200 }} alt="Vidan MURATI" className="" src="photo_profil_3.jpg" />)
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