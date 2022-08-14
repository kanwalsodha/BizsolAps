// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var developer = 0;
var rowCount = 1;
$(document).ready(function () {
    developer = 1;
   
});

function AddNewfields() {
    rowCount++;
    if (developer == 1) {
        var row1 = "  <hr /> <div class='form-group'> <div class='row' id='row" + rowCount+"'>"
        var endrow = " </div> </div>"

        for (var i = 0; i < 3; i++) {
            var value = 'textfields' + i;
            row1 += "<div class=col-4> <label for='" + value + "' > " + value + "</label> <input type='text' class='form-control' value='" + value + "' id='" + value + "' placeholder='" + value + "' />  </div>";
        }

        row1 = row1 + endrow;
        $("#modelBodyID").append(row1);
        developer = 2;
       
       
    } else {
        var row2 = "  <hr /> <div class='form-group'> <div class='row' id='row" + rowCount +"'> <div class='col-4'> <label for='Name' >Name</label> <input type='text' class='form-control' id='Name1' value='Developer 2' placeholder='Name' /> </div>";
        row2 += "<div class='col-4'> <label for='Age'>Age</label> <input type='text' class='form-control' id='Age1' value='32' placeholder='Age' /> </div> ";
        row2 += "<div class='col-4'> <label for='job Title'>Title</label>  <input type='text' class='form-control' id='jobTitle1' value='Job Title 2' placeholder='Job Title 2' /> </div> </div> </div>";

        $("#modelBodyID").append(row2);
        rowCount++;

        var row3 = "  <hr /> <div class='form-group'> <div class='row' id='row" + rowCount +"'>"
        var endrow = " </div> </div>"

        for (var i = 0; i < 3; i++) {
            var value = 'textfields' + i;
            row3 += "<div class=col-4> <label for='" + value + "' > " + value + "</label> <input type='text' class='form-control' value='" + value + "' id='" + value + "' placeholder='" + value + "' />  </div>";
        }

        row3 = row3 + endrow;
        $("#modelBodyID").append(row3);
    }    
}

function SaveDataBase() {
    var Name = null;
    var Age = null;
    var JobTitle = null;
    var Fields1 = null;
    var Fields2 = null;
    var Fields3 = null;

    var tablerow = 1;
    var DevObjList = [];

 
    for (var i = 0; i < $(".row").length; i++) {
        debugger;
        if (i % 2 == 0) {
            Name = $("#row" + tablerow).find("input")[0].value;
            Age = $("#row" + tablerow).find("input")[1].value;
            JobTitle = $("#row" + tablerow).find("input")[2].value;

        } else {
            Fields1 = $("#row" + tablerow).find("input")[0].value;
            Fields2 = $("#row" + tablerow).find("input")[1].value;
            Fields3 = $("#row" + tablerow).find("input")[2].value;
        }

        if (i % 2 == 1) {
            var DevObj = {
                Name: Name,
                Age: Age,
                JobTitle: JobTitle,
                Fields1: Fields1,
                Fields2: Fields2,
                Fields3: Fields3
            };
            DevObjList.push(DevObj);
        }

        if ($(".row").length==1) {
            var DevObj = {
                Name: Name,
                Age: Age,
                JobTitle: JobTitle,
                Fields1: Fields1,
                Fields2: Fields2,
                Fields3: Fields3
            };
            DevObjList.push(DevObj);
        }

        tablerow++;
    }
    $.ajax({
        url: "/Home/InsertDevelopers",
        data: { jsonData: JSON.stringify(DevObjList) },
        type: "POST",
        dataType: "JSON",
        success: function (result) {
            alert('Developer list has been added successfully!')
            $('#myModal').modal('toggle');
            location.reload();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
