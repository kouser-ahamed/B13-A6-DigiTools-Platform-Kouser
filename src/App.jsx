import './App.css'
import Banner from './Component/Herosection/Banner'
import PremiumTools from './Component/Herosection/PremiumTools'
import SmallHero from './Component/Herosection/SmallHero'
import Navbar from './Component/navbar/Navbar'
import Footer from './Component/Footer/Footer'
import ModelLode from './Component/AllModelCard/ModelLode'



const promisedata = async () => {
  const response = await fetch('/modeldata.json')
  return response.json()

}

const dataPromise = promisedata()
console.log(dataPromise)

function App() {


  return (

    <>
    <Navbar>  </Navbar>
    <Banner> </Banner>
    <SmallHero></SmallHero>
    <PremiumTools></PremiumTools>



    <ModelLode dataPromise={dataPromise}></ModelLode>
    <Footer></Footer>

    </>

    


  )
}

export default App
