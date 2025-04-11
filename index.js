function myFunction() {
    document.body.classList.toggle("dark-mode");
    var top = document.getElementsByClassName("asdf")
    for (const list of top){
        list.classList.toggle("dark-mode");
    }

    var i = document.getElementsByClassName("aboutme")
    for (const element of i){
        element.classList.toggle("dark-mode-accent");
    }

    var j = document.getElementsByClassName("footer")
    for (const element of j){
        element.classList.toggle("dark-mode-footer");
    }

    var k = document.getElementsByClassName("asdfa")
    for (const l of k){
        console.log(l)
        l.classList.toggle("dark-mode-a");
    }

}

