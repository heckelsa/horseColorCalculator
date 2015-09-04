"use static";

/*
  * BASECOLOR
  * Fuchs:    AA, Aa, aa        bb
  * Brauner:  AA, Aa            BB, Bb
  * Rappe:    aa                BB, Bb
  *
  * DILUTION
  * Cream:  CC, Cc, cc
  * Champagne: EE, Ee, ee
  * Sabino: SS, Ss, ss
  * Roan: RR, Rr, rr
  * Dun: DD, Dd, dd
  * Silver: ZZ, Zz, zz
  * Flaxen: FF, Ff, ff
  * Sooty: YY, Yy, yy
  * Rabicano: HH, Hh, hh
  * Gray: GG, Gg, gg
  * 
  * SONSTIGES
  * Braun/Agouti
  * Brauner Ee/EE Aa/AA
  * Schwarzbrauner/Seal Brown Ee/EE Ata/AtAt
  * Wildbrauner Ee/EE A+a/A+A+
  * 
  * http://keeplaughing.deviantart.com/art/HorseCoatColors-Expl-german-244773973
  *
  */

const SORREL = "Sorrel";
const CHESTNUT = "Chestnut";
const PALOMINO = "Palomino";
const CREMELLO = "Cremello";
const GOLD_CHAMPAGNE = "Gold Champagne";
const GOLD_CREAM_CHAMPAGNE = "Gold Cream Champagne";
const RED_ROAN = "Red Roan";
const RED_DUN = "Red Dun";
const DUNALINO = "Dunalino";

const BAY = "Bay";
const DARK_BAY = "Dark Bay";
const BUCKSKIN = "Buckskin";
const PERLINO = "Perlino";
const BAY_DUN = "Bay Dun";
const DUNSKIN = "Dunskin";
const DARK_BAY_DUN = "Dark Bay Dun";
const SILVER_DARK_BAY_DUN = "Silver Dark Bay Dun";
const SILVER_BAY_DUN = "Silver Bay Dun";
const AMBER_CHAMPAGNE = "Amber Champagne";
const AMBER_CREAM_CHAMPAGNE = "Amber Cream Champagne";

const BLACK = "Black";
const SMOCKY_BLACK = "Smocky Black";
const SMOCKY_CREAM = "Smocky Cream";
const BLUE_DUN = "Blue Dun";
const CLASSIC_CHAMPAGNE = "Classic Champagne";
const CLASSIC_CREAM_CHAMPAGNE = "Classic Cream Champagne";
const BLUE_ROAN = "Blue Roan";




var sorrel = "Sorrel";
var chestnut = "Chestnut";
var black = "Black";
var bay = "Bay";


function Color(gen1, gen2, gen3, gen4, gen5, gen6, gen7, gen8, gen9,
gen10, gen11, gen12){
     this.agouti = gen1;
     this.black = gen2;
     /*
      * Basecolor
      * 1 = Fuchs
      * 2 = Rappe
      * 3 = Brauner
      */
     if(this.black.sum == 0){
         if(this.agouti.sum == 2){
             // TODO: this should be chestnut later on
             this.baseColor = sorrel;
         }else{
             this.baseColor = sorrel;
         }
     }else{
         if(this.agouti.sum == 0){
             this.baseColor = black;
         }else {
             this.baseColor = bay;
         }
     }
     this.cream = gen3;
     this.champagne = gen4;
     this.roan = gen5;
     this.dun = gen6;
     this.silver = gen7;
     this.flaxen = gen8;
     this.sooty = gen9;
     this.rabicano = gen10;
     this.gray = gen11;
     this.sabino = gen12;
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

function getCreamDilution(color){
     if(color.cream.sum > 0){
         // Check Champagne
         if(color.champagne.sum > 0){
             if(color.baseColor == sorrel){
                 return "Gold Cream Champagne";
             }else if(color.baseColor == bay){
                 return "Amber Cream Champagne";
             }else{
                 return "Classic Cream Champagne";
             }
         // End Champagne
         //Basedilution
         }else if(color.cream.sum == 1){
             // Basecolors
             if(color.baseColor == sorrel){
                 return "Palomino";
             }else if(color.baseColor == bay){
                 return "Buckskin";
             }else{
                 return "Smocky Black";
             }
             // End Basecolors
         }else{
             if(color.baseColor == sorrel){
                 return "Cremello";
             }else if(color.baseColor == bay){
                 return "Perlino";
             }else{
                 return "Smocky Cream";
             }
         }
     }

     return "";
}

function getChampagneDilution(color){
     if(color.champagne.sum > 0){
         // Basecolors
         if(color.baseColor == sorrel){
             return "Gold Champagne";
         }else if(color.baseColor == bay){
             return "Amber Champagne";
         }else{
             return "Classic Champagne";
         }
     }

     return "";
}

function getRoanDilution(color){
     if(color.roan.sum == 1){
         if(color.baseColor == sorrel){
             return "Red Roan";
         }else if(color.baseColor == bay){
             return "Bay Roan";
         }else{
             return "Blue Roan";
         }
     }else if(color.roan.sum == 2){
         return "DEAD";
     }

     return "";
}

function getDunDilution(color){
     if(color.dun.sum > 0){
         if(color.baseColor == sorrel){
             return "Red Dun";
         }else if(color.baseColor == bay){
             return "Bay Dun";
         }else{
             return "Grullo";
         }
     }

     return "";
}

function getSilverDilution(color){
     if(color.silver.sum > 0){
         if(color.baseColor == sorrel){
             return "Silver Sorrel";
         }else if(color.baseColor == bay){
             return "Silver Bay";
         }else{
             return "Silver Black";
         }
     }

     return "";
}

function getSootyDilution(color){
     if(color.sooty.sum > 0){
         if(color.baseColor == sorrel){
             return "Chestnut";
         }else if(color.baseColor == bay){
             return "Dark Bay";
         }
     }

     return "";
}




function init(){

     var allelAgoutia = new Allel("a");
     var allelAgoutiA = new Allel("A");

     var allelBlackB = new Allel("B");
     var allelBlackb = new Allel("b");

     var allelCreamC = new Allel("C");
     var allelCreamc = new Allel("c");

     var allelChampagneE = new Allel("E");
     var allelChampagneE = new Allel("E");

     var allelSabinoS = new Allel("S");
     var allelSabinos = new Allel("s");

     var allelRoanR = new Allel("R");
     var allelRoanr = new Allel("r");

     var allelDund = new Allel("d");

     var allelSilverZ = new Allel("Z");

     var allelFlaxenF = new Allel("F");

     var allelSootyy = new Allel("y");

     var allelRabicanoh = new Allel("h");

     var allelGrayg = new Allel("g");


     var geneTestagouti = new Gene(allelAgoutia, allelAgoutiA);
     var geneTestblack = new Gene(allelBlackB, allelBlackb);
     var geneTestcream = new Gene(allelCreamC, allelCreamc);

     var geneTestChampagne = new Gene(allelChampagneE, allelChampagneE);
     var geneTestSabino = new Gene(allelSabinoS, allelSabinos);
     var geneTestRoan = new Gene(allelRoanR, allelRoanr);
     var geneTestDun = new Gene(allelDund, allelDund);
     var geneTestSilver = new Gene(allelSilverZ, allelSilverZ);
     var geneTestFlaxen = new Gene(allelFlaxenF, allelFlaxenF);
     var geneTestSooty = new Gene(allelSootyy, allelSootyy);
     var geneTestRabicano = new Gene(allelRabicanoh, allelRabicanoh);
     var geneTestGray = new Gene(allelGrayg, allelGrayg);

     var colorTest = new Color(geneTestagouti, geneTestblack,
								geneTestcream, geneTestChampagne, geneTestRoan, geneTestDun,
								geneTestSilver, geneTestFlaxen, geneTestSooty,
								geneTestRabicano, geneTestGray, geneTestSabino);

     var cream = getCreamDilution(colorTest);
     var champagne = getChampagneDilution(colorTest);
     var roan = getRoanDilution(colorTest);
     var dun = getDunDilution(colorTest);
     var silver = getSilverDilution(colorTest);
     var sooty = getSootyDilution(colorTest);

     console.log(colorTest.baseColor);
     console.log(cream);
     console.log(champagne);
     console.log(roan);
     console.log(dun);
     console.log(sooty);

}

init();
