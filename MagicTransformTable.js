        const tableRegex = /(?:\|.*(?:\|).*)+\|/gs;
        let htmlResponse = this.response.replace(tableRegex, (table) => {
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
