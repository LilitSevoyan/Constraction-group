import React from "react"
import {gyurjyan27,construction,garden1,garden2,garden3,garden4,garden5} from "../../assets"
import {Link} from "react-router-dom"
import {FaBasketballBall, FaCar } from "react-icons/fa";
import {GiSofa, GiLindenLeaf} from "react-icons/gi";
//import "../../Style/aboutpage/about.css"
export default function AboutWrapper() {
  
  return (
        <div className="AboutMainContent">
          <div  className="AboutTextContent">
            <div className="TextWrapper">
              <h2 className="wrapper-title">Գյուրջյան Համալիր</h2>
              <div className="description">
                <p>
                  Նոր բազմաբնակարան համալիր Նոր-Նորքի վարչական շրջանում՝ Գյուրջյան փողոցում, Սրբ․ Գ․ Լուսավորիչ
                  բժշկական կենտրոնի հարևանությամբ, գեղեցիկ տեսարանով դեպի Երևան։ Գյուրջյան 27 հասցեում գտնվող 
                  նորակառույց շենքը առանձնանում է իր որակական բարձր հատկություններով: Շենքը բաղկացած է 12 բնակելի 
                  և երկու կոմեռցիոն հարկերից, երեք հարկ ավտոկայանատեղից: Ընդհանուր 14 հարկերից։
                </p>
                <img src={gyurjyan27} alt="" className="RightImgWrapper"/>
                <ul>
                  <li>
                    <span>✅ Առաջին և երկրորդ հարկերը նախատեսված են առևտրային և այլ ապասարկման տարածքների համար </span>
                  </li>
                  <li>
                    <span>✅ 3-14 հարկերը լինելու են բնակելի՝ 1, 2, 3 և 4 սենյականոց բնակարաններով</span>
                  </li>
                  <li>
                    <span>✅ -1, -2, -3 հարկերում լինելու է ավտոկայանատեղի</span>
                  </li>
                  <li>
                    <span>✅ Տարածքում լինելու են 1600 ք/մ կանաչ գոտիներ, խաղահրապարակ և լիարժեք հանգստի համար նախատեսված տարածքներ</span><br/>
                  </li>
                  <li>
                    <span>✅ Համալիրը ունենալու է 6 մուտք ՝ անաղմուկ վերելակներով</span>
                  </li>
                  <li>
                    <span>✅Երեսպատումը՝ ջերմամեկուսիչ և ջրամեկուսիչ շերտերով </span>
                  </li>
                  <li>
                    <span> ✅Պատուհանները՝ բարձրորակ թերմոալյումինե պրոֆիլներով</span>
                  </li>
                    
                  
                </ul>
                <div className="AboutTitle">
                  <img src={construction} alt="" className="LeftImgWrapper"/>
                  <p>
                   <span>
                     Գյուրջյան Համալիրի շինարարության ավարտը նախատեսվում է 2023 թվականի 2-րդ կիսամյակին։ Բնակելի համալիրը
                     կառուցվում է բացառապես միջազգային չափանիշներին համապատասխան՝ պահպանելով ՀՀ և միջազգային բնապահպանական, 
                     անվտանգության և շինարարական նորմերի պահանջները։ Համալիրի նախագիծն անցել է անվտանգության բոլոր անհրաժեշտ
                     փորձաքննությունները. ​Սեյսմակայունության I կարգ՝ 9+ բալ դիմացկունություն:<br/>Համալիրի կառուցման ընթացքում, շինարարության մեջ 
                     օգտագործվող նյութերն անցնում են համապատասխան փորձաքննությունները, ապա ամեն փուլային աշխատանքների 
                     ավարտից հետո, կառուցված ամբողջ հատվածը ենթարկվում է հետազննության լիցենզավորված կազմակերպությունների 
                     կողմից, թե՛ նյութերի ցուցաբերած որակական հատկանիշների, թե՛ կոնստրուկտիվ մեխանիզմների համատեղ գործարկման 
                     արդյունավետության ստուգման նպատակով։
                   </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="features-list">
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
          <div className="main-img-wrapper">
            <div className="main-img-content">
              <div className="img-item">
                <img src={garden1} alt="" />
              </div>
              <div className="img-item">
                <img src={garden2} alt="" />
              </div>
              <div className="img-item">
                <img src={garden3} alt="" />
              </div>
              <div className="img-item">
                <img src={garden4} alt="" />
              </div>
              <div className="img-item">
                <img src={garden5} alt="" />
              </div>
            </div>
          </div>
        </div>     
  )
}

//<span>Տարածքում լինելու է ավելի քան 1600 ք/մ տարածք՝ նախատեսված կանաչ գոտիներ, խաղահրապարակ և տարածք լիարժեք հանգստի համար </span>




