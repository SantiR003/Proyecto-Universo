import { Footer } from "./Footer";
import { Header } from "./Header";
import { HomeUniverse } from "./Home";

export const PageUniverse = ({valueToDetails}) => {


 return (
  <>
   <Header/>

   <HomeUniverse valueToDetails={valueToDetails}/>
  </>
 );

}