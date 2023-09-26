document.write("<table border=1>")
document.write("<tr>")
passo = 1
do{
    document.write("<td>")
    if(passo > 0 && passo <= 10){
        if(passo % 2 != 0) {
            document.write(passo)
        }
    } else if(passo >= 11 && passo <= 20) {
        if(passo % 2 == 0) {
            document.write(passo)
        }
    } else if(passo >= 21 && passo <= 30) {
        if(passo % 2 != 0) {
            document.write(passo)
        }
    } else if(passo >= 31 && passo <= 40) {
        if(passo % 2 == 0) {
            document.write(passo)
        }
    } else if(passo >= 41 && passo <= 50) {
        if(passo % 2 != 0) {
            document.write(passo)
        }
    } else if(passo >= 51 && passo <= 60) {
        if(passo % 2 == 0) {
            document.write(passo)
        }
    } else if(passo >= 61 && passo <= 70) {
        if(passo % 2 != 0) {
            document.write(passo)
        }
    } else if(passo >= 71 && passo <= 80) {
        if(passo % 2 == 0) {
            document.write(passo)
        }
    } else if(passo >= 81 && passo <= 90) {
        if(passo % 2 != 0) {
            document.write(passo)
        }
    } else if(passo >= 91 && passo <= 100) {
        if(passo % 2 == 0) {
            document.write(passo)
        }
    }
    
    if(passo % 10 == 0) {
        document.write("<tr>")
        document.write("</tr>")
    } 
    document.write("</td>")
    passo++
}
while(passo <= 100)
document.write("</tr>")
document.write("</table>")
