


function loadCow(){
             
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
      
    if(cheese.MilkTypeEn=='Cow'){
      return `
      
      <div class="cheese">
      <h4>${cheese.MilkTypeEn}/${cheese.MilkTypeFr}</h4>
     <p> Cheese ID : ${cheese.CheeseId} </br></p>
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

 function loadGoat(){
             
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
    
  if(cheese.MilkTypeEn=='Goat'){
    return `
    
    <div class="cheese">
    <h4>${cheese.MilkTypeEn}/${cheese.MilkTypeFr}</h4>
    Cheese ID : ${cheese.CheeseId} </br>
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

function loadEwe(){
             
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
    
  if(cheese.MilkTypeEn=='Ewe'){
    return `
    
    <div class="cheese">
    <h4>${cheese.MilkTypeEn}/${cheese.MilkTypeFr}</h4>
    Cheese ID : ${cheese.CheeseId} </br>
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

function loadBuffalo(){
             
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

if(cheese.MilkTypeEn=='Buffalo Cow'){
    return `
    
    <div class="cheese">
    <h4>${cheese.MilkTypeEn}/${cheese.MilkTypeFr}</h4>
    Cheese ID : ${cheese.CheeseId} </br>
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


    