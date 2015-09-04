
"use static";

/*
 * Fuchs:    AA, Aa, aa        bb
 * Brauner: AA, Aa            BB, Bb
 * Rappe:    aa                BB, Bb
 *
 */


function Color(gen1, gen2){
    this.agouti = gen1;
    this.black = gen2;
}

function Gene(allel1, allel2) {
    this.allel1 = allel1;
    this.allel2 = allel2;
    this.sum = allel1.sum + allel2.sum;
}

function Allel(code){
    this.code = code;
    if (code == code.toUpperCase()) {
        this.sum = 1;
    }else{
        this.sum = 0;
    }
}


function getColor(color) {
   
    if(color.black.sum == 0){
        return "Fuchs";
    }else{
        if(color.agouti.sum == 0){
            return "Rappe";
        }else {
            return "Brauner";
        }
    }
}



function init(){
   
    var allelAgoutia = new Allel("a");
    var allelAgoutiA = new Allel("A");
    var allelBlackB = new Allel("B");
    var allelBlackb = new Allel("b");
   
    var geneTestagouti = new Gene(allelAgoutia, allelAgoutiA);
    var geneTestblack = new Gene(allelBlackB, allelBlackb);
   
    var colorTest = new Color(geneTestagouti, geneTestblack);
    var color = getColor(colorTest);
    console.log(color);
   
   
}

init();

