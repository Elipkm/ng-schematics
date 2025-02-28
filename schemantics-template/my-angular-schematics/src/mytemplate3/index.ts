import { Rule, Tree, SchematicContext, apply, url, template, move, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import * as fs from 'fs';
import * as path from 'path';

export function mytemplate3(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    
    let name = options.name;
    let preference = options.preference;
    const defaultPreference = 'ul';
    if(!preference) {
      // set a default value
      preference = defaultPreference;
    }
    let preferenceFile = undefined
    if(preference === 'ol' || preference === 'ordered'){
      preferenceFile = 'ordered-list.component.html';
    }
    if(preference === 'ul' || preference === 'unordered') {
      preferenceFile = 'unordered-list.component.html';
    }

    // read the content of the selected preference file
    let preferenceHtml = '--- no preference selected ---';
    if(preferenceFile){
      try {
        const filePath = path.join(__dirname, 'preference', preferenceFile);
        const data = fs.readFileSync(filePath);
        preferenceHtml = data.toString();
      } catch (err) {
          console.error('Error reading file:', err);
      }
  
    }

    const templateSource = apply(url('./files'), [
      template({
        ...options,
        ...strings,
        preference: preference,
        myHtml: preferenceHtml
      }),
      move(`src/app/${strings.dasherize(name)}`)
    ]);

    return mergeWith(templateSource)(tree, _context);
  };
}
