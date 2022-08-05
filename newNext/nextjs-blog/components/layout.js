import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return <>
    <Header></Header>
    <body className='flex flex-col'>
      <div className=''>
      {children}
      </div>
    </body>
    <Footer></Footer>
  </>
}