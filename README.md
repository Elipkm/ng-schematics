# ng-schematics
A basic example to test the functionality of Angular Schematics by building a reusable ui component template.

## Setup
 - npm install -g @angular-devkit/schematics-cli
 - schematics
 - schematics blank my-angular-schematics
 - cd my-angular-schematics
 - schematics blank --name=mytemplate
 - schematics my-angular-schematics:mytemplate --name=test
	
mytemplate2: new input flag for conditional UI
- if in template-files (dirty generated)

mytemplate3: improved
- manipulation by condition in index.ts and not in template
