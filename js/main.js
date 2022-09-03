$("html").attr("lang", navigator.language);
$("head").append("<link rel='icon' href='images/logo.png' type='image/png'>");
$("head").append("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/css/all.min.css'crossorigin='anonymous'>");
$("#datum").text(new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear() + ".");

function mqResults() {
    var a = $('#odgovor').val();

    if(a == "akcioni horor") {
        $("#rezultat").text("Odgovor je tačan.");
        $("#rezultat").addClass("alert alert-success w-75 text-center mt-2");
    } else {
        $("#rezultat").html("Odgovor je netačan. <br> Upišite neki drugi odgovor (ili pronađite rješenje na Wikipediji ili IMDB-u).");
        $("#rezultat").addClass("alert alert-danger w-75 text-center mt-2");
    }

}
function provjeraOdgovora() { var a = document.forms[0].pitanje1.value, o = 0, t = 0; "BP" || "BL" == a ? o++ : t++, "Dvije" == document.forms[0].pitanje2.value ? o++ : t++, "Bilo koji" == document.forms[0].pitanje3.value ? o++ : t++, "Trece" == document.forms[0].pitanje4.value ? o++ : t++, "1999" == document.forms[0].pitanje5.value ? o++ : t++, "Tri" == document.forms[0].pitanje6.value ? o++ : t++, $("#rezultat").html("Broj tačnih odgovora: " + o + ", broj pogrešnih odgovora: " + t + "."), $("#rezultat").addClass("alert alert-info w-50 text-center mt-2 mx-auto") }
