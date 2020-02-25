// Self-Defined Math Library

function Number_Display(id,number_string){
    
    this.element = document.getElementById(id);

    var private_generate = function(top,left,type) {

        var Div_Container = document.createElement("div");

        if(type == "horizontal")
        {
            Div_Container.innerHTML = `
                <svg height="10" width="60">
                    <polygon points="0,5 5,0 55,0 60,5 55,10 5,10" style="fill:transparent;stroke:red;stroke-width:1;"/>
                    Sorry, your browser does not support inline SVG.
                </svg>
            `;
        }
        else if(type == "vertical")
        {
            Div_Container.innerHTML = `
                <svg height="60" width="10">
                    <polygon points="0,5 5,0 10,5 10,55 5,60 0,55" style="fill:transparent;stroke:red;stroke-width:1;"/>
                    Sorry, your browser does not support inline SVG.
                </svg>
            `;
        }
        
        Div_Container.style.position = "absolute";

        Div_Container.style.top = top + "px";

        Div_Container.style.left = left + "px";

        return Div_Container;
    }

    var Container = document.createElement("div");

    Container.appendChild(private_generate(0,11,"horizontal"));
    Container.appendChild(private_generate(62,11,"horizontal"));
    Container.appendChild(private_generate(122,11,"horizontal"));

    Container.appendChild(private_generate(10,4,"vertical"));
    Container.appendChild(private_generate(10,67,"vertical"));
    Container.appendChild(private_generate(70,4,"vertical"));
    Container.appendChild(private_generate(70,67,"vertical"));

    this.element.appendChild(Container);
}

module.exports = Number_Display;

/* {
    all: MembershipNames, // File
    random: uniqueRndomArray(MembershipNames), // Library
    Mage: Mage //function as class

} */