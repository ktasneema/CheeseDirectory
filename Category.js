function loadSemi_softcheese(){
             
    fetch("https://od-do.agr.gc.ca/canadianCheeseDirectory.json ")
   .then(response =>{
     if(!response.ok){
       throw Error("ERROR")
     }
     return response.json();
    } )
     .then (data => {
    console.log(data.CheeseDirectory);
    const searchBar = document.getElementById('searchBar');

    searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    
    const filteredCharacters =data.CheeseDirectory.filter(cheese => {
        return (
          cheese.CheeseId.toLowerCase().includes(searchString)|| 
          cheese.CheeseNameEn.toLowerCase().includes(searchString) ||
          cheese.CheeseNameFr.toLowerCase().includes(searchString) ||
          cheese.MilkTypeEn.toLowerCase().includes(searchString) ||
          cheese.MilkTypeFr.toLowerCase().includes(searchString) ||
          cheese.CategoryTypeEn.toLowerCase().includes(searchString) || 
          cheese.CategoryTypeFr.toLowerCase().includes(searchString) || 
          cheese.ManufacturingTypeFr.toLowerCase().includes(searchString) ||
          cheese.ManufacturingTypeEn.toLowerCase().includes(searchString) ||
          cheese.CharacteristicsEn.toLowerCase().includes(searchString) ||
          cheese.CharacteristicsFr.toLowerCase().includes(searchString) ||
          cheese.MilkTreatmentTypeEn.toLowerCase().includes(searchString) ||
          cheese.MilkTreatmentTypeFr.toLowerCase().includes(searchString) ||
          cheese.FlavourEn.toLowerCase().includes(searchString) ||
          cheese.FlavourFr.toLowerCase().includes(searchString)

        );
    });
    displayFiltereddata(filteredCharacters);
    

    });


    
    const html=data.CheeseDirectory.map(cheese =>{
    
      

      
    if(cheese.CategoryTypeEn=='Semi-soft Cheese'){
     
      return `
      
    <div class="cheese" >
     <h2>${cheese.CategoryTypeEn}/${cheese.CategoryTypeFr}</h2>
     <h3> <p>Cheese Name En/ Cheese Name Fr:${cheese.CheeseNameFr}/${cheese.CheeseNameEn}</br></p></h3>
    
     <ul>
     <li> Cheese ID : ${cheese.CheeseId} </li>
     <li> Cheese Flavour En/ Cheese Flavour Fr : ${cheese.FlavourEn}/${cheese.FlavourFr} </li>
     <li> ManufacturingTypeEn/ ManufacturingTypeFr : ${cheese.ManufacturingTypeEn}/${cheese.ManufacturingTypeFr}</li>
    <li>  ManufacturerNameEn/ ManufacturerNameFr : ${cheese.ManufacturerNameEn}/${cheese.ManufacturerNameFr}</li>
    <li> CharacteristicsEn/ CharacteristicsFr: ${cheese.CharacteristicsFr}/${cheese.CharacteristicsEn}</li>
    <li> WebSiteEn /WebSiteFr: ${cheese.WebSiteEn}/${cheese.WebSiteFr}</li>
    <li> MilkTypeEn / MilkTypeFr : ${cheese.MilkTypeEn}/${cheese.MilkTypeFr}</li>
    <li> MilkTreatmentTypeEn / MilkTreatmentTypeFr : ${cheese.MilkTreatmentTypeEn}/${cheese.MilkTreatmentTypeFr}</li>
          
    <li>FatContentPercent: ${cheese.FatContentPercent}</li>
    <li>MoisturePercent: ${cheese.MoisturePercent} </li>
    </ul>
      </div>
      
      `} ;
       
    }).join('');



    
    document
    .querySelector('#result')
    .insertAdjacentHTML("afterbegin",html);


    

     }).catch(error => {
       console.log(error);
     });
 } 

    function loadHardCheese(){
     
    fetch("https://od-do.agr.gc.ca/canadianCheeseDirectory.json ")
   .then(response =>{
     if(!response.ok){
       throw Error("ERROR")
     }
     return response.json();
    } )
     .then (data => {
    console.log(data.CheeseDirectory)
    const html=data.CheeseDirectory.map(cheese =>{
      
    if(cheese.CategoryTypeEn=='Hard Cheese'){
      return `
      
      <div class="cheese">
      <h4>${cheese.CategoryTypeEn}/${cheese.CategoryTypeFr}</h4>
      cheese ID : ${cheese.CheeseId} </br>
      Cheese Name En/ Cheese Name Fr:${cheese.CheeseNameFr}/${cheese.CheeseNameEn}</br>
      Cheese Flavour En/ Cheese Flavour Fr : ${cheese.FlavourEn}/${cheese.FlavourFr}
    
      </div>
      
      `} ;
       
    }).join('');
    
    document
    .querySelector('#result')
    .insertAdjacentHTML("afterbegin",html);

     }).catch(error => {
       console.log(error);
     });
 } 

 function loadSoftCheese(){
     
     fetch("https://od-do.agr.gc.ca/canadianCheeseDirectory.json ")
    .then(response =>{
      if(!response.ok){
        throw Error("ERROR")
      }
      return response.json();
     } )
      .then (data => {
     console.log(data.CheeseDirectory)
     const html=data.CheeseDirectory.map(cheese =>{
       
     if(cheese.CategoryTypeEn=='Soft Cheese'){
       return `
       
       <div class="cheese">
       <h4>${cheese.CategoryTypeEn}/${cheese.CategoryTypeFr}</h4>
       cheese ID : ${cheese.CheeseId} </br>
       Cheese Name En/ Cheese Name Fr:${cheese.CheeseNameFr}/${cheese.CheeseNameEn}</br>
       Cheese Flavour En/ Cheese Flavour Fr : ${cheese.FlavourEn}/${cheese.FlavourFr}
     
       </div>
       
       `} ;
        
     }).join('');
     
     document
     .querySelector('#result')
     .insertAdjacentHTML("afterbegin",html);

      }).catch(error => {
        console.log(error);
      });
  } 

  function loadFirmCheese(){
     
     fetch("https://od-do.agr.gc.ca/canadianCheeseDirectory.json ")
    .then(response =>{
      if(!response.ok){
        throw Error("ERROR")
      }
      return response.json();
     } )
      .then (data => {
     console.log(data.CheeseDirectory)
     const html=data.CheeseDirectory.map(cheese =>{
       
     if(cheese.CategoryTypeEn=='Firm Cheese'){
       return `
       
       <div class="cheese">
       <h4>${cheese.CategoryTypeEn}/${cheese.CategoryTypeFr}</h4>
       cheese ID : ${cheese.CheeseId} </br>
       Cheese Name En/ Cheese Name Fr:${cheese.CheeseNameFr}/${cheese.CheeseNameEn}</br>
       Cheese Flavour En/ Cheese Flavour Fr : ${cheese.FlavourEn}/${cheese.FlavourFr}
     
       </div>
       
       `} ;
        
     }).join('');
     
     document
     .querySelector('#result')
     .insertAdjacentHTML("afterbegin",html);

      }).catch(error => {
        console.log(error);
      });
  } 
  const displayFiltereddata = (data) => {
    const htmlString = data
        .map((cheese) => {
          if(cheese.CategoryTypeEn=='Semi-soft Cheese'){

            return `
            <div class="cheese" >
            <h2><i>${cheese.CategoryTypeEn}/${cheese.CategoryTypeFr}<i></h2>
            <h3> <p>Cheese Name En/ Cheese Name Fr:${cheese.CheeseNameFr}/${cheese.CheeseNameEn}</br></p></h3>
           
            <ul>
            <li> Cheese ID : ${cheese.CheeseId} </li>
            <li> Cheese Flavour En/ Cheese Flavour Fr : ${cheese.FlavourEn}/${cheese.FlavourFr} </li>
            <li> ManufacturingTypeEn/ ManufacturingTypeFr : ${cheese.ManufacturingTypeEn}/${cheese.ManufacturingTypeFr}</li>
           <li>  ManufacturerNameEn/ ManufacturerNameFr : ${cheese.ManufacturerNameEn}/${cheese.ManufacturerNameFr}</li>
           <li> CharacteristicsEn/ CharacteristicsFr: ${cheese.CharacteristicsFr}/${cheese.CharacteristicsEn}</li>
           <li> WebSiteEn /WebSiteFr: ${cheese.WebSiteEn}/${cheese.WebSiteFr}</li>
           <li> MilkTypeEn / MilkTypeFr : ${cheese.MilkTypeEn}/${cheese.MilkTypeFr}</li>
           <li> MilkTreatmentTypeEn / MilkTreatmentTypeFr : ${cheese.MilkTreatmentTypeEn}/${cheese.MilkTreatmentTypeFr}</li>
           <li>FatContentPercent: ${cheese.FatContentPercent}</li>
           <li>MoisturePercent: ${cheese.MoisturePercent} </li>
           </ul></i>
             </div>
             
        `}
        
        
        ;

        }).join('');
        document
        .querySelector('#result')
        .insertAdjacentHTML("afterbegin",htmlString);
};

