function MyButton({ name }: Readonly<{ name: string }>) {
  return (<button style={{ width: 200 }} className="text-orange-300 border border-orange-300 p-2 my-2 rounded-lg" type="button">{name}</button>)
}


function Resume() {
  return (<div>
    <h3>Vidan MURATI</h3>
    <h1>Développeur Junior </h1>
    <h5><span className="text-orange-300">Compétences</span> en C++ / Programmation orientée objet / OpenGL </h5>
    <p className="my-2 p-2">
      Jeune diplômé d'un Master Informatique Sciences de l'image,
      passionné d'algorithmie, des technologies 3D et de vision par ordinateur.
    </p>
  </div>);
}

function RoundedPicture() {
  return (<img alt="Vidan MURATI" style={{ width: "200px" }} className="rounded-full shadow-lg" src="photo_profil.jpg" />)
}

export default function Page() {
  return (
    <main className="flex min-h-screen  items-center justify-between p-24">
      <div className="flex-row flex">
        <div className="flex flex-col p-4 m-4">
          <div className="" style={{width:"75%"}}>
            <Resume />
          </div>
          <MyButton name={"En savoir plus"} />
        </div>
        <div className="flex my-auto flex-col p-4 m-4">
          <RoundedPicture />
        </div>
      </div>
    </main>
  )
}