import "antd/dist/antd.css";
import Blog from '../../components/blog';

export default function Home() {
    return (
        <section>
            <main className="w-full">
                <div className="ml-40 mt-10">
                    <Blog></Blog>
                </div>
            </main>
        </section>
    )
}
