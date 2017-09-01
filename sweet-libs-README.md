Documentation
============

General
--------

**Why did you choose this subject?**

I chose Vue because it is easy to get started with and a popular framework. I have also seen Vue used with Django and am interested in using them together.

  - **How were you first made aware of it?**

  I like to keep up to date with trending technologies and read about it in a search result on Google.

**What problem does it solve?**

Vue is a progressive framework for building user interfaces.

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
  Vue is an open-source project and is maintained on its [repository][2]

**What is your opinion on the technology after having built something with it?**

I think it's easy to understand and I would like to continue to use it.

**What are the biggest conceptual hurdles (if any) you encountered when researching this?**

The biggest hurdle I had was wrapping my head around the the instance lifecycle.

**What resources do you recommend for interested students?**

I recommend starting with [Vue's official guide][1]. Do NOT use Vue's cli at first to scaffold a project. Also, download Vue's helpful [dev-tools][3] for your browser.

To get started with your own Vue project see the [instructions below](#new-project).

  - **What article or forum was most helpful to you in learning this?**

  See [Vue's official guide][1].

**What are 3 interview questions one might be asked about this technology?**

1. What is Vue.js?

  Vue.js is a JS library that helps you build web applications using the the MVVM architectural pattern.

2. How a view-model works in Vue.js?

  Add an id to the parent html element. Now you can interpolate your data object properties using
mustaches {{ }}. Like so:

  ```html
  <div id="app">
    {{ name }} is {{ age }} years old.
  </div>
  ```

  In your scripts, create a Vue instance. Assign the id of your html element to the el property, and your needed properties to the data object inside the instance. Like so:

  ```javascript
  var vm = new Vue({
    el: '#app',
    data: {
      name: 'john smith',
      age: 10
    }
  })
  ```

3. How to create Two-Way Bindings in Vue.js?

  Attach the directive `v-model="variable"` to an html input element


## installation

### Instructions for this project:

`cd` to the directory you want to download this project. Now open up a terminal and run:

For HTTP:

`git clone https://github.com/jessamarie/chatty.git`

OR for SSH

`git clone git@github.com:jessamarie/chatty.git`

Then,

```bash
git checkout vuejs-version
npm install
npm start
```

Navigate to http://localhost:3000/

### Instructions to create a new project  <a id="new-project"></a>

`cd` to the directory you want to create your project. Now:

```bash
mkdir MyVueProject
cd MyVueProject
touch index.html script.js
npm install vue lite-server
```

In package.json, add the script:

`"dev": "lite-server"`

Add some basic html to the index html file, your script.js file, and bootstrap your project with Vue:

```html
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

You are now ready to get started on a Vue project! Refer to [Vue's official guide][1] for help.

References
-----------
[Vue's Official Guide][1]

[Vue.js Github Repository][2]

[Vue's Dev-tools][3]

[lite-server by John Papa][4]


[1]: https://vuejs.org/v2/guide
[2]: https://github.com/vuejs/vue
[3]: https://github.com/vuejs/vue-devtools#vue-devtools
[4]: https://github.com/johnpapa/lite-server
