const toggleSwitch = document.querySelector('body');
const chefsContainer = document.getElementById('chef-cards');
const gallaryContainer = document.getElementById('gallery-content');
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
var gallary = [
    {
        className: "pizza",
        img: "images/gallery/meal-1.jpg",
        title: "Pizza",
        description: "Hawaiian pizza with ham and pineapple"
    },
    {
        className: "steak",
        img: "images/gallery/meal-2.jpg",
        title: "Beef steaks",
        description: "Tasty beef steaks flying above cast iron grate with fire flames."
    },
    {
        className: "burger",
        img: "images/gallery/meal-3.jpg",
        title: "Burger",
        description: "grass fed bison hamburger with chips & beer"
    },
    {
        className: "battays",
        img: "images/gallery/meal-4.jpg",
        title: "Levitation pizza",
        description: "Levitation pizza on black background."
    },
    {
        className: "fira5",
        img: "images/gallery/meal-5.jpg",
        title: "Crispy Fried Chicken",
        description: "Golden brown chicken legs with a crunchy coating and juicy meat"
    },
    {
        className: "kabab",
        img: "images/gallery/meal-6.jpg",
        title: "Lyulya kebab",
        description: "Golden brown chicken legs with a crunchy coating and juicy meat"
    },
    {
        className: "fitera",
        img: "images/gallery/meal-7.jpg",
        title: "Frittata",
        description: "Frittata or potato pie in a ceramic plate"
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
                        <div class="chef-social">
                            <a href="https://www.facebook.com/fares.elabasery.9"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.facebook.com/fares.elabasery.9"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.facebook.com/fares.elabasery.9"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/fares.elabasery.9"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
`
    chefsContainer.innerHTML = cartona;
}

let gallaryCartona = '';
for (let i = 0; i < gallary.length; i++) {
    gallaryCartona += `
                <div class="gallery-img ${gallary[i].className}">
                    <img src=${gallary[i].img} alt=${gallary[i].className}>
                    <div class="overlay">
                        <h3>${gallary[i].title}</h3>
                        <p>${gallary[i].description}
                        </p>
                    </div>
                </div>
    `
    gallaryContainer.innerHTML = gallaryCartona;
}



