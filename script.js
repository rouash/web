//Scroll to top on refresh
window.onload = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


//Scroll to top on page load
document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0);
});

//Scroll down when scroll down button is clicked
const scrollDownBtn = document.getElementById('scrollDownBtn');
if (scrollDownBtn) {
    scrollDownBtn.onclick = function () {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
}

//Scroll to Top when scroll up button is clicked 
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (scrollToTopBtn) {
    scrollToTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

//Show/hide scroll-up btn when user scrolls
window.onscroll = function () {
    if (scrollToTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block"; //show button
        } else {
            scrollToTopBtn.style.display = 'none'; //hide button
        }
    }
};

//Load recipes from LocalStorage or use default recipes
function loadRecipes() {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    //Default recipes
    const defaultRecipes = [
        {
            name: "Tomato Soup",
            image: "2430.jpg",
            ingredients: "Tomato , Onion, Garlic, Chicken Broth",
            instructions: "Boil the ingredients in a pot, then blend until smooth.",
            link: "#tomato-soap"
        },
        {
            name: "Broccoli Soup",
            image: "2148706409.jpg",
            ingredients: "Broccoli, Onion, Garlic, Chicken Broth",
            instructions: "Boil the ingredients in a pot, then blend until smooth.",
            link: "#broccoli-soup"
        },
        {
            name: "Pumpkin Soup",
            image: "2148656285.jpg",
            ingredients: "Pumpkin, Onion, Garlic, Chicken Broth",
            instructions: "Boil the ingredients in a pot, then blend until smooth.",
            link: "#pumpkin-soup"
        },
        {
            name: "Chicken Noodle Soup",
            image: "2148717404.jpg",
            ingredients: "Chicken, Noodles, Onion, Garlic",
            instructions: "Boil the ingredients in a pot, then serve.",
            link: "#chicken-noodle-soup"
        },
        {
            name: "Garlicy Mushroom Soup",
            image: "2149629080.jpg",
            ingredients: "Mushroom, Onion, Garlic, Chicken Broth",
            instructions: "Boil the ingredients in a pot, then blend until smooth.",
            link: "#garlicy-mushroom-soup"
        },
        {
            name: "Red Lentil Soup",
            image: "3778.jpg",
            ingredients: "Red Lentil, Onion, Garlic, Chicken Broth",
            instructions: "Boil the ingredients in a pot, then blend until smooth.",
            link: "#red-lentil-soup"
        },
        {
            name: "Vegetable chicken broth Soup",
            image: "2237.jpg",
            ingredients: "Vegetable, Chicken, Onion, Garlic",
            instructions: "Boil the ingredients in a pot, then serve.",
            link: "#vegetable-chicken-broth-soup"
        },
        {
            name: "Vegetable Soup",
            image: "162788.jpg",
            ingredients: "Vegetable, Onion, Garlic",
            instructions: "Boil the ingredients in a pot, then serve.",
            link: "#vegetable-soup"
        },
        {
            name: "Vermicelli Soup",
            image: "141424.jpg",
            ingredients: "Vermicelli, Onion, Garlic",
            instructions: "Boil the ingredients in a pot, then serve.",
            link: "#vermicelli-soup"
        },
        {
            name: "Yellow Soup",
            image: "94528.jpg",
            ingredients: "Yellow, Onion, Garlic",
            instructions: "Boil the ingredients in a pot, then serve.",
            link: "#yellow-soup"
        },
        {
            name: "Cheese Board",
            image: "2412.jpg",
            ingredients: "Cheese, Bread",
            instructions: "Arrange the ingredients on a board.",
            link: "#cheese-board"
        },
        {
            name: "Bread Rolls",
            image: "8678.jpg",
            ingredients: "Bread, Butter",
            instructions: "Butter the bread, then roll.",
            link: "#bread-rolls"
        },
        {
            name: "Nachos",
            image: "2147740732.jpg",
            ingredients: "Tortilla Chips, Cheese, Salsa",
            instructions: "Arrange the ingredients on a plate.",
            link: "#nachos"
        },
        {
            name: "Vegetable Salad",
            image: "5609.jpg",
            ingredients: "Vegetable, Onion, Garlic",
            instructions: "Arrange the ingredients in a bowl.",
            link: "#vegetable-salad"
        },
        {
            name: "Chicken Salad",
            image: "9207.jpg",
            ingredients: "Chicken, Onion, Garlic",
            instructions: "Arrange the ingredients in a bowl.",
            link: "#chicken-salad"
        },
        {
            name: "Mac n Cheese",
            image: "16122.jpg",
            ingredients: "Macaroni, Cheese",
            instructions: "Boil the macaroni, then mix with cheese.",
            link: "#mac-n-cheese"
        },
        {
            name: "Swedish Meatballs",
            image: "2148933298.jpg",
            ingredients: "Meatballs, Gravy",
            instructions: "Boil the meatballs, then serve with gravy.",
            link: "#swedish-meatballs"
        },
        {
            name: "Onion Rings",
            image: "2149235970.jpg",
            ingredients: "Onion, Flour",
            instructions: "Dip the onion in flour, then fry.",
            link: "#onion-rings"
        },
        {
            name: "Asian Noodles",
            image: "2147985294.jpg",
            ingredients: "Noodles, Soy Sauce",
            instructions: "Boil the noodles, then mix with soy sauce.",
            link: "#asian-noodles"
        },
        {
            name: "Pepperoni Grilled Cheese",
            image: "8148.jpg",
            ingredients: "Pepperoni, Cheese, Bread",
            instructions: "Butter the bread, then grill.",
            link: "#pepperoni-grilled-cheese"
        },
        {
            name: "Fluffy Pizza",
            image: "56212.jpg",
            ingredients: "Pizza Dough, Cheese",
            instructions: "Roll out the dough, then bake.",
            link: "#fluffy-pizza"
        },
        {
            name: "Chicken Wings",
            image: "28298.jpg",
            ingredients: "Chicken, Sauce",
            instructions: "Dip the chicken in sauce, then bake.",
            link: "#chicken-wings"
        },
        {
            name: "Classic Cheeseburger",
            image: "2147695733.jpg",
            ingredients: "Burger, Cheese",
            instructions: "Grill the burger, then serve.",
            link: "#classic-cheeseburger"
        },
        {
            name: "Steak",
            image: "44194.jpg",
            ingredients: "Steak, Butter",
            instructions: "Grill the steak, then serve.",
            link: "#steak"
        },
        {
            name: "Tacos",
            image: "2148750427.jpg",
            ingredients: "Tortilla, Meat",
            instructions: "Grill the meat, then serve.",
            link: "#tacos"
        },
        {
            name: "Chicken Fettucine Alfredo",
            image: "2486.jpg",
            ingredients: "Fettucine, Chicken, Cheese",
            instructions: "Boil the fettucine, then mix with chicken and cheese.",
            link: "#chicken-fettucine-alfredo"
        },
        {
            name: "Meatballs and Spaghetti",
            image: "2200.jpg",
            ingredients: "Meatballs, Spaghetti",
            instructions: "Boil the spaghetti, then serve with meatballs.",
            link: "#meatballs-and-spaghetti"
        },
        {
            name: "Beef Stew",
            image: "2149370831.jpg",
            ingredients: "Beef, Vegetables",
            instructions: "Boil the beef and vegetables, then serve.",
            link: "#beef-stew"
        },
        {
            name: "Classic Italian Lasagna",
            image: "1788.jpg",
            ingredients: "Lasagna, Cheese",
            instructions: "Boil the lasagna, then mix with cheese.",
            link: "#classic-italian-lasagna"
        },
        {
            name: "Butter Chicken",
            image: "6243.jpg",
            ingredients: "Chicken, Butter",
            instructions: "Grill the chicken, then serve.",
            link: "#butter-chicken"
        },
        {
            name: "Air Fryer Donuts",
            image: "2150674130.jpg",
            ingredients: "Donuts, Sugar",
            instructions: "Air fry the donuts, then serve.",
            link: "#air-fryer-donuts"
        },
        {
            name: "Cinnamon Rolls",
            image: "2148779698.jpg",
            ingredients: "Cinnamon Rolls, Sugar",
            instructions: "Bake the cinnamon rolls, then serve.",
            link: "#cinnamon-rolls"
        },
        {
            name: "Tiramissu",
            image: "2149030734.jpg",
            ingredients: "Mascarpone, Coffee",
            instructions: "Mix the mascarpone and coffee.",
            link: "#tiramissu"
        },
        {
            name: "Fluffy Pancakes",
            image: "46053.jpg",
            ingredients: "Pancakes, Eggs",
            instructions: "Mix the pancakes and eggs.",
            link: "#fluffy-pancakes"
        },
        {
            name: "Classic Russian Cake",
            image: "17581.jpg",
            ingredients: "Cake, Butter",
            instructions: "Mix the cake and butter.",
            link: "#classic-russian-honey-cake"
        },
        {
            name: "Crème Brûlée",
            image: "7651.jpg",
            ingredients: "Cream, Sugar",
            instructions: "Mix the cream and sugar.",
            link: "#Crème-Brûlée"
        },
        {
            name: "Cupcakes",
            image: "2148777723.jpg",
            ingredients: "Cupcakes, Sugar",
            instructions: "Mix the cupcakes and sugar.",
            link: "#Cupcakes"
        },
        {
            name: "Classic Banana Bread",
            image: "2148858403.jpg",
            ingredients: "Banana Bread, Sugar",
            instructions: "Mix the banana bread and sugar.",
            link: "#classic-banana-bread"
        },
        {
            name: "Chocolate Chip Cookies",
            image: "2149702507.jpg",
            ingredients: "Chocolate Chip Cookies, Sugar",
            instructions: "Mix the chocolate chip cookies and sugar.",
            link: "#chocolate-chip-cookies"
        },
        {
            name: "Chocolate Cake",
            image: "2148689807.jpg",
            ingredients: "Chocolate Cake, Sugar",
            instructions: "Mix the chocolate cake and sugar.",
            link: "#chocolate-cookies"
        },
    ];
    return [...defaultRecipes, ...storedRecipes];
}

//Render recipes to the page
function renderRecipes(recipesList) {
    const recipeSection = document.getElementById('recipeSection');
    if (!recipeSection) {
        console.error('Recipe section not found!');
        return;
    }

    recipeSection.innerHTML = '';
    recipesList.forEach((recipe) => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image || 'default.jpg'}" alt="${recipe.name}" loading ="lazy">
            <h2>${recipe.name}</h2>
            <p>${recipe.ingredients}</p>
            <button class="view-recipe-btn" data-name="${recipe.name}">View Recipe</button>
        `;
        recipeSection.appendChild(recipeCard);
    });
}

//Open Modal with recipe details
function openModal(recipe) {
    if (!recipe) return;
    const modal = document.getElementById('recipeModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.querySelector('.close-btn');

    if (!modal || !modalOverlay || !closeModalBtn) {
        console.error('Modal elements not found!');
        return;
    }


    //set modal content
    modalTitle.textContent = recipe.name;
    modalImage.src = recipe.image || 'default.jpg';
    modalIngredients.textContent = recipe.ingredients || 'No ingredients available';
    modalInstructions.textContent = recipe.instructions || 'No instructions available';

    //show modal and overlay
    modal.classList.add('show-modal');
    modalOverlay.classList.add('show-modal');

    //prevent background scroll
    document.bidy.style.overflow = 'hidden';

    //close modal when close button is clicked
    closeModalBtn.addEventListener('click', closeModal);

}

//close modal
function closeModal() {
    const modal = document.getElementById('recipeModal');
    const modalOverlay = document.getElementById('modalOverlay');

    if (modal && modalOverlay) {
        modal.classList.remove('show-modal');
        modalOverlay.classList.remove('show-modal');
        document.body.style.overflow = 'auto';
    }
}

//close modal when close button or overlay is clicked
document.addEventListener('DOMContentLoaded', function () {
    const closeModalBtn = document.querySelector('.close-btn');
    const modalOverlay = document.getElementById('modalOverlay');

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }
});

//Save recipe to localStorage
function saveRecipe(recipe) {
    let recipes = loadRecipes();
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    renderRecipes(recipes);
}

//Main functionality
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navList = document.getElementById('navList');
    const recipeForm = document.getElementById('recipeForm');
    const searchInput = document.getElementById('searchInput');

    //Toggle mobile menu
    if (menuIcon && navList) {
        menuIcon.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    //Render recipes on page load
    renderRecipes(loadRecipes());

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('view-recipe-btn')) {
            const recipeName = event.target.getAttribute('data-name');
            const recipe = loadRecipes().find(r => r.name === recipeName);
            if (recipe) {
                openModal(recipe);
            }
        }
    });

    //Search functionality
    if (searchInput) {
        let debounceTimeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                const searchTerm = searchInput.value.trim().toLowerCase();
                const filteredRecipes = loadRecipes().filter(recipe =>
                    recipe.name.toLowerCase().includes(searchTerm)
                );
                renderRecipes(filteredRecipes);
            }, 300);
        });
    }

    //Recipe form submission
    if (recipeForm) {
        recipeForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const recipeName = document.getElementById('recipeName').value.trim();
            const recipeImage = document.getElementById('recipeImage').value.trim() || 'default.jpg';
            const recipeIngredients = document.getElementById('recipeIngredients').value.trim();
            const recipeInstructions = document.getElementById('recipeInstructions').value.trim();

            if (!recipeName || !recipeIngredients || !recipeInstructions) {
                alert('Please fill in all fields.');
                return;
            }

            const recipe = {
                name: recipeName,
                image: recipeImage,
                ingredients: recipeIngredients,
                instructions: recipeInstructions,
                link: `#${recipeName.toLowerCase().replace(/ /g, '-')}`
            };

            saveRecipe(recipe);
            recipeForm.reset();
            alert('Recipe submitted successfully!');
        });
    }

    //Highlight current page link on load
    const navLinks = document.querySelectorAll('.nav-list li a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    //Highlight the clicked link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    //Scroll-based highlighting (only for pages with sections)
    if (document.querySelector('section[id]')) {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
});





