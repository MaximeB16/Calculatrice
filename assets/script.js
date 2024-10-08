let n1 = 0;
let n2 = 0;
let op = "";
let OpNotJustAdd = true;

function AddChiffre(n){
    if(OpNotJustAdd){
        if((n==='.' && !(document.getElementById("Sortie").value).includes('.')) || n!=='.')
        document.getElementById("Sortie").value+=n;
        if((document.getElementById("Sortie").value).length>1 && document.getElementById("Sortie").value[0]=='0'){
            document.getElementById("Sortie").value=(document.getElementById("Sortie").value).substr(1);
        };
    }else{
        document.getElementById("Sortie").value=n;
        OpNotJustAdd=true;
    };
};

function SuppTout(){
    document.getElementById("Sortie").value='0';
    n1=0;
    n2=0;
    op="";
};

function Opperator(n){
    op=n;
    n1=parseFloat(document.getElementById("Sortie").value);
    OpNotJustAdd=false;
};

function Calcule(){
    if(n1!==0){
        n2=parseFloat(document.getElementById("Sortie").value);
        if(op==='+'){
            document.getElementById("Sortie").value=n1+n2;
        }else if(op==='-'){
            document.getElementById("Sortie").value=n1-n2;
        }else if(op==='*'){
            document.getElementById("Sortie").value=n1*n2;
        }else if(op==='/'){
            if(n2===0){
                alert("!!! PAS DE DIVISION PAR 0 !!!");
            }else{
            document.getElementById("Sortie").value=n1/n2;
            }
        }else if(op==='^'){
            document.getElementById("Sortie").value=n1**n2;
        }else{
            if(n1>0 && n2>0 && parseInt(n1)===n1 && parseInt(n2)===n2){
                document.getElementById("Sortie").value=n1%n2;
            }
        }
        n1=0;
        n2=0;
        op='';
        OpNotJustAdd=false;
    };
};

function SwitchNP(){
    if(document.getElementById("Sortie").value!=='0'){
        document.getElementById("Sortie").value=0-parseFloat(document.getElementById("Sortie").value);
    };
};

function Racine(){
    if(parseInt(document.getElementById("Sortie").value)>0){
        document.getElementById("Sortie").value=Math.sqrt(parseFloat(document.getElementById("Sortie").value))
    };
    n1=0;
    n2=0;
    op='';
    OpNotJustAdd=false;
};

function Factorielle(){
    if(parseInt(document.getElementById("Sortie").value)>0){
        let p=1;
        for(let k=1;k<=parseInt(document.getElementById("Sortie").value);k++){
            p*=k;
        };
        document.getElementById("Sortie").value=p;
    };
    n1=0;
    n2=0;
    op='';
    OpNotJustAdd=false;
};

document.addEventListener('keydown', function(event) {
    switch(event.key){
        case '0':
            AddChiffre('0');
            break;
        case '1':
            AddChiffre('1');
            break;
        case '2':
            AddChiffre('2');
            break;
        case '3':
            AddChiffre('3');
            break;
        case '4':
            AddChiffre('4');
            break;
        case '5':
            AddChiffre('5');
            break;
        case '6':
            AddChiffre('6');
            break;
        case '7':
            AddChiffre('7');
            break;
        case '8':
            AddChiffre('8');
            break;
        case '9':
            AddChiffre('9');
            break;
        case '.':
            AddChiffre('.');
            break;
        case ',':
            AddChiffre('.');
            break;
        case '+':
            Opperator('+');
            break;
        case '-':
            Opperator('-');
            break;
        case '*':
            Opperator('*');
            break;
        case '/':
            Opperator('/');
            break;
        case 'p':
            Opperator('^');
            break;
        case 'P':
            Opperator('^')
        case '!':
            Factorielle();
            break;
        case '%':
            Opperator('%');
            break;
        case 'r':
            Racine();
            break;
        case 'R':
            Racine();
            break;
        case 'Backspace':
            SuppTout();
            break;
        case 'Enter':
            Calcule();
            break;
        case '=':
            Calcule();
            break;
    }
});