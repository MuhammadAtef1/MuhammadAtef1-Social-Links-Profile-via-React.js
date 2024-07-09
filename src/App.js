// import logo from './logo.svg';
import Card from './component/Card';
import './App.css';
function App() {
  let data = {"src":"./avatar-jessica.jpeg" ,
              "name" : "Jessica Lampard" ,
              "address":"London, United Kingdom",
              "linksData" : {
                "link" : ["https://github.com/",
                          "https://www.frontendmentor.io/home",
                          "https://www.facebook.com/",
                          "https://twitter.com/home",
                          "https://codepen.io/pen/tour/welcome/start"
                ] ,
                "linkName" : ["GitHub",
                  "FrontEnd Mentor",
                  "Facebook",
                  "Twitter",
                  "CodePen"
                ]
              }
            } ;
  console.clear();
  return (
    <>
      <Card data = {data}/>
    </>
  );
}

export default App;
