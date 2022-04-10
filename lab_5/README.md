# Kaskadowe arkusze stylów

Wykonaj [czynności wstępne](https://www.icsr.agh.edu.pl/~polak/jezyki/js/#tematyka) dla edytora Visual Studio Code

## Sekcja zadań na zajęcia

#### Zad 1. Język CSS

1. Skopiuj poniższą zawartość do osobnego pliku (HTML)

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet"
          href="sheet.css"
          media="screen"
          type="text/css">
    <title>
      Tytuł strony
    </title>
  </head>
  <body>
    <header>
      <!-- Page title -->
      <!-- Background color: #EFF -->
      <!-- Border color: #A8A8A8 -->

      <h1>
        Tytuł strony
      </h1>
    </header>

    <nav>
      <!--Tutaj menu nawigacyjne / Here the navigation menu -->
      <!-- left & right margin: 25px -->

      <ul>
        <li>
          <a href="">Element 1</a>
        </li>

        <li>
          <a href="">Element 2</a>
        </li>
      </ul>
    </nav>
    <!-- Tutaj treść panelu bocznego / Here the content of the side panel-->

    <aside>
      <h1>
        Panel boczny
      </h1>

      <h2>
        Ciekawe odsyłacze
      </h2>

      <ul>
        <li>
          <a href="">Odsyłacz 1</a>
        </li>

        <li>
          <a href="">Odsyłacz 2</a>
        </li>

        <li>
          <a href="">Odsyłacz 3</a>
        </li>
      </ul>
    </aside>

    <main>
      <!--Tutaj treść strony / Here the content of the page -->

      <h1>
        Treść strony
      </h1>

      <blockquote>
        Natenczas Wojski chwycił na taśmie przypięty Swój róg bawoli, długi, cętkowany, kręty Jak wąż boa, oburącz do ust go przycisnął, Wzdął policzki jak banię, w oczach krwią zabłysnął, Zasunął wpół powieki, wciągnął w głąb pół brzucha I do płuc wysłał z niego cały zapas ducha, I zagrał: róg jak wicher, wirowatym dechem Niesie w puszczę muzykę i podwaja echem. Umilkli strzelcy, stali szczwacze zadziwieni Mocą, czystością, dziwną harmoniją pieni. Starzec cały kunszt, którym niegdyś w lasach słynął, Jeszcze raz przed uszami myśliwców rozwinął; Napełnił wnet, ożywił knieje i dąbrowy, Jakby psiarnię w nie wpuścił i rozpoczął łowy. Bo w graniu była łowów historyja krótka: Zrazu odzew dźwięczący, rześki: to pobudka; Potem jęki po jękach skomlą: to psów granie; A gdzieniegdzie ton twardszy jak grzmot: to strzelanie.
      </blockquote>
    </main>

    <footer>
      <!-- Tutaj treść stopki / Here the content of the footer -->
      <a href="mailto:your.email.address">Imię Nazwisko</a>
    </footer>
  </body>
</html>
```

2. Obejrzyj dokument w przeglądarce WWW

3. Utwórz plik 'sheet.css' o następującej zawartości

```css
aside  {
  /* Specyfikacja wyglądu */
}
footer {
  /* Specyfikacja wyglądu */
}      
header {
  /* Specyfikacja wyglądu */
}     
main { 
  /* Specyfikacja wyglądu */
}
nav {
  /* Specyfikacja wyglądu */
}
nav ul {
  /* Specyfikacja wyglądu */
}
nav li {
  /* Specyfikacja wyglądu */
}

```

4. (1 pkt) Zmodyfikuj zawartość pliku 'sheet.css' (tutoriale: [1](http://www.kurshtml.edu.pl/css/), [2](https://www.w3schools.com/css/)) tak, aby otrzymać stronę WWW o wyglądzie takim jak pokazano poniżej
   - Jak można zauważyć, część z [selektorów](http://webkod.pl/kurs-css/lekcje/dzial-1/idea-stylow-css) zawiera własność o takiej samej nazwie i wartości, np. własność ustalająca kolor tła na błękitny

   - Utwórz, w pliku .css, definicję klasy azure, a następnie umieść w niej definicję błękitnego tła, tj. własność z poprzedniego punktu

   - Usuń ze wszystkich selektorów ww. własność — definicja błękitnego tła ma występować, tylko i wyłącznie, w obrębie klasy azure

   - W dokumencie HTML, przypisz wszystkim elementom, które mają mieć błękitne tło, atrybut class w następującej postaci: class='azure'

   - Przyglądnij się zawartości pliku .css i spróbuj samodzielnie wyodrębnić inne, wspólne własności — zidentyfikuj inne, przydatne klasy, a następnie użyj tych klas w dokumencie HTML

<img width="100%" alt="img_1" src="assets/lab_1_1.png"/>

5. Korzystając z własności CSS3 [animation](http://webmaster.helion.pl/index.php/css3-animacje) spowoduj, aby kolor napisu "Panel boczny" ulegał płynnej zmianie: od czerwonego do niebieskiego i vice versa

#### 2. Responsywna strona WWW

1. Przeczytaj artykuły:
   1. [Responsive web design](https://pl.wikipedia.org/wiki/Responsive_web_design) 
   2. [Zapytania mediów](http://www.kurshtml.edu.pl/css/zapytania_mediow,media.html)
   3. [Responsywny Web Design](https://damianchodorek.com/responsywny-web-design/)
2. Zmodyfikuj stronę WWW utworzoną w ramach zadania 1.4 tak, aby była responsywna:
   - W przypadku komputerów lub tabletów układ ma być taki jak na powyższym rysunku
   - W przypadku telefonów wszystkie elementy (header, nav, aside, main oraz footer) mają być w układzie jednokolumnowym, a ich szerokość ma być równa szerokości okna przeglądarki WWW — jednakowa szerokość elementów w kolumnie 
   - Rozmiar czcionek — proporcjonalnie do wielkości okna — należy używać elastycznych jednostek

## Sekcja zadań podczas zajęć

#### 1. Frameworki dla stron responsywnych

1. Skopiuj zawartość każdego z poniższych szablonów do osobnego pliku (HTML) - 

**Szablon "W3.CSS"**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1">
    <link rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>
      Tytuł strony / Page Title
    </title>
  </head>
  <body>
    <!-- Umieść tutaj stałą treść tekstu - patrz zadanie 1 -->
    <!-- Put here the fixed text content - see task 1 -->
  </body>
</html>
```

**Szablon "Foundation"**
```html
<!DOCTYPE html>
<html class="no-js"
      lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport"
         content="width=device-width, initial-scale=1.0">
   <meta http-equiv="x-ua-compatible"
         content="ie=edge">
   <link rel="stylesheet"
         href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css">
   <link rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
   <title>
      Tytuł strony / Page title
   </title>
</head>
<body>
<!-- Umieść tutaj stałą treść tekstu - patrz zadanie 1 -->
<!-- Put here the fixed text content - see task 1 -->
<!--
<script src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
-->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js"></script>
<script>
   $(document).foundation();
</script>
</body>
</html>
```

2. Obejrzyj każdy z dokumentów w przeglądarce WWW
3. Zmodyfikuj parametry oraz zawartość szablonu W3.CSS ([dokumentacja](https://www.w3schools.com/w3css/)) lub Foundation ([dokumentacja](https://foundation.zurb.com/sites/docs/kitchen-sink.html)) tak, aby otrzymać responsywną stronę WWW — kolorystyka i wygląd zostaną zaprezentowane na początku ćwiczeń. Elementy składowe to:
   - Pasek nawigacyjny 
   - Obszar treści zawierający kontener, a w nim kilka spośród wymienionych, w kolejnym punkcie, elementów 
   - Animacja stworzona w oparciu o własność 'animation'
4. Włącz widok trybu responsywnego (Ctrl+Shift+M — Firefox, Ctrl+Shift+I,Ctrl+Shift+M — Google Chrome) i przetestuj czy Twoja strona zachowuje się w sposób responsywny

## Sekcja zadań dla Geeków

#### 1. Frameworki dla stron responsywnych

1. Przeczytaj [artykuł](http://web-ext.u-aizu.ac.jp/labs/is-se/conference_proceedings/icait-16/icait-16-paper-54.pdf), w którym porównano frameworki Bootstrap oraz W3.CSS
2. Przeczytaj [artykuł](https://blog.templatetoaster.com/bootstrap-vs-foundation/), w którym porównano frameworki Bootstrap oraz Foundation
3. Korzystając z frameworka Bootstrap (dokumentacja: 1, 2, 3) lub [Bulma](https://bulma.io/), stwórz responsywną stronę WWW (treść tekstowa) składającą się ze strony głównej oraz kilku podstron, poświęconą wybranemu zagadnieniu podanemu po zakończeniu ćwiczeń (strona odnośnie dowolnie wybranego jezyjka programowania). Strona powinna zawierać, co najmniej, następujące elementy:
   - Siatka, której układ, w zależności od rozdzielczości ekranu, ulega zmianie 
   - Pasek nawigacyjny 
   - Obrazki 
   - Karty 
   - Tabele 
   - [Ikony Glyphicons](https://fontawesome.com/icons?m=free) 
   - Stopkę

**Szablon "Bootstrap"**
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <!-- Required meta tags -->
   <meta charset="utf-8">
   <meta name="viewport"
         content="width=device-width, initial-scale=1"><!-- Bootstrap CSS -->
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
         rel="stylesheet"
         integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
         crossorigin="anonymous">
   <link rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"><!-- Page title -->

   <title>
      Tytuł strony / Page tile
   </title>
</head>
<body>
<!-- Umieść tutaj stałą treść tekstu - patrz zadanie 1 -->
<!-- Put here the fixed text content - see task 1 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>
</html>
```

**Szablon "Bulma"**
```html
<!DOCTYPE html>
<html lang="pl">
<head>
   <meta charset="UTF-8">
   <meta name="viewport"
         content="width=device-width, initial-scale=1.0">
   <meta http-equiv="x-ua-compatible"
         content="ie=edge">
   <link rel="stylesheet"
         href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
   <link rel="stylesheet"
         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
   <title>
      Tytuł strony / Page title
   </title>
</head>
<body>
<!-- Umieść tutaj stałą treść tekstu - patrz zadanie 1 -->
<!-- Put here the fixed text content - see task 1 -->
</body>
</html>
```