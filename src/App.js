import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header/Index";
import videos from "./json/videos.json";

const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia"
]

function filterCategorie(id){
  return videos.filter( video => video.category === categories[id] )
}

function App() {
  return (
    
    <>
      <Header />
      <Banner image={'home'}/>
      <Container>

        <Category category={categories[0]}>
          { filterCategorie(0).map(video => <Card id={video.id} key={video.id}></Card>) }
        </Category>

        <Category category={categories[1]}>
          { filterCategorie(1).map(video => <Card id={video.id} key={video.id}></Card>) }
        </Category>

        <Category category={categories[2]}>
          { filterCategorie(2).map(video => <Card id={video.id} key={video.id}></Card>) }
        </Category>

        <Category category={categories[3]}>
          { filterCategorie(3).map(video => <Card id={video.id} key={video.id}></Card>) }
        </Category>

        <Category category={categories[4]}>
          { filterCategorie(4).map(video => <Card id={video.id} key={video.id}></Card>) }
        </Category>
        
      </Container>
      <Footer />
    </>
  );
}

export default App;
