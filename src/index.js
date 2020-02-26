// Self-Defined Math Library

const NUMBER_MAP_ARRAY = ["zero","one","two","three","four","five","six","seven","eight","nine"];

function Number_Display(id){
    
    this.id = id;

    this.element = document.getElementById(id);

    //set up the background
    this.element.backgroundColor = "black";

    this.element.style.padding = "10%"

    this.element.innerHTML = `
        <svg viewBox="0 0 100 200">
            <polygon class="zero two three five six seven eight nine" points="5,5 10,0 90,0 95,5 90,10 10,10" style="fill:grey;stroke:black;"/>
            <polygon class="two three four five six eight nine" points="5,100 10,95 90,95 95,100 90,105 10,105" style="fill:grey;stroke:black;"/>
            <polygon class="zero two three five six eight nine" points="5,195 10,190 90,190 95,195 90,200 10,200" style="fill:grey;stroke:black;"/>
            <polygon class="zero four five six eight nine" points="5,5 0,10 0,95 5,100 10,95 10,10" style="fill:grey;stroke:black;"/>
            <polygon class="zero one two three four seven eight nine" points="95,5 90,10 90,95 95,100 100,95 100,10" style="fill:grey;stroke:black;"/>
            <polygon class="zero two six eight" points="5,100 0,105 0,190 5,195 10,190 10,105" style="fill:grey;stroke:black;"/>
            <polygon class="zero one three four five six seven eight nine" points="95,100 90,105 90,190 95,195 100,190 100,105" style="fill:grey;stroke:black;"/>
            Sorry, your browser does not support inline SVG.
        </svg>     
    `;
}

Number_Display.prototype.updateNumber = function(Number_) {

    document.querySelectorAll('#' + this.id + ' .eight').forEach(function(element){
        element.style.fill = "grey";
    });

    document.querySelectorAll('#' + this.id + ' .' + NUMBER_MAP_ARRAY[Number_]).forEach(function(element){
        element.style.fill = "red";
    });
}

module.exports = Number_Display;

/* {
    all: MembershipNames, // File
    random: uniqueRndomArray(MembershipNames), // Library
    Mage: Mage //function as class

} */