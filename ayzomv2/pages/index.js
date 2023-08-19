
import "antd/dist/reset.css";
import ProfileComponent from '../components/profile';
import Contact from '../components/contact';

export default function Home() {
  return (
    <>
      <div>
        <section>
          <main className="w-full">
            <div>
              <ProfileComponent></ProfileComponent>
            </div>
            <div className="bg-white">
              <Contact></Contact>
            </div>
          </main>
        </section>
      </div>
    </>
  )
}
