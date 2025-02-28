import { Rule, Tree, SchematicContext, apply, url, template, move, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


// THIS name is the name of factory
export function mytemplate2(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    
    let name = options.name;
    let preference = options.preference;
    if(!preference) {
      preference = 'ul';
    }
    const templateSource = apply(url('./files'), [
      template({
        ...options,
        ...strings,
        preference: preference
      }),
      move(`src/app/${strings.dasherize(name)}`)
    ]);


    return mergeWith(templateSource)(tree, _context);
   
  };
}
