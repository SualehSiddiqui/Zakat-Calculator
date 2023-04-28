var money = document.querySelector("#money-div");
var goldTola = document.querySelector("#gold-am-div");
var silverTola = document.querySelector("#silver-am-div");

function calc() {
    money = money.value
    goldTola = goldTola.value
    silverTola = silverTola.value
    var gold = goldTola * 218000
    var silver = silverTola * 2643
    if (money >= 103159 && goldTola >= 8 && silverTola >= 53) {
        Swal.fire({
            title: "Your Cash is: <b>" + money + " PKR </b>" + "<br />Your Gold is: <b>" + goldTola + " Tola </b>" + "<br/>Your Silver is: <b>" + silverTola + " Tola </b>" +
                "<br />Your Zakat is: <b>" + (((money + gold + silver) * 2.5) * 0.01) + " PKR </b>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else if (money <= 103159 && goldTola >= 8 && silverTola >= 53) {
        Swal.fire({
            title: "Your Cash is: <b>Not eligible for zakat</b>" + "<br />Your Gold is: <b>" + goldTola + " Tola </b>" + "<br/>Your Silver is: <b>" + silverTola + " Tola </b>" +
                "<br />Your Zakat is: <b>" + (((gold + silver) * 2.5) * 0.01) + " PKR </b>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else if (money >= 103159 && goldTola <= 8 && silverTola >= 53) {
        Swal.fire({
            title: "Your Cash is: <b>" + money + " PKR </b>" + "<br />Your Gold is: <b>Not eligible for zakat</b>" + "<br/>Your Silver is: <b>" + silverTola + " Tola </b>" +
                "<br />Your Zakat is: <b>" + (((money + silver) * 2.5) * 0.01) + " PKR </b>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else if (money >= 103159 && goldTola >= 8 && silverTola <= 53) {
        Swal.fire({
            title: "Your Cash is: <b>" + money + " PKR </b>" + "<br />Your Gold is: <b>" + goldTola + " Tola </b>" + "<br/>Your Silver is: <b>Not eligible for zakat</b>"+
                "<br />Your Zakat is: <b>" + (((money + gold) * 2.5) * 0.01) + " PKR </b>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else if(money >= 103159 && goldTola <= 8 && silverTola <= 53){
        Swal.fire({
            title: "Your Cash is: <b>" + money + " PKR </b>" + "<br />Your Gold is: <b>Not eligible for zakat</b>" + "<br/>Your Silver is: <b>Not eligible for zakat</b>"+
                "<br />Your Zakat is: <b>" + (((money) * 2.5) * 0.01) + " PKR </b>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else if(money <= 103159 && goldTola >= 8 && silverTola <= 53){
        Swal.fire({
            title: "Your Cash is: <b>Not eligible for zakat</b>" + "<br />Your Gold is: <b>"+ goldTola + " Tola</b>" + "<br/>Your Silver is: <b>Not eligible for zakat</b>"+
                "<br />Your Zakat is: <b>" + (((gold) * 2.5) * 0.01) + " PKR </b>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else if(money <= 103159 && goldTola <= 8 && silverTola >= 53){
        Swal.fire({
            title: "Your Cash is: <b>Not eligible for zakat</b>" + "<br />Your Gold is: <b>Not eligible for zakat</b>" + "<br/>Your Silver is: <b>" + silverTola + " Tola</b>" +
                "<br />Your Zakat is: <b>" + (((silver) * 2.5) * 0.01) + " PKR </b>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    else{
        Swal.fire({
            title: "Your Cash is: <b>Not eligible for zakat</b>" + "<br />Your Gold is: <b>Not eligible for zakat</b>" + "<br/>Your Silver is: <b>Not eligible for zakat</b>",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
}