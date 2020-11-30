
var header=document.querySelectorAll("th");
for(var i=0;i<header.length;i++)
header[i].style.color='white'
function getcolor()
{
  var letters="0123456789ABCDEF";
  var color="#";
  for(var i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
  }
  return color;
}
function changecolor()
{
  colorinput=getcolor();
  for(var i=0;i<header.length;i++)
  header[i].style.backgroundColor=getcolor();
}
setInterval("changecolor()",500);

    var el1=document.getElementById("text");
    var el2=document.getElementById("total");
    var el3=document.getElementById("alph");
    var el4=document.getElementById("word");
    var el5=document.getElementById("symbol");
    var el6=document.getElementById("number");
    var al=0,n=0;
    function alph()
    {
        al=0;
        var s=`${String(el1.value)}`.toLowerCase();
        for(var i=0;i<s.length;i++)
        if(s[i]>="a"&&s[i]<="z")
        al++;
        el3.innerHTML=al;
    }

    function num()
    {
        n=0;
        var s=`${el1.value}`;
        for(var i=0;i<s.length;i++)
        if(!isNaN(s[i])&&s[i]!=" ")
            n++;
        el6.innerHTML=n;
    }
    function sym(){
        el5.innerHTML=`${el1.value.length}`-al-n;
    }
    function wrd(){
        var x=0;
        var s=`${el1.value}`;
        for(var i=0;i<s.length;i++)
        if(s[i]==" ")
            x++;
        el4.innerHTML=x;
    }
function qualichange(){
    el2.innerHTML=`${String(el1.value.length)}`;
    alph();
    num();
    sym();
    wrd();
    console.log()
    //`${el1.value}`;
}
