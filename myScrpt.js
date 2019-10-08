// JavaScript source code
var arr = [["Human history becomes more and more a race between education and catastrophe.", "H. G. Wells"],
    ['We hang the petty thieves and appoint the great ones to public office.', 'Aesop'],
    ['Some painters transform the sun into a yellow spot, others transform a yellow spot into the sun.', 'Pablo Picasso'],
    ['Weakness is what brings ignorance, cheapness, racism, homophobia, desperation, cruelty, brutality, all these things that will keep a society chained to the ground, one foot nailed to the floor.', 'Henry Rollins'],
    ['You can control two things: your work ethic and your attitude about anything.', 'Ali Krieger']
];

 function dsign() {
    var idx = Math.floor(Math.random() * arr.length);
    $("#text").text(arr[idx][0]);
    $("#author").text(arr[idx][1]);
    var idxCss = Math.floor(Math.random() * clr.length);
    $("body").css("background-color", clr[idxCss]);
    $("#myQut").css("color", clr[idxCss]);
    $("#author").css("color", clr[idxCss]);
    $("#author").css("opacity", 0.5);
    $("#author").css("text-align", "right");
    $("button").css("background-color", clr[idxCss]);
    $("#tweet-quote").css("background-color", clr[idxCss]);
    
}
$(document).ready(function () {
    dsign();
})

var clr = ['darkcyan', 'saddlebrown', 'orange', 'lightcoral', 'rosybrown'];
$(document).ready(function () {
    $("#new-quote").click(function () {
        $("#quote-box").fadeOut();
        dsign();
        $("#quote-box").fadeIn();

    })
})
