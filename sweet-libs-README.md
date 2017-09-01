# Documentation

## General

**Why did you choose this subject?**

I chose it because Vue is marketable as a skill. I would also like to learn Django, and I have seen some interesting projects that use Django and Vue together.

  - **How were you first made aware of it?**

  While looking up trending web frameworks on google.

**What problem does it solve?**

A progressive framework for building user interfaces.

  - **How does it solve the problem (conceptually)?**
  Vue is loosely based on the MVVM design pattern. It has a _reactivity system_ which contains all of the properties of the data object of a Vue instance. The view _reacts_ to these properties every time they change. Vue also has the capability of create components which allow developers to create small, reusable, and self-contained HTML elements.

**Why does one use it?**

Getting started with Vue.js is easy. It has a simple API, thus has a small learning curve. It also performs fast and scales well.

  - **What are the alternatives?**

  Alternatives include frameworks like Mithril, Polymer, Angular and React

  - **What is it similar to, if anything?**

    Vue combines the best of Angular's two way binding technique, and React's Virtual DOM in order to create a lightweight, easy to use library.

**What is the history of this technology?**
  - **Who built it and why?**

  Vue was created by Evan You, originally a developer of AngularJS. His goal after leaving the project was to create a better, more lightweight framework with all the best parts of AngularJS

  - **Who is maintaining it?**
  Vue is an open-source project and is maintained on its [github repo](https://github.com/vuejs/vue)

**What is your opinion on the technology after having built something with it?**

I think it's easy to understand and I would like to continue to use it.

**What are the biggest conceptual hurdles (if any) you encountered when researching this?**

The biggest hurdle I had was wrapping my head around the the instance lifecycle.

**What resources do you recommend for interested students?**

I recommend starting with [Vue's official guide](https://vuejs.org/v2/guide), and Do NOT
use Vue's cli to scaffold a project. Also, download Vue's [dev tools](https://github.com/vuejs/vue-devtools#vue-devtools) for your browser.

To get started with your own Vue project see the instructions at the end of this document.

  - **What article or forum was most helpful to you in learning this?**

  [Vue's official guide](https://vuejs.org/v2/guide).

**What are 3 interview questions one might be asked about this technology?**

1. What is Vue.js?

Vue.js is a JS library that helps you build web applications using the the MVVM architectural pattern.

2. How a view-model works in Vue.js?

Add an id to the parent html element. Now you can interpolate your data object properties using
mustaches {{ }}. Like so:

```
<div id="app">
  {{ name }} is {{ age }} years old.
div>
```

In your scripts, create a Vue instance. Assign the id of your html element to the el property, and your needed properties to the data object inside the instance. Like so:

```
var vm = new Vue({
  el: '#app',
  data: {
    name: 'a name here',
    age: 10
  }
});
```
3. How to create Two-Way Bindings in Vue.js?

Attach the directive `v-model="variable"` to the html element

## installation

### instructions for this project:

HTTP: `git clone https://github.com/jessamarie/chatty.git`
OR
SSH: `git clone git@github.com:jessamarie/chatty.git`

```
git checkout vuejs-version
npm install
npm start

```

### instructions for a new project

`cd` to the directory you want to create your project. Now:

```
mkdir MyVueProject
cd MyVueProject
touch index.html script.js
npm install vue lite-server
```
[About lite-server](https://github.com/johnpapa/lite-server)

In package.json, add the script:

`"dev": "lite-server"`

Add some basic html to the index html file, your script.js file, and bootstrap your project with Vue:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title>My Vue App</title>
  </head>
  <body>
    <script src="node_modules/vue/dist/vue.js"></script>
    <script src="app.js" charset="utf-8"></script>
  </body>
</html>
```

now in the terminal run:

 `npm run dev`

You are now ready to get started on a Vue project! Refer to [Vue's official guide](https://vuejs.org/v2/guide) for help.
