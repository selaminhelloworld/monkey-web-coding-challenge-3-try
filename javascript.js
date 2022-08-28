let img_var = Math.floor(Math.random() * 2);

if (img_var == 0) {
    document.getElementsByClassName("quote-container")[0].style.backgroundImage = "url('https://ychef.files.bbci.co.uk/1600x900/p03j3nzf.webp')";
} else if (img_var ==1) {
    document.getElementsByClassName("quote-container")[0].style.backgroundImage = "url('https://p4.wallpaperbetter.com/wallpaper/905/699/681/clint-eastwood-eli-wallach-western-sergio-leone-wallpaper-thumb.jpg')";
    document.querySelector("div.quote-container").innerHTML = '';
    document.querySelector("div.quote-container").style.height = "31.7vh";
    document.querySelector("div.quote-container").style.margin = "20px 255px";
} else {
    alert("some bug has occured")
}
