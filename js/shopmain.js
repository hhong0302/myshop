(function()
{
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementById('cart');
    const close = document.getElementById('close');
    const simg = document.getElementsByClassName('simg');
    const size = document.shopform.size;
    const rootColor = document.getElementsByClassName('color');

        listAll.addEventListener('click',changeNav);
        cart.addEventListener('click',cartBoxView);
        close.addEventListener('click',cartBoxView);

        //컬러 선택하면 size 바뀌는 그거
        for(let i=0;i<rootColor.length;i++)
        {
            rootColor[i].addEventListener('change',function()
            {
                document.querySelectorAll('.size').forEach((v)=>{
                    v.checked = false;
                });
            });
        }

        //이미지에 마우스 갖다대면 바뀌는 그거
        for(let i = 0 ; i<simg.length ; i++)
        {
            simg[i].addEventListener('mouseenter',function()
            {
                document.getElementById('bimg').setAttribute("src" , "images/09"+i+".jpg");
            });
        }

        //사이즈 누르면 나오는 리스트 주르륵
        size.forEach(e => {
            e.addEventListener('change',function(e)
            {
                const selectTitle = document.getElementById('title').value;
                const selectPrice = document.getElementById('price').value;
                const selectColor = document.querySelector('.color:checked').value;
                const selectsize = document.querySelector('.size:checked').value;

                const addproduct = document.getElementById('addProduct');
                let isAddProduct = document.getElementsByClassName('addProduct');
                const colors = document.getElementsByClassName('color');
                const sizes = document.getElementsByClassName('size');
                let colorsIndex;
                let sizesIndex;
                let addlist = true;

                //컬러 인덱스값 받기
                for(i=0;i<colors.length;i++)
                {
                    if(colors[i].checked) colorsIndex=i;
                }

                //사이즈 인덱스값 받기
                for(let i=0;i<sizes.length;i++)
                {
                    if(sizes[i].checked) sizesIndex =i;
                }
                
                //리스트 길이
                let count=0;
                if(isAddProduct.length>0)
                {
                    count = isAddProduct.length;
                }

                //같은 주문 방지
                document.querySelectorAll('.addProduct').forEach((v=>
                    {
                        if('addProduct'+colorsIndex+sizesIndex==v.id)
                        {
                            alert('같은 주문이 있습니다.');
                            addlist=false;
                        }
                    }));

                //리스트 내용
                let list = `<ul class="addProduct" id="addProduct${colorsIndex}${sizesIndex}">
                    <li class="title">
                        <p>${selectTitle}</p>
                        <p class="option">${selectColor},${selectsize}</p>
                    </li>
                    <li id="add">
                    <div class="addbox">
                        <span class="ctv" id="ctv${colorsIndex}${sizesIndex}">1</span>
                        <div class="pmbox">
                            <div class="up" onclick="updown('${colorsIndex}${sizesIndex}',1)"><i class="fa-solid fa-angle-up"></i></div>
                            <div class="down" onclick="updown('${colorsIndex}${sizesIndex}',-1)"><i class="fa-solid fa-angle-down"></i></div>
                        </div>
                    </div>
                    <span class="listclose" onclick="closelist('${colorsIndex}','${sizesIndex}')"><i class="fa-solid fa-xmark"></i></span>
                    <input type="hidden" name="ct[]" class="ct" id="ct${colorsIndex}${sizesIndex}" value="1">
                    <input type="hidden" name="money[]" id="money${colorsIndex}${sizesIndex}" value="${selectPrice}">
                    <input type="hidden" name="summoney[]" id="summoney${colorsIndex}${sizesIndex}" value="${selectPrice}">
                    </li>
                    <li class="totalP" id="totalIP${colorsIndex}${sizesIndex}">
                        ${numComma(selectPrice)}원
                    </li>
                </ul>`;
                
                //넣기
                const opt = addproduct.innerHTML;
                if(addlist)
                {
                    addproduct.innerHTML = opt + list;
                }

            });
        });

    
        
    //뭔지 까먹음
    function changeNav()
    {
        const nav = document.getElementsByTagName('nav')[0].offsetTop + 52;
        const sitemap = document.getElementById('sitemap')
        listAll.classList.toggle('close');
        listAll.classList.toggle('newlist');
        sitemap.classList.toggle('vmode');
        if(listAll.className == 'list-all close')
        {
            sitemap.style.top = nav+ 'px';
            sitemap.style.display='block';
        }
        else
        {
            sitemap.style.display='none';
        }
    }

    //까먹음2
    function cartBoxView()
    {
        document.getElementsByClassName('cart-view')[0].classList.toggle('none');
    }

    const btnRight = document.getElementById('btn-right');
    const btnLeft = document.getElementById('btn-left');
    const ptIn = document.getElementById('ptIn');
    let ps = 0;

    //큰 사진 아래 오른쪽 버튼
    btnRight.onclick = function()
    {
        ps = ptIn.offsetLeft;
        if(ps < 0)
        {
            ps += 50;
        ptIn.style.left = ps + 'px';
        }
    }

    //큰 사진 아래 왼쪽 버튼
    btnLeft.onclick = function()
    {
        ps = ptIn.offsetLeft;
        if(ps>-200)
        {
            ps -= 50;
            ptIn.style.left = ps + 'px';
        }
    }
    
}());

//뭔지 까먹음3
function viewQuick()
    {
        document.getElementsByClassName('quick')[0].classList.toggle('action');
    }


//bestlink ->?

//뭔지 까먹음4
function view(e)
{
    const tabcontent = document.getElementsByClassName('tabcontent');
    const tabs = document.getElementsByClassName('tab')[0];

    // const li = document.getElementsByClassName('tabli');

    for(let i = 0 ; i<tabcontent.length ; i ++)
    {
        tabcontent[i].classList.remove('active');
        tabs.children[i].classList.remove('active');

        // li[i].classList.remove('active');
    }

    tabcontent[e].classList.add('active');
    tabs.children[e].classList.add('active');

    // li[e].classList.add('active');
}

// K-현금 단위
const numComma = (value) => {
    value = value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return value;
  }
 

//리스트 닫기 버튼
function closelist(n,m)
{
    document.getElementById('addProduct'+n+m).remove();
}

//개수 조절 버튼
function updown(i,n)
{
    var ct =parseInt(document.getElementById('ct'+i).value);
    let money = parseInt(document.getElementById('money'+i).value);
    let summoney = 0;
    if(n>0)
    {
        if(ct<=11)
        {
            ct++;
        }
    }
    else
    {
        if(ct>1)
        {
            ct--;
        }
    }
    summoney = money*ct;
    document.getElementById('summoney'+i).value = money;
    document.getElementById('totalIP'+i).innerHTML = numComma(summoney)+"원";
    document.getElementById('ctv'+i).innerHTML=ct;
    document.getElementById('ct'+i).value=ct;
}