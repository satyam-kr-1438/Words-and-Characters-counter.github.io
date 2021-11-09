let textbox=document.getElementById("txtarea");
let inp1=document.getElementById("input1");
let inp2=document.getElementById("input2");

textbox.addEventListener("input",function()
{
    var text=this.value;
    let len=text.length;
    inp2.value=len;
    text= text.trim();                         
    let words=text.split(" ");                 

    let cleanlist=words.filter(function(element)
    {
            return (element !="");               
    });
    inp1.value=cleanlist.length;
});
