<p align='center'>
  <img src='https://user-images.githubusercontent.com/90315405/148767927-ba451926-78ae-4aab-8c41-d6515bcd3fd4.png' alt='REHAU - Dealer' width='300'/>
</p>

<p align='center'>
 <b>Rehau Selected PII</b>
</p>

<br>

<p align='center'>
   <a href="https://app.host01.selected2.dev.rehau-eae.org/">Live Dev</a>
</p>

<br>

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [yarn](https://yarnpkg.com/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 📑 [Layout system](./src/layouts)

- 🌍 [I18n ready](./locales)

-    <img src='https://iconape.com/wp-content/files/qa/371510/svg/371510.svg' alt='storybook' width='17'/>  [Design Systems Storybook](./.storybook)

- 🎨 [Scss](./src/assets/sass)

<br>

## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Install and Run the Project

### Install
```bash
git clone https://github.com/rehau-eae/dealer-app-frontend.git
cd dealer-app-frontend
yarn
```

### Run Development
Just run and visit http://localhost:3000

```bash
yarn dev
```

### Build Project for Production Deployment

To build the App, run

```bash
yarn
yarn build
```
and run for local testing

```bash
yarn serve
```


### Run Storybook
For run Storybook you need to open new terminal (Ctrl+Shift+5) and run

```bash
yarn storybook
```
and visit http://localhost:6006

## Use Design Systems

This project uses the `vega-design-system` design system [*Npm package*](https://www.npmjs.com/package/rehau-eae-vega-ds "*Npm package*"): 
The design system is implemented in **Vue 3** and the library is built using **rollup.js**.

More details about *vega-design-system*  can be found [here](https://github.com/rehau-eae/vega-design-system "here")

## List of Vue components and Style Design Systems

Chromatic allows you to see a list of all components ready to use. For detailed view you need to have access (ask @Slimpak or @rehau-eae)
<p align='left'>
  <img src='https://user-images.githubusercontent.com/90315405/148776821-2d4a319c-c65b-49ff-9720-8c1f747a13d7.png' alt='REHAU - Dealer' width='350'/>
</p>

[ Last version](https://61499377d42343003ab80a79-bzmojdyhoq.chromatic.com/ " Last version") `v0.1.1-5.beta.1`

## Use Vue components 

If you need to use a component that is in the design system.

For example, I need to use Tabs:

<p align='left'>
  <img src='https://user-images.githubusercontent.com/90315405/148777678-df644085-0b71-46f0-9b77-f0a0ce13827e.png' alt='REHAU - Dealer' width='350'/>
</p>
<br>

In your`.vue`file, you  need to add **ds-** to the name and the component will be added. `<ds-tabs />`

You can check the name by clicking on the *Docs -> Show code*

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)




