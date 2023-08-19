import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return <>
    <Header></Header>
    <div className='flex flex-col'>
      <div className=''>
      {children}
      </div>
    </div>
    <Footer></Footer>
  </>
}