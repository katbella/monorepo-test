# monorepo-test

### This sets up some yarn workspaces to test a vite/storybook docs app importing a react component library.
 
`amazing-component-library` - this just exports a basic react component.

`vite-storybook-test` - this was set up with `create vite` and then configured to use a library. 

### To run

`yarn workspace vite-storybook-test storybook`

![image](https://user-images.githubusercontent.com/1796175/222370642-100f66e6-e38d-4eca-8057-522a4396d6c2.png)

### Issues

* Interface export isn't working 100%, so prop documentation is not showing up and I was too tired to troubleshoot it
