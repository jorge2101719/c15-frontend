const Blog = () => {
    return (
        <section className="flex flex-col m-4 w-[50%]">
        <h1 className="text-4xl font-bold text-blue-500 text-center">BLOG</h1>
        <div className="m-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam assumenda doloribus repudiandae magnam, quod fugiat, saepe, delectus aliquam quibusdam neque voluptatum. Debitis dignissimos, mollitia obcaecati ut aliquid nam explicabo.
        </div>

        <div className="text-center">
        <button className="bg-orange-400 rounded-xl hover:bg-orange-600 boton" onClick={() => console.log('Vamos al blog')}>OK</button>
        </div>
    </section>

    )
}

export default Blog