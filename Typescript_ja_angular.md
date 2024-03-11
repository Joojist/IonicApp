### TypeScript

TypeScript on Microsofti välja töötatud tüübitud ülemhulk JavaScriptist, mis võimaldab arendajatel kirjutada selgemat ja turvalisemat koodi, lisades staatilise tüübikontrolli JavaScriptile. See pakub mitmeid eeliseid, sealhulgas:

1. **Tüübikontroll**: TypeScript võimaldab defineerida muutujate ja funktsioonide tüübid, tagades seeläbi koodi stabiilsuse ja vähendades vigu arendusetapis.

```typescript
// Tüüpidega muutujate deklareerimine
let message: string = "Tere, maailm!";
let count: number = 5;
let isLogged: boolean = true;

// Funktsiooni deklareerimine koos tüüpidega
function greet(name: string): string {
  return "Tere, " + name + "!";
}

// Funktsiooni kutsumine
let greeting: string = greet("John");
console.log(greeting); // väljund: Tere, John!
```

2. **Moodulite tugi**: TypeScript toetab mooduleid, mis lihtsustab koodi organiseerimist ja taaskasutamist.

```typescript
// Mooduli ekspordi
export function add(a: number, b: number): number {
  return a + b;
}

// Mooduli importimine ja kasutamine
import { add } from "./module";
let result: number = add(2, 3);
console.log(result); // väljund: 5
```

3. **Suurem tootlikkus**: Tüüpide abil saavad arendajad paremat autotäiendust ja dokumentatsiooni, mis parandab oluliselt arendusprotsessi kiirust ja kvaliteeti.

```typescript
// Liidesed (Interfaces) ja klassid (Classes) TypeScriptis
interface Person {
  name: string;
  age: number;
}

class Employee implements Person {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Tere, minu nimi on ${this.name} ja ma olen ${this.age} aastat vana.`);
  }
}

let emp: Person = new Employee("John", 30);
emp.greet(); // väljund: Tere, minu nimi on John ja ma olen 30 aastat vana.
```

4. **ECMAScripti järgimine**: TypeScript järgib ECMAScripti standardit, mis tagab ühilduvuse JavaScripti ökosüsteemiga.

```typescript
// Arrow funktsioonid (ECMAScript 6)
let add = (a: number, b: number): number => a + b;
console.log(add(2, 3)); // väljund: 5

// Teekide kasutamine (näiteks lodash)
import * as _ from "lodash";
let array: number[] = [1, 2, 3, 4, 5];
let sum: number = _.sum(array);
console.log(sum); // väljund: 15
```

### Angular

Angular on avatud lähtekoodiga veebirakenduste raamistik, mida kasutatakse dünaamiliste ühelehe rakenduste (SPA) loomiseks. See põhineb TypeScriptil ja pakub arendajatele palju funktsioone:

1. **Komponentpõhine arhitektuur**: Angulari rakendused koosnevad komponentidest, mis võimaldavad selget koodi struktuuri ja taaskasutamist.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-header", // Komponendi selektor, mida kasutatakse rakenduse HTML-templiitides
  templateUrl: "./header.component.html", // Komponendi HTML-templiit
  styleUrls: ["./header.component.css"], // Stiilifailid, mis kehtivad sellele komponendile
})
export class HeaderComponent {
  title: string = "Minu rakenduse päis"; // Komponendi omadus - päise pealkiri
}
```

2. **Andmemudel ja sidumine**: Angulari pakutav kahepoolne andmesidumine võimaldab automaatselt värskendada kasutajaliidest, kui

andmemudel muutub.

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-user", // Komponendi selektor
  templateUrl: "./user.component.html", // Komponendi HTML-templiit
  styleUrls: ["./user.component.css"], // Stiilifailid
})
export class UserComponent {
  name: string = "John Doe"; // Kasutaja nimi
  age: number = 30; // Kasutaja vanus
}
```

3. **Sündmuste süsteem**: Angularis on võimas sündmuste süsteem, mis võimaldab komponentidel suhelda omavahel ja kasutajaliidesega.

```typescript
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button", // Komponendi selektor
  templateUrl: "./button.component.html", // Komponendi HTML-templiit
  styleUrls: ["./button.component.css"], // Stiilifailid
})
export class ButtonComponent {
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>(); // Väljund, mille kaudu saadetakse sündmus

  onClick(): void {
    this.clicked.emit(); // Meetod, mis saadab väljundi kaudu sündmuse
  }
}
```

4. **Moodulipõhine arendus**: Angular kasutab mooduleid, mis aitavad rakendusi jagada eraldi ja moodustavad selge struktuuri.

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [
    // Deklareeritud komponendid ja muud Angulari moodulid
    AppComponent,
    HeaderComponent,
    UserComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule, // Moodulid, mida rakendus kasutab (nt BrowserModule, CommonModule jne)
  ],
  providers: [], // Teenused ja teegid, mida rakendus kasutab
  bootstrap: [AppComponent], // Rakenduse algkomponent
})
export class AppModule {} // Angulari rakenduse põhimoodul
```

Võrreldes teiste veebirakenduste raamistikega pakub Angular laia valikut sisseehitatud funktsioone, nagu näiteks jõuline ruuter, vormide haldamine ja HTTP-päringute tugi. Samuti on Angularil ulatuslik kogukond ja toetus, mis muudab selle atraktiivseks valikuks suurte ja keerukate rakenduste jaoks.

Kuigi TypeScript ja Angular on mõlemad suunatud veebirakenduste arendamisele, erinevad need oma lähenemisviisis ja funktsioonides. TypeScript pakub paremat tüübikontrolli ja stabiilsust, samas kui Angular pakub täisfunktsionaalset raamistikku, mis hõlmab kogu veebirakenduse arendamiseks vajalikke tööriistu ja komponente.
