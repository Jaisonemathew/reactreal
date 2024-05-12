import SearchBar from "../../components/SearchBar/Searchbar";
import "./homePage.scss";

const HomePage = () => {
    return  (
        <div className="homePage">
          <div className="textContainer">
            <div className="wrapper">
              <h1 className="title">Uncover Your Dream Residence</h1>
              <SearchBar />
              <p>
              Embarking on the quest to uncover your dream residence is a journey filled with anticipation and excitement. It’s about discovering that special place where every corner resonates with your personal style and every space promises the comfort of home.
              </p>
         
              <div className="boxes">
                <div className="box">
                  <h1>16+</h1>
                  <h2>Years of Experience</h2>
                </div>
                <div className="box">
                  <h1>200</h1>
                  <h2>Award Gained</h2>
                </div>
                <div className="box">
                  <h1>2000+</h1>
                  <h2>Property Ready</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="imgContainer">
            <img src="/bg.png" alt="" />
          </div>
        </div>
      );
    }

    export default HomePage;