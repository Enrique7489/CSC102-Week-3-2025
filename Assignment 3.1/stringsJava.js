function checkPal()
{

    var string1 = document.getElementById("initialString").value;
    var splitString = string1.split("");
    var revString = splitString.reverse();
    var joinString = revString.join("");



    if (string1 == joinString)
        {
            document.getElementById("resultsString").innerHTML = "Palindrome ✅";
        }

        else 
        {
            document.getElementById("resultsString").innerHTML = "Not a Palindrome ❌";
        }



    var reversed = ("");
    var i;

        for (i =  string1.length - 1; i >= 0; i--)
            {
                //a += 7 is equivalent to a = a + 7
                reversed += string1[i];
            }
            document.getElementById("results").innerHTML = reversed;



}