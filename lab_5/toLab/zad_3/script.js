const eval = (op, x, y) => {
    switch (op) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
    }
    throw new TypeError(`Invalid argument!`);
}

const getHtmlResponse = (json) => {
    let responseHtml = '<table>';
    responseHtml = responseHtml.concat(`
  <tr>
    <th>x</th>
    <th>Eq</th>
    <th>y</th>
    <th>Result</th>
  <tr>
  `);

    for (const dict of json) {
        const { x, y, operation } = dict;
        const result = eval(operation, x, y);
        responseHtml = responseHtml.concat(`
    <tr>
      <td>${x}</td>
      <td>${operation}</td>
      <td>${y}</td>
      <td>${result}</td>
    </tr>
    `);
    }

    responseHtml = responseHtml.concat('</table>');

    return responseHtml;
}

const calculated = (json) => {
    for (const dict of json) {
        const {x, y, operation} = dict;
        dict.result = eval(operation, x, y);
    }
    return json;
}

module.exports = {getHtmlResponse, calculated, eval};