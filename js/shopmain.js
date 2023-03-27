(function()
{
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementById('cart');
    const close = document.getElementById('close');
    const simg = document.getElementsByClassName('simg');

        listAll.addEventListener('click',changeNav);
        cart.addEventListener('click',cartBoxView);
        close.addEventListener('click',cartBoxView);
    

        //이미지에 마우스 갖다대면 바뀌는 그거
        for(let i = 0 ; i<simg.length ; i++)
        {
            simg[i].addEventListener('mouseenter',function()
            {
                document.getElementById('bimg').setAttribute("src" , "images/09"+i+".jpg");
            });
        }
       
        

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

    function cartBoxView()
    {
        document.getElementsByClassName('cart-view')[0].classList.toggle('none');
    }


    const btnRight = document.getElementById('btn-right');
    const btnLeft = document.getElementById('btn-left');

    const ptIn = document.getElementById('ptIn');

    let ps = 0;

    btnRight.onclick = function()
    {
        ps = ptIn.offsetLeft;
        if(ps < 0)
        {
            ps += 50;
        ptIn.style.left = ps + 'px';
        }
    }

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


function viewQuick()
    {
        document.getElementsByClassName('quick')[0].classList.toggle('action');
    }


//bestlink


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

