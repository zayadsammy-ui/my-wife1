function surprise(){
    for(let i=0;i<100;i++){
        let h=document.createElement("div");
        h.className="heart";
        h.innerHTML="💖";
        h.style.left=Math.random()*100+"%";
        h.style.fontSize=(Math.random()*25+10)+"px";
        document.body.appendChild(h);

        setTimeout(()=>h.remove(),4000);
    }

    alert("بحبك يا سميه ❤️");
}