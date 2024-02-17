# MagicTables

This is a small library that converts markdown tables into their HTML table counterparts.

## Why do you need this library?

Many extended libraries for Markdown processing do not include features for formatting tables directly. Additionally, some libraries only format tables if they are written in specific formats with embedded variables, which may limit their usefulness in more general use cases.

With Markdown Table Transformer, you can easily transform tables in the traditional Markdown format into HTML tables. This fills a common need for those working with Markdown and needing a quick and easy way to convert tables for use in web pages or HTML documents.


## Installation
To use this library, simply include the tableTransformer.js file in your project.


<script src="tableTransformer.js"></script>
## Usage

´´´javascript
const response = "Your response with markdown table";
const htmlTable = TableTransformer.transformTable(response);
console.log(htmlTable);
´´´

## Contribution
Contributions are welcome! If you find any bugs or have suggestions to improve this library, feel free to open an issue or submit a pull request. or with a coffe..
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/borjaoteroferreira)

### Code & License
This code is released under the MIT License

