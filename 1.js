
function calculate(s) {
s = s.replace(/plus/g,'+')
s = s.replace(/minus/g,'-')
let v = eval(s)

return String(v);
}