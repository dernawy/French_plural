function verf(){

            // R = Régles!
            var ter1 = "ail";
            var ter2 = "ou";
            var ter3 = "al";
            var ter4 = "au";
            var ter5 = "eau";
            var ter6 = "eu";
            var ter7 = "s";
            var ter8 = "x";
            var ter9 = "z";


            // COMP = Complement Normale!
            var comp = "s";
            
            //IRG = Iréguliere! / _ail, _ou, _al, _ou = R(s)!
            var irg1 = "ux";
            var irg2 = "aux";
            var irg3 = "x";
            var irg4 = "eaux";
            
            //MOTS = mots
            var mots_r1 = ["bail","corail","soupirail","travail","vantail","vitrail"];
            var mots_r2 = ["bijou","caillou","chou","genou","hibou","joujou","pou"];
            var mots_r3 = ["aval","bal","cal","carnaval","cérémonial","chacal","choral","festival","régal","récital"];
            var mots_r4	= ["landau","sarrau","bleu","pneu","lieu"];
            var mois_jours = ["samedi","dimanche","lundi","mardi","mercredi","jeudi","vandredi","janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
            
            
            //NUMBS = Numbers
            var numbs_resu = document.getElementById('numbers').value;
            var mots_resu = document.getElementById('mots').value;

            var last1 = mots_resu.substr(mots_resu.length - 1);
            var last2 = mots_resu.substr(mots_resu.length - 2);
            var last3 = mots_resu.substr(mots_resu.length - 3);

            var cut1 = mots_resu.substring(0, mots_resu.length-1);
            var cut2 = mots_resu.substring(0, mots_resu.length-2);
            var cut3 = mots_resu.substring(0, mots_resu.length-3);

            var text1 = " <span class='span-black'> " + "La forme" + "</span> ";
            var text2 = " <span class='span-red'>" + "PLURIEL" + "</span> ";
            var text3 = " <span class='span-black'>" + "du nom que vous avez fourni est: " + "</span> ";
            var text4 = " <span class='span-black'>" + "Nous omettons les" + "</span> ";
            var text5 = " <span class='span-red'>" + "(li)" + "</span> ";
            var text6 = " <span class='span-black'>" + "et nous les remplaçons par" + "</span> ";
            var text7 = " <span class='span-red'>" + "(ux)" + "</span> ";
            var text8 = " <span class='span-black'>" + "Nous ajoutons le caractère" + "</span> ";
            var text9 = " <span class='span-red'>" + "(x)" + "</span> ";
            var text10 = " <span class='span-red'>" + "(l)" + "</span> ";
            var text11 = " <span class='span-red'>" + "(s)" + "</span> ";
            var text12 = " <span class='span-black'>" + "Les" + "</span> ";
            var text13 = " <span class='span-red'>" + "NOMS" + "</span> ";
            var text14 = " <span class='span-black'>" + "qui se terminent par ";
            var text15 = " <span class='span-red'>" + "(S)" + "</span> ";
            var text16 = " <span class='span-red'>" + "(X)" + "</span> ";
            var text17 = " <span class='span-red'>" + "(Z)" + "</span> ";
            var text18 = " <span class='span-black'>" + "ou" + "</span> ";
            var text19 = " <span class='span-black'>" + "n'a pas subi aucune modifications" + "</span> ";
            var text20 = " <span class='span-black'>" + "Les noms de " + "</span> ";
            var text21 = " <span class='span-red'>" + "JOURS" + "</span> ";
            var text22 = " <span class='span-black'>" + "et de " + "</span> ";
            var text23 = " <span class='span-red'>" + "MOIS" + "</span> " + "<br>";
            var text24 = " <span class='span-black'>" + " sont des noms communs. Ils s'écrivent donc sans majuscule et prennent la marque du pluriel. Par ajouter " + "</span> ";

            var texttotal = text12 + text13 + text14 + text15 + " " + text18 + " " + text16 + " " + text18 + " " + text17 + " " + text19;
            var texttotal0 = text20 + text21 + " " + text22 + text23 + text24 + text15;

            var capital = mots_resu.charAt(0).toUpperCase() + mots_resu.slice(1);


            var motresu1 = "<span class='span-mots-red'>" + capital.substring(0, mots_resu.length-2) + "</span>";
            var motresu2 = "<span class='span-mots-red'>" + capital.substring(0, mots_resu.length-1) + "</span>";
            var motresu10 = "<span class='span-mots-red'>" + capital.substring(0, mots_resu.length-1) + "</span>";

            var motresu6 = "<span class='span-mots-red'>" + capital + "</span>";

            var motresu3 = "<span class='span-mots-green'>" + irg1 + "</span>";
            var motresu4 = "<span class='span-mots-green'>" + irg3 + "</span>";
            var motresu5 = "<span class='span-mots-green'>" + comp + "</span>";
            
            var motresu7 = "<span class='span-mots-green'>" + last1 + "</span>";
            
             
            var capital0 = "<span class='span-mots-red'>" + mots_resu + "</span>" + "<span class='span-mots-green'>" + motresu5 + "</span>";

            

    	if (numbs_resu <= 1) {

        	document.getElementById('results').innerHTML = "Vous avez1" + " " + numbs_resu + " " + mots_resu;

   		}
   		
   		else{

            if (mots_resu==0){
               alert("Please Fill All Required Field");
               return false;
            }

            if (mois_jours.indexOf(document.getElementById('mots').value) > -1) {
                        document.getElementById('results').innerHTML = text1 + text2  + text3 + capital0;
                           document.getElementById('res-exp').innerHTML = texttotal0;
         }
            else{

   			   if (last3 == ter1) {
                	if (mots_r1.indexOf(document.getElementById('mots').value) > -1) {
                    		document.getElementById('results').innerHTML = text1 + text2  + text3 + motresu1 + motresu3;
                        document.getElementById('res-exp').innerHTML = text4 + " " + text5 + " " + text6 + " " + text7;
            		}

            		else{
            			document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu5;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text11;
            		}
   			   }

   				else if (last2 == ter2){
   					if (mots_r2.indexOf(document.getElementById('mots').value) > -1){
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu4;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text9;
   					}

   					else{
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu5;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text11;
   					}
   				}

   				else if (last2 == ter3){
   					if(mots_r3.indexOf(document.getElementById('mots').value) > -1){
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu5;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text11;

   					}

   					else{
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + motresu2 + motresu3;
                     document.getElementById('res-exp').innerHTML = text4 + " " + text10 + " " + text6 + " " + text7;
   					}
   				}

   				else if (last2 == ter4){
   					if(mots_r4.indexOf(document.getElementById('mots').value) > -1){
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu5;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text11;
   					}

   					else{
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu4;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text9;
   					}
   				}

   				else if (last3 == ter5){
   					if(mots_r4.indexOf(document.getElementById('mots').value) > -1){
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu5;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text11;
   					}

   					else{
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " +  motresu6 + motresu4;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text9;
   					}
   				}

   				else if (last2 == ter6){
   					if(mots_r4.indexOf(document.getElementById('mots').value) > -1){
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu5;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text11;
   					}

   					else{
   						document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu4;
   						document.getElementById('res-exp').innerHTML = text8 + " " + text9;
   					}
   				}	

               else if (last1 == ter7 || last1  == ter8 || last1 == ter9){
                     document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu10 + motresu7;
                     document.getElementById('res-exp').innerHTML = texttotal
               }
				      else{
                     document.getElementById('results').innerHTML = text1 + " " + text2 + " " + text3 + " " + motresu6 + motresu5;
                     document.getElementById('res-exp').innerHTML = text8 + " " + text11;
                  }
            }      		
    	}
}

