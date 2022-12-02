function Calcul()
{
    let Saisie = document.getElementById("output").value
    let EvalutionNum = eval(Saisie)
    document.getElementById("output").value = EvalutionNum
}
function Afficher(Valeur)
{
    Saisie = document.getElementById("output").value+=Valeur
}
function Effacer()
{
    document.getElementById("output").value = ""
}