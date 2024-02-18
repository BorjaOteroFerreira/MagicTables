/**@Author: Borja Otero Ferreira */

const MagicTablesConverter = {
    /**
     * Converts markdown tables to HTML table.
     * @param {string} markdown - The markdown containing tables.
     * @returns {string} - HTML table.
     */
    convertMarkdownToHTMLTables: function(markdown) {
        const tableRegex = /(?:\|.*(?:\|).*)+\|/gs;
        let htmlResponse = this.markdown.replace(tableRegex, (table) => {
        const rows = table.trim().split('\n').map(row => row.trim().split('|').filter(cell => cell.trim() !== ''));
        const filteredRows = rows.filter(row => !row.some(cell => cell.includes('---')));
        let htmlTable = '<table>';
        for (let i = 0; i < filteredRows.length; i++) {
            htmlTable += '<tr>';
            for (let j = 0; j < filteredRows[i].length; j++) {
                if (i === 0) {
                    htmlTable += `<th>${filteredRows[i][j]}</th>`;
                } else {
                    htmlTable += `<td>${filteredRows[i][j]}</td>`;
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
const htmlTables = MagicTablesConverter.convertMarkdownToHTMLTables(markdown);
console.log(htmlTables); 
*/
