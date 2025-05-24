const toggleSwitch = document.querySelector('body');
const chefsContainer = document.getElementById('chef-cards');

var chefs = [
    {
        name: "Walter White",
        role: "Master Chef",
        img: "images/chefs/chefs-1.jpg",
        description: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate."
    },
    {
        name: "Sarah Jhonson",
        role: "Patissier",
        img: "images/chefs/chefs-2.jpg",
        description: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente."
    },
    {
        name: "William Anderson",
        role: "Cook",
        img: "images/chefs/chefs-3.jpg",
        description: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi."
    }
]

/**
 * 
 * @param {event} e 
 *  Switch theme
 */
function switchTheme(e) {
    if (e.target.checked) {
        toggleSwitch.setAttribute('data-theme', 'dark');
    }
    else {
        toggleSwitch.setAttribute('data-theme', 'light');
    }
}

var cartona = '';
for (let i = 0; i < chefs.length; i++) {
    cartona += `
                <div class="inner-layer md-50 lg-33">
                    <div class="chef-card ">
                        <div class="chef-img">
                            <img src=${chefs[i].img} alt="${chefs[i].name}" class="w-100">
                        </div>
                        <div class="chef-info">
                            <h3>${chefs[i].name}</h3>
                            <p>${chefs[i].role}</p>
                            <p>${chefs[i].description}
                            </p>
                        </div>
                    </div>
                </div>
`
    chefsContainer.innerHTML = cartona;
}




