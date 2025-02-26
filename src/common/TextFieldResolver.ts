import entityDocument from '../../km/entity/ATLMWPY.json';

export default function textFieldResolver(templateString: string): string {
  const fieldName = /\${([a-zA-Z]+\.?[a-zA-Z]+)}/.exec(templateString)[1];
  return templateString.replace(/\${([a-zA-Z]+\.?[a-zA-Z]+)}/, entityDocument.content[fieldName]);
}