## Informacje

To repozytorium zawiera kod źródłowy strony internetowej o tematycę zarządzania użytkownikami i grupami w systemach Unix. Treśc strony zapisana jest w pliku `assets/md/script.md` w formacie [Markdown](http://pl.wikipedia.org/wiki/Markdown), natomiast sama strona w formacie html został umieszczona w folderze `dist`.

Stronę można zobaczyć [tutaj](http://mckomo.github.io/Unix-user-and-group-management-tutorial/).

## Jak dodać własny wkład

Przede wszystkim musisz mieć zainstlowany [node.js](http://nodejs.org/) oraz niezbędne biblioteki `node.js`: 

* [grunt-cli](https://github.com/gruntjs/grunt-cli)
* [less](http://www.lesscss.org/)

Jeżeli twoje środowisko jest już przygotowane, zainstaluj zależności projektu:

```
npm install # komenda zainstaluje wszystkie niezbędne biblioteki
```

Możesz już edytować plik `assets/md/script.md`, który zawiera treść strony. Po zakończonej edycji wykonaj komendę `grunt` (javascriptowy odpowiednik make).

```
$ grunt
Running "less:application" (less) task
File dist/css/script.min.css created.

Running "markdown:all" (markdown) task
File "dist/index.html" created.

Done, without errors.
```

Polecenie `grunt` przekompiluje plik `assets/md/script.md` do formatu html i umieści go w folderze `dist`. Możesz otworzyć teraz plik `dist/index.html` w przeglądarce i zobaczyć efekty swojej pracy.

## Kontrybutorzy

* [mckomo](https://github.com/mckomo)
* [wiped1](https://github.com/wiped1)