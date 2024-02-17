/**@Author: Borja Otero Ferreira */

const MarkdownTableConverter = {
    /**
     * Converts markdown tables to HTML tables.
     * @param {string} markdown - The markdown containing tables.
     * @returns {string} - HTML tables.
     */
    convertMarkdownToHTMLTables: function(markdown) {
        const tableRegex = /(?:\|.*(?:\|).*)+\|/gs;
        const htmlResponse = markdown.replace(tableRegex, (table) => {
            const rows = table.trim().split('\n').map(row => row.trim().split('|').filter(cell => cell.trim() !== ''));
            let htmlTable = '<table>';
            for (let i = 0; i < rows.length; i++) {
                htmlTable += '<tr>';
                for (let j = 0; j < rows[i].length; j++) {
                    if (i === 0) {
                        htmlTable += `<th>${rows[i][j]}</th>`;
                    } else {
                        htmlTable += `<td>${rows[i][j]}</td>`;
                    }
                }
                htmlTable += '</tr>';
            }
            htmlTable += '</table>';
            return htmlTable;
        });
        return htmlResponse;
    }
};

/** Example usage:
const markdown = "Your markdown text with tables";
const htmlTables = MarkdownTableConverter.convertMarkdownToHTMLTables(markdown);
console.log(htmlTables); 
*/
