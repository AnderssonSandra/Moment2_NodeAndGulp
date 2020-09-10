# Moment2_NodeAndGulp
School Project using Node and Gulp

## Vad är automatiserings-processens syfte?
Automatiseringsprocessens syfte är att underlätta för utvecklaren. Om man bygger stora projekt kan det vara smidigt att använda sig av automatisering av olika delar som exempelvis minimerar och konkatenerar filerna. Då kan utvecklaren arbeta i källkodsfilerna och sedan går de igenom olika tasks innan de läggs i resultatfilerna som används för publicering. Resultatfilerna blir därmed endast de du vill ha med och så kan du även göra filstorlekarna mindre eftersom du sammanslår filerna samt minifierar dom vilket innebär att de komprimeras och blir mindre. Utvecklaren kan istället strukturera upp projektet i olika filer för att underlätta under utvecklingens gång men det är endast de minifierade och sammansatta filerna som används live. Man kan använda automatisering under utvecklingens gång så att tasks körs när man sparat en fil och så körs det även när man kör gulp.  

## Följande paket har jag använt:
* **gulp:** används för att automatisera processen med att ta källkodsfilerna genom olika tasks och därefter skicka filerna till en mapp som används för publicering. 
* **gulp-clean-css:** Jag använde denna för att komprimera CSS filerna. Den var uppdaterad för 6 månader sedan vilket jag tyckre var bra sen hade den över 180 000 nedladdningar i veckan. Den verkar vara bra för sitt syfte att komprimera CSS filerna. 
* **gulp-concat:** gulp concat har används för att sammanslå de olika css filerna till en fil i publiceringskatalogen samt de olika JavaSctipt filerna till en fil i publuceringskatalogen. Syftet med att använda denna är att göra filerna mindre och därmed snabbare. Jag valde den eftersom den verkar vanlig då den har över 400 000 nedladdningar i veckan. Den utför även de uppgifter den ska göra väl.
* **gulp-imagemin:** paketet används för att komprimera PNG, JPG, GIF och SVG filer. Jag använde den eftersom jag ville att bilderna som ska användas i publicering ska komprimeras automatiskt. Det verkade vara ett bra verktyg för det. Det verkar också vara ett vanligt verktyg som laddas ner över 120 000 gånger i veckan och det uppdaterades relativt nyligen, för 8 månader sedan. 
* **gulp-uglify-es:** används för att minifiera js filerna. Syftet med att använda denna är att göra filerna så små som möjligt. 

## Beskriv systemet du skapat, hur man startar upp det och de tasks som ingår.

Jag har skapat ett system för att automatisera vissa processer som används för att föra över filer från min källkod till min katalog jag använder för publicering. 

### För att testa mitt system måste du göra följande: 
1. Se till att du har node.js och npm installerat på din dator.
2. Klona mitt projekt med följande kommando: git clone https://github.com/AnderssonSandra/Moment2_NodeAndGulp.git
3. Installera node och de paket som används: använd kommandot npm install när du står i rotkatalogen. Då installeras node och alla paket som behövs för köra systemet 
4. Kör kommandot gulp när du står i rotkatalogen.  
5. Då ska katalogen "pub" skapats som innehåller de filer som ska användas för publicering. 

### Mina tasks
**Funktion för HTML filer**
Används för att kopiera över alla HTML filer till katalogen "pub". 

**Funktion CSS filer**
Används för att hämta alla CSS filer i källkoden och sammansätta samt minifiera dom innan de skickas till underkatalogen "css" i publiceringskatalogen "pub".

**Funktion för JavaScript filer**
Används för att hämta alla JavsSctipt filer i källkoden och sammansätta samt minifiera dom innan de skickas till underkatalogen "js" i publiceringskatalogen "pub".

**Funktion för bilder**
Används för att komprimera bilder i formaten GIF, JPG, SVG samt PNG innan de skickas till underkatalogen "images" i publiceringskataliogen "pub". 

**Funktionen watcher**
Den används för att lyssna på om det läggs till eller sker förändringar i någon av HTML, CSS, js filerna och då uppdatera filerna i publiceringskatalogen. Den gör densamma för bilder. 

**Standard funktionen**
Används för att skicka över de filer som redan finns när gulp startas, sedan används en "watcher" för att uppdatera och lägga till filer när systemet körs. 
