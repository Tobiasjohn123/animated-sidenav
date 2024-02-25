 const open = document.querySelector('.open-nav')
 const container = document.querySelector('.container')
 const closebtn = document.querySelector('.close-btn')
 
 open.addEventListener("click", function(){
    // container.style.width = '300px'
    if(container.style.height = '0')
    {
        container.style.height = '50vh' 
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

        open.classList.add('remove')
 
    }
 })

 closebtn.addEventListener('click', function(){
    container.style.height = '0' 
    document.body.style.backgroundColor = "transparent";

    open.classList.remove('remove')
 })