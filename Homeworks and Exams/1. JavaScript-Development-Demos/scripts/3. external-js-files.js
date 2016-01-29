function onLogoClicked() {
        // this pokazva cialata stranica
        console.log(this);
        alert("You clicked the SoftUni Logo!");
}

function onGenderChange(e) {
        var select = document.getElementById("gender-select");
//        console.log(select);
//        console.log(select.options);
//        console.log(select.selectedIndex);
//        console.log(select.options[select.options.selectedIndex]);
        alert(select.options[select.selectedIndex].value);
}