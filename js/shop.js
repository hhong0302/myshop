(function()
{
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementById('cart');
    const close = document.getElementById('close');

        listAll.addEventListener('click',changeNav);
        cart.addEventListener('click',cartBoxView);
        close.addEventListener('click',cartBoxView);
        
        

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

    //슬라이드 쇼

    let slideIndex = 0;
    showSlides();

    function showSlides()
    {
        let i ;
        const slides = document.getElementsByClassName('img-slide');
        const dot = document.getElementsByClassName('dot');
        
        for (i = 0 ; i < slides.length ; i++)
        {
            slides[i].style.display = 'none';
            dot[i].classList.remove('active');
        }

        slideIndex++;

        if(slideIndex > slides.length)
        {
            slideIndex = 1;
        }
        
        slides[slideIndex - 1].style.display = 'block';
        dot[slideIndex -1].classList.add('active');

        setTimeout(showSlides, 5000);
    }

    
    
}());


function viewQuick()
    {
        document.getElementsByClassName('quick')[0].classList.toggle('action');
    }


//bestlink

document.getElementsByClassName('tablinks')[0].click();

function openBest(e , bid)
{
    const tabcontent = document.getElementsByClassName('best-tabcontent');
    for(let i = 0 ; i < tabcontent.length ; i++)
    {
        tabcontent[i].style.display = 'none';
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for(let i = 0 ; i < tablinks.length ; i++)
    {
        tablinks[i].classList.remove('active');
    }

    document.getElementById(bid).style.display = "block";
    e.currentTarget.classList.add('active');

}


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


/* function product(num,col)
{
    const colAr = ['col-lg-12','col-lg-4' , 'col-lg-3'];
    const products = document.getElementsByClassName('product-images');
    const libox = document.getElementsByClassName('libox');

    for(let i = 0 ; i<products.length ; i++)
    {
        products[i].classList.remove(colAr[0],colAr[1],colAr[2]);
    }

    for(let i = 0 ; i<libox.length ; i++)
    {
        libox[i].classList.remove('active');
    }

    for(let i = 0 ; i<products.length ; i++)
    {
        products[i].classList.add(col);
    }

    libox[num].classList.add('active');
} */

/* 
function vlist(e,n){
    const libox = document.getElementsByClassName('libox');
    for(let i = 0 ; i<libox.length ; i++)
    {
        libox[i].classList.remove('active');
    }
    libox[e].classList.add('active');
    
    const el = document.querySelectorAll(".product-images");
    el.forEach((items)=>{
       items.classList.remove('col-lg-3', 'col-lg-4', 'col-lg-12');
       items.classList.add(n);     
    });
 } */

