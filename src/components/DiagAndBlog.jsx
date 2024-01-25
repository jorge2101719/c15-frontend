import Blog from "./Blog"
import Diag from "./Diag"

const DiagAndBlog = () => {
    return (
        <div className="diagBlog">
            <Diag />
            {/* <section className="w-[10%]"></section> */}
            <Blog />
        </div>
    )
}

export default DiagAndBlog