export const PrismjsTheme = `
  /*
 * Based on Plugin: Syntax Highlighter CB
 * Plugin URI: http://wp.tutsplus.com/tutorials/plugins/adding-a-syntax-highlighter-shortcode-using-prism-js
 * Description: Highlight your code snippets with an easy to use shortcode based on Lea Verou's Prism.js.
 * Version: 1.0.0
 * Author: c.bavota
 * Author URI: http://bavotasan.comhttp://wp.tutsplus.com/tutorials/plugins/adding-a-syntax-highlighter-shortcode-using-prism-js/ */
/* http://cbavota.bitbucket.org/syntax-highlighter/  */

/* =====   =====  .css-9paetf pre */
code[class*="language-"],
pre[class*="language-"] {
	color: #fff !important;
	text-shadow: 0 1px 1px #000 !important;
	font-family: Menlo, Monaco, "Courier New", monospace !important;
  direction: ltr !important;
	text-align: left !important;
	word-spacing: normal !important;
	white-space: pre !important;
	word-wrap: normal !important;
	line-height: 1.4 !important;
	background: none !important;
	border: 0 !important;
	-moz-tab-size: 4 !important;
	-o-tab-size: 4 !important;
	tab-size: 4 !important;

	-webkit-hyphens: none !important;
	-moz-hyphens: none !important;
	-ms-hyphens: none !important;
	hyphens: none !important;
}

pre[class*="language-"] code {
	float: left !important;
	padding: 0 15px 0 0 !important;
}

pre[class*="language-"],
:not(pre) > code[class*="language-"] {
	background: #222 !important;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 15px !important;
	margin: 1em 0 !important;
	overflow: auto !important;
	-moz-border-radius: 8px !important;
	-webkit-border-radius: 8px !important;
	border-radius: 8px !important;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: 5px 10px !important;
	line-height: 1 !important;
	-moz-border-radius: 3px !important;
	-webkit-border-radius: 3px !important;
	border-radius: 3px !important;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #797979 !important;
}

.token.selector,
.token.operator,
.token.punctuation {
	color: #fff !important;
}

.token.namespace {
	opacity: .7 !important;
}

.token.tag,
.token.boolean {
	color: #ffd893 !important;
}

.token.atrule,
.token.attr-value,
.token.hex,
.token.string {
	color: #B0C975 !important;
}

.token.property,
.token.entity,
.token.url,
.token.attr-name,
.token.keyword {
	color: #c27628 !important;
}

.token.regex {
	color: #9B71C6 !important;
}

.token.entity {
	cursor: help !important;
}

.token.function,
.token.constant {
	color: #e5a638 !important;
}

.token.variable {
	color: #fdfba8 !important;
}

.token.number {
	color: #8799B0 !important;
}

.token.important,
.token.deliminator {
	color: #E45734 !important;
}

/* Line highlight plugin */
.line-highlight.line-highlight {
	background: rgba(255, 255, 255, .2) !important;
}

.line-highlight.line-highlight:before,
.line-highlight.line-highlight[data-end]:after {
	top: .3em !important;
	background-color: rgba(255, 255, 255, .3) !important;
	color: #fff !important;
	-moz-border-radius: 8px !important;
	-webkit-border-radius: 8px !important;
	border-radius: 8px !important;
}

/* for line numbers */
/* span instead of span:before for a two-toned border */
.line-numbers .line-numbers-rows > span {
	border-right: 3px #d9d336 solid !important;
}
`
