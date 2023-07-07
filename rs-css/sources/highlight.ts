// Code source: npm highlight-syntax, https://github.com/ajnauleau/highlight-syntax

class Highlight {
  highlightHtml(string: string): string {
    string = string.replace(/</g, "&lt;");
    string = string.replace(/>/g, "&gt;");
    string = string.replace(
      /=(["|'](.*?)["|'])/g,
      '=<span class="string">$1</span>'
    );
    string = string.replace(/(\s.*)(?==<)/g, ' <span class="global">$1</span>');
    string = string.replace(
      /(?!<span\sclass=".*">.*<\/span>)(&lt;[^\s&;]+)/g,
      '<span class="method">$1</span>'
    );
    string = string.replace(
      /(?!<span\sclass=".*">.*<\/span>)(\/?&gt;)/g,
      '<span class="method">$1</span>'
    );

    return string;
  }
}
export default Highlight;
