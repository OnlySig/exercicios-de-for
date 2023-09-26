var col = 10
var x = 1
var linha = 1
var aux = 0

document.write("<table border=1>")
document.write("<tr>")
for(i=1;i<=100;i++){
    document.write("<td>")
    if(i <= (linha * 10) - linha + 1) {
        document.write(i)
    }
    aux++
    x+=10
    if(i % 10 == 0) {
        document.write("<tr>")
        document.write("</tr>")
        x = x - (aux * 10)
        x++
        aux = 0
        linha++
    } 
    document.write("</td>")
}
document.write("</tr>")
document.write("</table>")
