import { Rule, Tree, SchematicContext, apply, url, template, move, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export function mytemplate(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    
    let name = options.name;

    const templateSource = apply(url('./files'), [
      template({
        ...options,
        ...strings,
      }),
      move(`src/app/${strings.dasherize(name)}`)
    ]);

    return mergeWith(templateSource)(tree, _context);   
  };
}
