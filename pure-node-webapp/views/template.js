/**
 *   COMMON TEMPLATE MODULE TO BE REFFERED TO RENDER CONTENT BUILT IN REPECTIVE ROUTE CONTROLLER
 */

exports.build = function(title, content){
    return [
        '<!doctype html>',
        '<html lang="en">',
            '<head>',
                '<meta charset="utf-8" />',
                '<title>{title}</title>',
                '<link rel="stylesheet" href="/assets/normalize.css" />',
                '<link rel="stylesheet" href="/assets/style.css" />',
            '</head>',
            '<body>',
                '<div id="content">{content}</div>',
            '</body>',
        '</html>',
    ]
    .join('')
    .replace(/{title}/g, title)
    .replace(/{content}/g, content);
}