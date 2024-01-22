const Blog = () => {
    return (
        <div className="flex flex-row flex-around p-4">
            <section className="flex flex-col m-4 w-[50%]">
                <h1 className="text-4xl font-bold text-blue-500 text-center">DIAGNÓSTICO</h1>
                <div className="m-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem, porro maxime corporis voluptas, ut ratione eveniet distinctio, eum commodi architecto rem id provident! In id voluptatem obcaecati numquam rerum?</div>

                <div className="text-center">
                <button className="bg-green-600 text-white w-[25%] p-2 rounded-xl hover:bg-green-900">COMENZAR</button>
                </div>
            </section>

            <section className="w-[10%]"></section>

            <section className="flex flex-col m-4 w-[50%]">
                <h1 className="text-4xl font-bold text-blue-500 text-center">BLOG</h1>
                <div className="m-5 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam assumenda doloribus repudiandae magnam, quod fugiat, saepe, delectus aliquam quibusdam neque voluptatum. Debitis dignissimos, mollitia obcaecati ut aliquid nam explicabo.
                </div>

                <div className="text-center">
                <button className="bg-orange-400 text-white w-[25%] p-2 rounded-xl">OK</button>
                </div>
            </section>
        </div>
    )
}

export default Blog