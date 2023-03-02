# monorepo-test

### This sets up some yarn workspaces to test a vite/storybook docs app importing a react component library.
 
`amazing-component-library` - this just exports a basic react component.

`vite-storybook-test` - this was set up with `create vite` and then configured to use a library. 

### To run

`yarn workspace vite-storybook-test storybook`

### Issues

* Interface export isn't working 100%, so prop documentation is not showing up and I was too tired to troubleshoot it
