import{d as lt,c as G,g as v,a as H,i as _,b as re,e as J,s as ze,f as Se,r as le,u as ot,h as Re,t as C,F as oe,j as at}from"./web.zg9RI5L8.js";import{p as ct,a as ht,$ as pt}from"./nanostores.RVhpkXze.js";function ce(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let q=ce();function Le(c){q=c}const Pe=/[&<>"']/,ut=new RegExp(Pe.source,"g"),Me=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ft=new RegExp(Me.source,"g"),gt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ve=c=>gt[c];function m(c,n){if(n){if(Pe.test(c))return c.replace(ut,ve)}else if(Me.test(c))return c.replace(ft,ve);return c}const dt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function kt(c){return c.replace(dt,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const xt=/(^|[^\[])\^/g;function d(c,n){let e=typeof c=="string"?c:c.source;n=n||"";const t={replace:(i,r)=>{let s=typeof r=="string"?r:r.source;return s=s.replace(xt,"$1"),e=e.replace(i,s),t},getRegex:()=>new RegExp(e,n)};return t}function Ie(c){try{c=encodeURI(c).replace(/%25/g,"%")}catch{return null}return c}const j={exec:()=>null};function Ae(c,n){const e=c.replace(/\|/g,(r,s,l)=>{let o=!1,p=s;for(;--p>=0&&l[p]==="\\";)o=!o;return o?"|":" |"}),t=e.split(/ \|/);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),n)if(t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function K(c,n,e){const t=c.length;if(t===0)return"";let i=0;for(;i<t;){const r=c.charAt(t-i-1);if(r===n&&!e)i++;else if(r!==n&&e)i++;else break}return c.slice(0,t-i)}function bt(c,n){if(c.indexOf(n[1])===-1)return-1;let e=0;for(let t=0;t<c.length;t++)if(c[t]==="\\")t++;else if(c[t]===n[0])e++;else if(c[t]===n[1]&&(e--,e<0))return t;return-1}function Ce(c,n,e,t){const i=n.href,r=n.title?m(n.title):null,s=c[1].replace(/\\([\[\]])/g,"$1");if(c[0].charAt(0)!=="!"){t.state.inLink=!0;const l={type:"link",raw:e,href:i,title:r,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,l}return{type:"image",raw:e,href:i,title:r,text:m(s)}}function mt(c,n){const e=c.match(/^(\s+)(?:```)/);if(e===null)return n;const t=e[1];return n.split(`
`).map(i=>{const r=i.match(/^\s+/);if(r===null)return i;const[s]=r;return s.length>=t.length?i.slice(t.length):i}).join(`
`)}class ee{options;rules;lexer;constructor(n){this.options=n||q}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:K(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],i=mt(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const i=K(t,"#");(this.options.pedantic||!i||/ $/.test(i))&&(t=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){const t=K(e[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(t);return this.lexer.state.top=i,{type:"blockquote",raw:e[0],tokens:r,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const i=t.length>1,r={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");const s=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",o="",p=!1;for(;n;){let a=!1;if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;l=e[0],n=n.substring(l.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,D=>" ".repeat(3*D.length)),h=n.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,o=u.trimStart()):(f=e[2].search(/[^ ]/),f=f>4?1:f,o=u.slice(f),f+=e[1].length);let T=!1;if(!u&&/^ *$/.test(h)&&(l+=h+`
`,n=n.substring(h.length+1),a=!0),!a){const D=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),k=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),S=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),R=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;n;){const w=n.split(`
`,1)[0];if(h=w,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),S.test(h)||R.test(h)||D.test(h)||k.test(n))break;if(h.search(/[^ ]/)>=f||!h.trim())o+=`
`+h.slice(f);else{if(T||u.search(/[^ ]/)>=4||S.test(u)||R.test(u)||k.test(u))break;o+=`
`+h}!T&&!h.trim()&&(T=!0),l+=w+`
`,n=n.substring(w.length+1),u=h.slice(f)}}r.loose||(p?r.loose=!0:/\n *\n *$/.test(l)&&(p=!0));let b=null,z;this.options.gfm&&(b=/^\[[ xX]\] /.exec(o),b&&(z=b[0]!=="[ ] ",o=o.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:l,task:!!b,checked:z,loose:!1,text:o,tokens:[]}),r.raw+=l}r.items[r.items.length-1].raw=l.trimEnd(),r.items[r.items.length-1].text=o.trimEnd(),r.raw=r.raw.trimEnd();for(let a=0;a<r.items.length;a++)if(this.lexer.state.top=!1,r.items[a].tokens=this.lexer.blockTokens(r.items[a].text,[]),!r.loose){const u=r.items[a].tokens.filter(f=>f.type==="space"),h=u.length>0&&u.some(f=>/\n.*\n/.test(f.raw));r.loose=h}if(r.loose)for(let a=0;a<r.items.length;a++)r.items[a].loose=!0;return r}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:i,title:r}}}table(n){const e=this.rules.block.table.exec(n);if(!e||!/[:|]/.test(e[2]))return;const t=Ae(e[1]),i=e[2].replace(/^\||\| *$/g,"").split("|"),r=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===i.length){for(const l of i)/^ *-+: *$/.test(l)?s.align.push("right"):/^ *:-+: *$/.test(l)?s.align.push("center"):/^ *:-+ *$/.test(l)?s.align.push("left"):s.align.push(null);for(const l of t)s.header.push({text:l,tokens:this.lexer.inline(l)});for(const l of r)s.rows.push(Ae(l,s.header.length).map(o=>({text:o,tokens:this.lexer.inline(o)})));return s}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:m(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const s=K(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{const s=bt(e[2],"()");if(s>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),Ce(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const i=(t[2]||t[1]).replace(/\s+/g," "),r=e[i.toLowerCase()];if(!r){const s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return Ce(t,r,t[0],this.lexer)}}emStrong(n,e,t=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const s=[...i[0]].length-1;let l,o,p=s,a=0;const u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*n.length+s);(i=u.exec(e))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(o=[...l].length,i[3]||i[4]){p+=o;continue}else if((i[5]||i[6])&&s%3&&!((s+o)%3)){a+=o;continue}if(p-=o,p>0)continue;o=Math.min(o,o+p+a);const h=[...i[0]][0].length,f=n.slice(0,s+i.index+h+o);if(Math.min(s,o)%2){const b=f.slice(1,-1);return{type:"em",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}const T=f.slice(2,-2);return{type:"strong",raw:f,text:T,tokens:this.lexer.inlineTokens(T)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const i=/[^ ]/.test(t),r=/^ /.test(t)&&/ $/.test(t);return i&&r&&(t=t.substring(1,t.length-1)),t=m(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,i;return e[2]==="@"?(t=m(e[1]),i="mailto:"+t):(t=m(e[1]),i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,i;if(e[2]==="@")t=m(e[0]),i="mailto:"+t;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);t=m(e[0]),e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){let t;return this.lexer.state.inRawBlock?t=e[0]:t=m(e[0]),{type:"text",raw:e[0],text:t}}}}const wt=/^(?: *(?:\n|$))+/,$t=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,yt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,F=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,_t=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ze=/(?:[*+-]|\d{1,9}[.)])/,Be=d(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Ze).getRegex(),he=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Tt=/^[^\n]+/,pe=/(?!\s*\])(?:\\.|[^\[\]\\])+/,zt=d(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",pe).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),St=d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ze).getRegex(),se="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ue=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,Rt=d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",ue).replace("tag",se).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),qe=d(he).replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",se).getRegex(),vt=d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",qe).getRegex(),fe={blockquote:vt,code:$t,def:zt,fences:yt,heading:_t,hr:F,html:Rt,lheading:Be,list:St,newline:wt,paragraph:qe,table:j,text:Tt},Ee=d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",se).getRegex(),It={...fe,table:Ee,paragraph:d(he).replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ee).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",se).getRegex()},At={...fe,html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ue).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:j,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:d(he).replace("hr",F).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Be).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Qe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ct=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,De=/^( {2,}|\\)\n(?!\s*$)/,Et=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,U="\\p{P}$+<=>`^|~",Lt=d(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,U).getRegex(),Pt=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Mt=d(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,U).getRegex(),Zt=d("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,U).getRegex(),Bt=d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,U).getRegex(),qt=d(/\\([punct])/,"gu").replace(/punct/g,U).getRegex(),Qt=d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Dt=d(ue).replace("(?:-->|$)","-->").getRegex(),Ot=d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Dt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),te=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Ht=d(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",te).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Oe=d(/^!?\[(label)\]\[(ref)\]/).replace("label",te).replace("ref",pe).getRegex(),He=d(/^!?\[(ref)\](?:\[\])?/).replace("ref",pe).getRegex(),Nt=d("reflink|nolink(?!\\()","g").replace("reflink",Oe).replace("nolink",He).getRegex(),ge={_backpedal:j,anyPunctuation:qt,autolink:Qt,blockSkip:Pt,br:De,code:Ct,del:j,emStrongLDelim:Mt,emStrongRDelimAst:Zt,emStrongRDelimUnd:Bt,escape:Qe,link:Ht,nolink:He,punctuation:Lt,reflink:Oe,reflinkSearch:Nt,tag:Ot,text:Et,url:j},jt={...ge,link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",te).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",te).getRegex()},ae={...ge,escape:d(Qe).replace("])","~|])").getRegex(),url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ft={...ae,br:d(De).replace("{2,}","*").getRegex(),text:d(ae.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},V={normal:fe,gfm:It,pedantic:At},N={normal:ge,gfm:ae,breaks:Ft,pedantic:jt};class I{tokens;options;state;tokenizer;inlineQueue;constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||q,this.options.tokenizer=this.options.tokenizer||new ee,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:V.normal,inline:N.normal};this.options.pedantic?(e.block=V.pedantic,e.inline=N.pedantic):this.options.gfm&&(e.block=V.gfm,this.options.breaks?e.inline=N.breaks:e.inline=N.gfm),this.tokenizer.rules=e}static get rules(){return{block:V,inline:N}}static lex(n,e){return new I(e).lex(n)}static lexInline(n,e){return new I(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(l,o,p)=>o+"    ".repeat(p.length));let t,i,r,s;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(t=l.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.space(n)){n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);continue}if(t=this.tokenizer.code(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(t);continue}if(t=this.tokenizer.fences(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.heading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.hr(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.blockquote(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.list(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.html(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.def(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.lheading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(r=n,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=n.slice(1);let p;this.options.extensions.startBlock.forEach(a=>{p=a.call({lexer:this},o),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(r=n.substring(0,l+1))}if(this.state.top&&(t=this.tokenizer.paragraph(r))){i=e[e.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(t),s=r.length!==n.length,n=n.substring(t.raw.length);continue}if(t=this.tokenizer.text(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(t);continue}if(n){const l="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,i,r,s=n,l,o,p;if(this.tokens.links){const a=Object.keys(this.tokens.links);if(a.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)a.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(o||(p=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(a=>(t=a.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.escape(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.tag(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):e.push(t);continue}if(t=this.tokenizer.link(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(t.raw.length),i=e[e.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):e.push(t);continue}if(t=this.tokenizer.emStrong(n,s,p)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.codespan(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.br(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.del(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.autolink(n)){n=n.substring(t.raw.length),e.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(n))){n=n.substring(t.raw.length),e.push(t);continue}if(r=n,this.options.extensions&&this.options.extensions.startInline){let a=1/0;const u=n.slice(1);let h;this.options.extensions.startInline.forEach(f=>{h=f.call({lexer:this},u),typeof h=="number"&&h>=0&&(a=Math.min(a,h))}),a<1/0&&a>=0&&(r=n.substring(0,a+1))}if(t=this.tokenizer.inlineText(r)){n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(p=t.raw.slice(-1)),o=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):e.push(t);continue}if(n){const a="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return e}}class ne{options;constructor(n){this.options=n||q}code(n,e,t){const i=(e||"").match(/^\S*/)?.[0];return n=n.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+m(i)+'">'+(t?n:m(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:m(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,e){return n}heading(n,e,t){return`<h${e}>${n}</h${e}>
`}hr(){return`<hr>
`}list(n,e,t){const i=e?"ol":"ul",r=e&&t!==1?' start="'+t+'"':"";return"<"+i+r+`>
`+n+"</"+i+`>
`}listitem(n,e,t){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){const i=Ie(n);if(i===null)return t;n=i;let r='<a href="'+n+'"';return e&&(r+=' title="'+e+'"'),r+=">"+t+"</a>",r}image(n,e,t){const i=Ie(n);if(i===null)return t;n=i;let r=`<img src="${n}" alt="${t}"`;return e&&(r+=` title="${e}"`),r+=">",r}text(n){return n}}class de{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class A{options;renderer;textRenderer;constructor(n){this.options=n||q,this.options.renderer=this.options.renderer||new ne,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new de}static parse(n,e){return new A(e).parse(n)}static parseInline(n,e){return new A(e).parseInline(n)}parse(n,e=!0){let t="";for(let i=0;i<n.length;i++){const r=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=r,l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){t+=l||"";continue}}switch(r.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const s=r;t+=this.renderer.heading(this.parseInline(s.tokens),s.depth,kt(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=r;t+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=r;let l="",o="";for(let a=0;a<s.header.length;a++)o+=this.renderer.tablecell(this.parseInline(s.header[a].tokens),{header:!0,align:s.align[a]});l+=this.renderer.tablerow(o);let p="";for(let a=0;a<s.rows.length;a++){const u=s.rows[a];o="";for(let h=0;h<u.length;h++)o+=this.renderer.tablecell(this.parseInline(u[h].tokens),{header:!1,align:s.align[h]});p+=this.renderer.tablerow(o)}t+=this.renderer.table(l,p);continue}case"blockquote":{const s=r,l=this.parse(s.tokens);t+=this.renderer.blockquote(l);continue}case"list":{const s=r,l=s.ordered,o=s.start,p=s.loose;let a="";for(let u=0;u<s.items.length;u++){const h=s.items[u],f=h.checked,T=h.task;let b="";if(h.task){const z=this.renderer.checkbox(!!f);p?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=z+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=z+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:z+" "}):b+=z+" "}b+=this.parse(h.tokens,p),a+=this.renderer.listitem(b,T,!!f)}t+=this.renderer.list(a,l,o);continue}case"html":{const s=r;t+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=r;t+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=r,l=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<n.length&&n[i+1].type==="text";)s=n[++i],l+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);t+=e?this.renderer.paragraph(l):l;continue}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return t}parseInline(n,e){e=e||this.renderer;let t="";for(let i=0;i<n.length;i++){const r=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=this.options.extensions.renderers[r.type].call({parser:this},r);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){t+=s||"";continue}}switch(r.type){case"escape":{const s=r;t+=e.text(s.text);break}case"html":{const s=r;t+=e.html(s.text);break}case"link":{const s=r;t+=e.link(s.href,s.title,this.parseInline(s.tokens,e));break}case"image":{const s=r;t+=e.image(s.href,s.title,s.text);break}case"strong":{const s=r;t+=e.strong(this.parseInline(s.tokens,e));break}case"em":{const s=r;t+=e.em(this.parseInline(s.tokens,e));break}case"codespan":{const s=r;t+=e.codespan(s.text);break}case"br":{t+=e.br();break}case"del":{const s=r;t+=e.del(this.parseInline(s.tokens,e));break}case"text":{const s=r;t+=e.text(s.text);break}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return t}}class Y{options;constructor(n){this.options=n||q}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}class Ut{defaults=ce();options=this.setOptions;parse=this.#e(I.lex,A.parse);parseInline=this.#e(I.lexInline,A.parseInline);Parser=A;Renderer=ne;TextRenderer=de;Lexer=I;Tokenizer=ee;Hooks=Y;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(const i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{const r=i;for(const s of r.header)t=t.concat(this.walkTokens(s.tokens,e));for(const s of r.rows)for(const l of s)t=t.concat(this.walkTokens(l.tokens,e));break}case"list":{const r=i;t=t.concat(this.walkTokens(r.items,e));break}default:{const r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{t=t.concat(this.walkTokens(r[s],e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const s=e.renderers[r.name];s?e.renderers[r.name]=function(...l){let o=r.renderer.apply(this,l);return o===!1&&(o=s.apply(this,l)),o}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),t.renderer){const r=this.defaults.renderer||new ne(this.defaults);for(const s in t.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(s==="options")continue;const l=s,o=t.renderer[l],p=r[l];r[l]=(...a)=>{let u=o.apply(r,a);return u===!1&&(u=p.apply(r,a)),u||""}}i.renderer=r}if(t.tokenizer){const r=this.defaults.tokenizer||new ee(this.defaults);for(const s in t.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,o=t.tokenizer[l],p=r[l];r[l]=(...a)=>{let u=o.apply(r,a);return u===!1&&(u=p.apply(r,a)),u}}i.tokenizer=r}if(t.hooks){const r=this.defaults.hooks||new Y;for(const s in t.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;const l=s,o=t.hooks[l],p=r[l];Y.passThroughHooks.has(s)?r[l]=a=>{if(this.defaults.async)return Promise.resolve(o.call(r,a)).then(h=>p.call(r,h));const u=o.call(r,a);return p.call(r,u)}:r[l]=(...a)=>{let u=o.apply(r,a);return u===!1&&(u=p.apply(r,a)),u}}i.hooks=r}if(t.walkTokens){const r=this.defaults.walkTokens,s=t.walkTokens;i.walkTokens=function(l){let o=[];return o.push(s.call(this,l)),r&&(o=o.concat(r.call(this,l))),o}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return I.lex(n,e??this.defaults)}parser(n,e){return A.parse(n,e??this.defaults)}#e(n,e){return(t,i)=>{const r={...i},s={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const l=this.#t(!!s.silent,!!s.async);if(typeof t>"u"||t===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(o=>n(o,s)).then(o=>s.hooks?s.hooks.processAllTokens(o):o).then(o=>s.walkTokens?Promise.all(this.walkTokens(o,s.walkTokens)).then(()=>o):o).then(o=>e(o,s)).then(o=>s.hooks?s.hooks.postprocess(o):o).catch(l);try{s.hooks&&(t=s.hooks.preprocess(t));let o=n(t,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let p=e(o,s);return s.hooks&&(p=s.hooks.postprocess(p)),p}catch(o){return l(o)}}}#t(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+m(t.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(t);throw t}}}const B=new Ut;function g(c,n){return B.parse(c,n)}g.options=g.setOptions=function(c){return B.setOptions(c),g.defaults=B.defaults,Le(g.defaults),g};g.getDefaults=ce;g.defaults=q;g.use=function(...c){return B.use(...c),g.defaults=B.defaults,Le(g.defaults),g};g.walkTokens=function(c,n){return B.walkTokens(c,n)};g.parseInline=B.parseInline;g.Parser=A;g.parser=A.parse;g.Renderer=ne;g.TextRenderer=de;g.Lexer=I;g.lexer=I.lex;g.Tokenizer=ee;g.Hooks=Y;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;A.parse;I.lex;var Wt=C('<main class="flex flex-col bg-gray-100 dark:bg-gray-800 text-black dark:text-white"><div id=chat-container class="flex-grow overflow-y-auto"><div class="container mx-auto px-2 max-w-5xl"><div class="py-4 text-center font-thin"></div></div><div id=chat-thread class="w-full border-t border-slate-400"></div></div><div><!$><!/><div class="py-2 px-4 justify-center items-center text-xs flex space-x-2"id=example-buttons></div><form class="p-2 flex"id=chat-form><div class="container flex mx-auto max-w-5xl"><div id=user-input style=height:max-content; class="flex-grow px-4 py-2 border border-slate-400 dark:border-slate-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-400"></div><button type=submit id=submit-btn class="ml-2 px-4 py-2 rounded-lg text-slate-500 bg-slate-200 hover:bg-slate-300 dark:text-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600">'),Xt=C('<div><div class="px-2 py-8 mx-auto max-w-5xl"><div class="container flex items-center"><!$><!/><div><article class="prose dark:prose-invert max-w-full"></article><!$><!/>'),Gt=C('<i class="fas fa-user-astronaut text-xl mr-4">'),Jt=C('<i class="fas fa-robot text-xl mr-4">'),Kt=C('<button class="m-2 px-3 py-1 text-sm bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-lg">'),Vt=C('<dialog class=modal><div class=modal-box><h3 class="font-bold text-lg">📖 <!$><!/> [p. <!$><!/>]</h3><p class=py-4></p></div><form method=dialog class=modal-backdrop><button>close'),Yt=C('<div class=text-center><div id=warning-card class="bg-orange-300 p-2 text-orange-900 text-sm rounded-lg font-semibold mb-2 hidden inline-block">'),en=C('<button class="px-4 py-1 bg-slate-300 text-slate-600 rounded-lg hover:bg-gray-400">'),tn=C('<i id=loading-spinner class="hidden fas fa-spinner fa-spin">'),nn=C('<i id=send-icon class="fas fa-paper-plane">');function ln(){const c=ct(pt),[n,e]=G([{message:"How can I help you today?",type:"bot",sources:[]}]),[t,i]=G(""),[r,s]=G(""),[l,o]=G(!1);let p,a;const u=(k,S="bot")=>{e(R=>[...R,{message:k,type:S,sources:[]}]),o(!1),a.scrollTop=a.scrollHeight};function h(k){k.preventDefault(),b()}function f(k){i(k.target.innerText)}function T(k){k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),b())}function b(){if(console.log("submitInput"),l()){s("⏳ Thinking...");return}if(t().trim()!==""){u(t(),"user");const k={prompt:t()};p.send(JSON.stringify(k)),o(!0),i("")}}function z(k){const R=`${k.protocol==="https:"?"wss:":"ws:"}//${k.host}/chat`;console.log(`🔌 Connecting to ${R}`),p=new WebSocket(R),p.onopen=()=>{console.log("🔌 Connected to the API websocket")},p.onclose=w=>{console.warn("WebSocket closed with code:",w.code,"reason:",w.reason),u("Sorry, an error happened, please retry."),setTimeout(()=>{console.log("♻️ Attempting to reconnect..."),z(k)},2e3)},p.onerror=w=>{console.error("WebSocket error:",w),u("An error happened, please retry.")},p.onmessage=w=>{const L=JSON.parse(w.data);L.type==="start"?u("","bot"):L.type==="stream"?e(Q=>{const $=[...Q],y=$.length-1;return y>=0&&($[y]={...$[y],message:$[y].message+L.message}),$}):L.type==="end"&&(L.sources&&e(Q=>{const $=[...Q],y=$.length-1;return y>=0&&($[y]={...$[y],sources:L.sources}),$}),console.log("Messages:",n()),o(!1),s(""))}}const D=new URL(`${ht}/chat`);return z(D),(()=>{var k=v(Wt),S=k.firstChild,R=S.firstChild,w=R.firstChild,L=R.nextSibling,Q=S.nextSibling,$=Q.firstChild,[y,Ne]=H($.nextSibling),ke=y.nextSibling,xe=ke.nextSibling,je=xe.firstChild,W=je.firstChild,Fe=W.nextSibling;k.style.setProperty("flex-grow","1"),k.style.setProperty("overflow-y","auto");var be=a;return typeof be=="function"?ot(be,S):a=S,_(L,re(oe,{get each(){return n()},children:(x,ie)=>(()=>{var P=v(Xt),Ue=P.firstChild,me=Ue.firstChild,We=me.firstChild,[we,Xe]=H(We.nextSibling),$e=we.nextSibling,ye=$e.firstChild,Ge=ye.nextSibling,[Je,Ke]=H(Ge.nextSibling);return _(me,(()=>{var E=J(()=>x.type==="user");return()=>E()?v(Gt):v(Jt)})(),we,Xe),_($e,(()=>{var E=J(()=>x.sources.length>0);return()=>E()&&re(oe,{get each(){return x.sources},children:(M,O)=>[(()=>{var Z=v(Kt);return Z.$$click=()=>document.getElementById(`source_modal_${ie}_${O}`)?.showModal(),_(Z,()=>M.metadata.filename),le(),Z})(),(()=>{var Z=v(Vt),Ve=Z.firstChild,X=Ve.firstChild,Ye=X.firstChild,et=Ye.nextSibling,[_e,tt]=H(et.nextSibling),nt=_e.nextSibling,st=nt.nextSibling,[Te,it]=H(st.nextSibling);Te.nextSibling;var rt=X.nextSibling;return ze(Z,"id",`source_modal_${ie}_${O}`),_(X,()=>M.metadata.filename,_e,tt),_(X,()=>M.metadata.page,Te,it),_(rt,()=>M.page_content),Z})()]})})(),Je,Ke),Se(E=>{var M=`border-b border-slate-400 ${x.type==="user"?"bg-gray-100 dark:bg-gray-700":"bg-gray-200 dark:bg-gray-600"}`,O=g.parse(x.message).toString();return M!==E.e&&at(P,E.e=M),O!==E.t&&Re(ye,"innerHTML",E.t=O),E},{e:void 0,t:void 0}),P})()})),_(Q,(()=>{var x=J(()=>r().length>0);return()=>x()&&v(Yt)})(),y,Ne),_(ke,re(oe,{get each(){return c().info.examples},children:(x,ie)=>(()=>{var P=v(en);return P.$$click=()=>{i(x),b()},_(P,x),le(),P})()})),xe.addEventListener("submit",x=>h(x)),W.$$keydown=x=>T(x),W.$$input=x=>f(x),ze(W,"contenteditable",!0),_(Fe,(()=>{var x=J(()=>!!l());return()=>x()?v(tn):v(nn)})()),Se(()=>Re(w,"innerHTML",g.parse(c().info.description).toString())),le(),k})()}lt(["input","keydown","click"]);export{ln as default};
