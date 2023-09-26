document.write("<table border=1>")
document.write("<tr>")
passo = 1
while(passo <= 100) {
    if(passo % 2 != 0) {
        document.write("<td>")
            document.write(passo)
        document.write("</td>")
    } else {
        document.write("<td>")
            document.write("")
        document.write("</td>")
    }
    if(passo % 10 == 0) {
        document.write("<tr>")
        document.write("</tr>")
    }
    passo++
}
document.write("</tr>")
document.write("</table>")