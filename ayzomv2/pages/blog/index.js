import "antd/dist/antd.css";
import Blog from '../../components/blog';

export default function Home() {
    return (
        <main className="mt-36">
            <div className="w-full">
                <div className="ml-40">
                    <Blog></Blog>
                </div>
            </div>
        </main>
    )
}
