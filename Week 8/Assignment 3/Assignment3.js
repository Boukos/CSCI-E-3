function traverse(el, str) {
    // Your code can go here - acting on the way down
    //   the tree towards the branches


    for (var i = 0; i < el.childNodes.length; i++) {
        traverse(el.childNodes[i], str);
    }
    // Or your code can go here - acting on the way back up
    //  the tree towards the root
    if (el.nodeValue = "text"){
        textList.push(el)
    }

}
var textList = [];
traverse(document.documentElement, 'text');
for (var i = 0; i < textList.length; i++){
    console.log(textList[i].parentNode);
}

