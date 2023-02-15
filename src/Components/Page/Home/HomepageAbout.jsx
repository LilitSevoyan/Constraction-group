import React from "react";
import {Link,useNavigate}  from "react-router-dom";
import {FaGreaterThan,FaBasketballBall, FaCar } from "react-icons/fa";
import {GiSofa, GiLindenLeaf} from "react-icons/gi";
import AsNavFor from "../../Slider/ReactSlick"

export default function HomepageAbout({link}){
    let navigate = useNavigate();
    const heandleClick =(e)=>{
        e.preventDefault();
        window.scrollTo(0, 0)
        navigate("/about");
    }
    return(
      <div className="homePageAbout">
        <h1 className="HomepageAboutTitle">ՀԱՄԱԼԻՐԻ ՄԱՍԻՆ</h1>
        <div className="AboutContent">
          <AsNavFor/>
          <div className="FeaturesWrapper">
            <h2 className="features-title">Գյուրջյան Համալիր</h2>
            <div className="features-text">
              <p>
                Նոր բազմաբնակարան համալիր Նոր-Նորքի վարչական շրջանում՝
                Գյուրջյան փողոցում, Սրբ․ Գ․ Լուսավորիչ բժշկական կենտրոնի
                հարևանությամբ, գեղեցիկ տեսարանով դեպի Երևան։ Գյուրջյան 27
                հասցեում գտնվող նորակառույց շենքը առանձնանում է իր որակական
                բարձր հատկություններով: Շենքը բաղկացած է 12 բնակելի հարկերից,
                երկու կոմեռցիոն հարկերից և երեք հարկ ավտոկայանատեղ:
              </p>
            </div>
            <Link to = "/about" className="features-btn-see-all">Տեսնել ավելին 
              <FaGreaterThan/>
            </Link>
            <div className="features-bottom-content">
              <div className="features">
                <Link className="features-item" to = "/about" >
                  <GiSofa/>
                  <span>Հարմարավետ ինտերիեր</span>
                </Link>
                <Link className="features-item" to = "/about" > 
                  <FaBasketballBall/>
                  <span>Ժամանակակից խաղահրապարակ</span>
                </Link>
                <Link className="features-item" to = "/about" >
                  <GiLindenLeaf/>
                  <span>Կանաչապատ տարածք</span>
                </Link>
                <Link className="features-item" to = "/about" >
                  <FaCar/>
                  <span>Ընդարձակ ավտոկայանատեղի</span>
                </Link>
              </div>
            </div>
            <div className="linkWrapper">
              <span>Ծանոթացեք հիփոթեքի պայմաններին</span>
              <Link to ="/calculator"> այստեղ</Link>
            </div>
            <div className="btnsWrapper">
              <button className="PrimaryButton dark"onClick={heandleClick}>
                <span className="title">Մեր մասին</span>
              </button>
              <button className="PrimaryButton " onClick={link}>
                <span className="title">Բնակարաններ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}
