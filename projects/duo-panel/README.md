# SplitPanel

## Painel Duplo, com Split na Horizontal e Vertical

- Framework: Angular v8.2.14
- Languague: TypeScript
- Style Library: Flexbox + CSS vanilla

---

> Como usar?

- Instale o componente no seu projeto: ``npm i @viceri/duo-panel``

- Importe o modulo ``DuoPanelModule`` no modulo onde deseja utilizar o componente;
  - ``import { DuoPanelModule } from '@viceri/duo-panel';``

  ```typescript
    import { AppComponent } from './app.component';
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { DuoPanelModule } from '@viceri/duo-panel';

    @NgModule({
      declarations: [ AppComponent ],
      imports: [
        BrowserModule,
        DuoPanelModule
      ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule { }
  ```

- No componente onde desejar utilizar o painel, declare a custom tag
  - ``<duo-panel></duo-panel>``

  ```typescript
    import { Component } from '@angular/core';
    @Component({
      selector: 'app-root',
      template: `
        <duo-panel></duo-panel>
      `,
      styles: ``
    })
    export class AppComponent {
    }
  ```

---

> Inputs de Dados do Componente:

- ``withoutTitle: boolean = false;`` - ``true`` esconde os titulos e ``false`` (propriedade default) mostra os títulos;
- ``withShadow: boolean = false;`` - ``true`` adiciona a sombra ``false`` (propriedade default) remove a sombra;
- ``withHover: boolean = false`` - habilita a sombra ao passar o mouse por cima (hover) do painel, ``false`` por padrão
- ``title = { left: string, right: string }`` - objeto com duas propriedades, serve para configurar o título de cada painel;
- ``rightPanelColor: string`` - aceita um valor (string) em Hexadecimal (ex: ``#ffffff``) para configurar a cor do painel do lado direito;
- ``leftPanelColor: string`` - aceita um valor (string) em Hexadecimal (ex: ``#ffff00``) para configurar a cor do painel do lado esquerdo;

  ```typescript
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-root',
      template: `
        <duo-panel
          rightPanelColor="#515151"
          leftPanelColor="#099987"
          [title]="titles"
          [withoutTitle]="true"
          [withShadow]="true"
          [withHover]="true"
        >
        </duo-panel>
      `,
      styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
      titles = {
        left: 'TypeScript',
        right: 'JavaScript'
      };
    }
  ```

- Utilizando os seletores ``left`` e ``right`` você consegue indicar onde cada conteúdo vai ser alocado:

  ```html
    <duo-panel
      rightPanelColor="#515151"
      leftPanelColor="#099987"
      [title]="titles"
      [withShadow]="true"
      [withoutTitle]="true"
      [withHover]="true"
    >
      <div left>
        <!-- conteúdo da esquerda aqui -->
      </div>
      <!-- -->
      <div right>
        <!-- conteúdo da direita aqui -->
      </div>
    </duo-panel>
  ```

---

> Preview

- O componente em telas grandes funciona com split horizontal e em telas menores na vertical:

  ![split horizontal](https://github.com/Viceri/split-panel/blob/master/projects/split-panel/print-horizontal.png)
  ![split vertical](https://github.com/Viceri/split-panel/blob/master/projects/split-panel/print-vertical.png)
