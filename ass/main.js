var hinh=[
    'banner.jpg',
    'banner1.jpg',
    'banner2.webp',
];
var index =0;
function prev(){
    index--;
    if(index<0) index=hinh.length-1;
    document.getElementById('banner').src=hinh[index];
    document.getElementById('0').style.color='white';
    document.getElementById('1').style.color='white';
    document.getElementById('2').style.color='white';
    document.getElementById(index).style.color='#1589d4';
}
function next(){
    index++;
    if(index==hinh.length) index=0;
    document.getElementById('banner').src=hinh[index];
    document.getElementById('0').style.color='white';
    document.getElementById('1').style.color='white';
    document.getElementById('2').style.color='white';
    document.getElementById(index).style.color='#1589d4';
}
setInterval('next()',2000)

        var c1=document.getElementById('c1');
        var c2=document.getElementById('c2');
        const root=document.querySelector(':root');

        c1.addEventListener('click',function(){
        root.style.setProperty('--color2', '#204F4E');
        localStorage.setItem('pickColor', '#204F4E');
        })
        c2.addEventListener('click',function(){
        root.style.setProperty('--color2', 'black');
        localStorage.setItem('pickColor', 'black');
        })
        function loadTheme(){
            if(localStorage.getItem('pickColor') !='') {
                root.style.setProperty('--color2',localStorage.getItem('pickColor') );
            }
        }