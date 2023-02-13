import Card from "./card";


 function  TopSection(){

    const lista=[1,2,3,4,5,6,7,8,9,10];

    var cards=lista.map((item,index)=>{
        return <Card  key={index} props={item}/>
    });
    return (
        <div>
           <div className="topTitle"> Find the best apps and software to grow your business </div>
          <section className="topApps"> 
              {cards}
        </section> 
        </div>
      
    );
}


export default TopSection;