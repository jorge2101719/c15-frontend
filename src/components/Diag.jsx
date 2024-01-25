const Diag = () => {
    return (
        <section className="flex flex-col m-4 w-[50%]">
            <h1 className="text-4xl font-bold text-blue-500 text-center">DIAGNÓSTICO</h1>
            <div className="m-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem, porro maxime corporis voluptas, ut ratione eveniet distinctio, eum commodi architecto rem id provident! In id voluptatem obcaecati numquam rerum?</div>

            <div className="text-center">
            <button className="bg-green-500 rounded-xl hover:bg-green-700 boton" onClick={() => console.log('Veamos el diagnóstico')}>COMENZAR</button>
            </div>
        </section>
    )
}

export default Diag