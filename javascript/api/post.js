function fazerPost(url,body){
    var resq = new XMLHttpRequest();
    resq.open('POST',url,true);
    resq.send(body);
}
