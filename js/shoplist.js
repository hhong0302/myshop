fetch('data/shoplist.json')
.then((res)=> res.json())
.then((res)=>{
    let rs = res.shoplist;
   let li = '';
       for(let i = 0 ; i < rs.length ; i++)
       {
           li += `<div class="col-lg-3 my-5">
           <a href="main.html">
           <div class="card">
               <img src="${rs[i].img}" class="img-fluid" alt="033">
               <div class="card-body">
                   <ul class="pd-list">
                       <li>`;
                           for(let j = 0 ; j < rs[i].color.length ; j++)
                           {
                               li+=`<span class=${rs[i].color[j]}></span>`;
                           }
                       li+=`</li>
                       <li class="pd-title">
                           <h1>${rs[i].title}</h1>
                       </li>
                       <li>
                           <del>${rs[i].delprice}</del><br>
                           <strong>${rs[i].saleprice}</strong>
                       </li>
                       <li>
                           <p>${rs[i].content}</p>
                       </li>
                       <li class="last">
                           <span>${rs[i].news[0]}</span>
                           <span>${rs[i].news[1]}</span>
                       </li>
                   </ul>
               </div>
            </div>
            </a>
       </div>`;
       }
       document.getElementById('row').innerHTML = li;
   })
   .catch((err)=>console.log(error));

   /* fetch('./data/shoplist.json')
.then((res)=>res.json())
.then((res)=> {
    const rs = res.shoplist; 
    let div = "";

    for(let i = 0; i < rs.length; i++){
      div += `<div class="col-lg-3 my-5">
        <div class="card">
            <a href="#">
              <img src="${rs[i].img}" class="img-fluid" alt="${rs[i].img}" />
            </a>
            <div class="card-body">
               <ul class="pd-list">
                  <li>`;

      var color = '';   
      for(let c=0; c < rs[i].color.length; c++){
        color +=  `<span class="${rs[i].color[c]}"></span>`;
      }             
      div += color;            
      div += `</li>
                  <li class="pd-title">
                      <h1>${rs[i].title}</h1>
                  </li>
                  <li>
                      <del>${rs[i].delprice}</del>
                      <br>
                      <strong>${rs[i].saleprice}</strong>
                  </li>
                  <li>
                      <p>${rs[i].content}</p>
                  </li>
                  <li class="last">
                     <span>베스트셀러</span>
                     <span>핫딜할인5%</span>
                  </li>
               </ul> 
            </div>
        </div>
     </div>`;
    }

    document.getElementById("row").innerHTML = div;

})
.catch((err)=> console.log(err)); */