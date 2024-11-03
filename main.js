let currentSlide = 0;
let startX = 0;
let endX = 0;

// Function to load the onboarding screen
function loadOnboardingScreen() {
    const splashScreen = document.getElementById('splash-screen');
    const onboardingScreen = document.getElementById('onboarding-screen');

    splashScreen.style.display = 'none'; // Hide the splash screen
    onboardingScreen.style.display = 'block'; // Show the onboarding screen
}

// Function to show slides in the onboarding screen
function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const getStartedBtn = document.querySelector('.get-started-btn');

    currentSlide = index < 0 ? 0 : index >= dots.length ? dots.length - 1 : index;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`; // Move slides horizontally

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide); // Update dot indicators
    });

    // Show the "Get Started" button only on the third slide
    if (currentSlide === 2) {
        getStartedBtn.classList.add('show-btn'); // Show the button
    } else {
        getStartedBtn.classList.remove('show-btn'); // Hide the button
    }
}

// Add event listeners to dots
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Function to handle touchstart event
function handleTouchStart(event) {
    startX = event.touches[0].clientX; // Record the starting touch point
}

// Function to handle touchmove event
function handleTouchMove(event) {
    endX = event.touches[0].clientX; // Update the touch point as the user moves
}

// Function to handle touchend event
function handleTouchEnd() {
    const threshold = 50; // Minimum swipe distance to trigger a slide change

    if (startX - endX > threshold) {
        // Swipe left (next slide)
        showSlide(currentSlide + 1);
    } else if (endX - startX > threshold) {
        // Swipe right (previous slide)
        showSlide(currentSlide - 1);
    }
}

// Attach touch event listeners to the slides container
const slidesContainer = document.querySelector('.slides');
slidesContainer.addEventListener('touchstart', handleTouchStart);
slidesContainer.addEventListener('touchmove', handleTouchMove);
slidesContainer.addEventListener('touchend', handleTouchEnd);

// Show onboarding screen after splash screen
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = 0;

        splashScreen.addEventListener('transitionend', function() {
            loadOnboardingScreen(); // Load the onboarding screen after splash
        }, {
            once: true
        });
    }, 300); // Delay for the splash screen
});

// Function to load the Create Account screen
function loadCreateAccountScreen() {
    const onboardingScreen = document.getElementById('onboarding-screen');
    const createAccountScreen = document.getElementById('create-account-screen');

    onboardingScreen.style.display = 'none'; // Hide the onboarding screen
    createAccountScreen.style.display = 'block'; // Show the create account screen
}

// Function to go back to the third slide of the onboarding screen
function goToOnboardingSlide3() {
    const onboardingScreen = document.getElementById('onboarding-screen');
    const createAccountScreen = document.getElementById('create-account-screen');

    createAccountScreen.style.display = 'none'; // Hide the create account screen
    onboardingScreen.style.display = 'block'; // Show the onboarding screen
    showSlide(2); // Ensure the third slide is visible
}

// Add event listener to the "Get Started" button
document.querySelector('.get-started-btn').addEventListener('click', function(event) {
    event.preventDefault();
    loadCreateAccountScreen();
});

// Add event listener to the back arrow
document.getElementById('back-arrow').addEventListener('click', function() {
    goToOnboardingSlide3();
});

// Function to load the Add Card screen
function loadAddCardScreen() {
    const createAccountScreen = document.getElementById('create-account-screen');
    const addCardScreen = document.getElementById('add-card-screen');

    createAccountScreen.style.display = 'none'; // Hide the create account screen
    addCardScreen.style.display = 'block'; // Show the add card screen
}

// Function to go back to the Create Account screen
function goToCreateAccountScreen() {
    const addCardScreen = document.getElementById('add-card-screen');
    const createAccountScreen = document.getElementById('create-account-screen');

    addCardScreen.style.display = 'none'; // Hide the add card screen
    createAccountScreen.style.display = 'block'; // Show the create account screen
}

// Add event listener to the 'Create Account' button
document.querySelector('.create-account-submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    loadAddCardScreen();
});

// Add event listener to the back arrow in the Add Card screen
document.getElementById('back-arrow-add-card').addEventListener('click', function() {
    goToCreateAccountScreen();
});

// Function to load the Add Card Information screen
function loadAddCardInfoScreen() {
    const addCardScreen = document.getElementById('add-card-screen');
    const addCardInfoScreen = document.getElementById('add-card-info-screen');

    addCardScreen.style.display = 'none'; // Hide the add card screen
    addCardInfoScreen.style.display = 'block'; // Show the add card info screen
}

// Function to go back to the Add Card screen
function goToAddCardScreen() {
    const addCardInfoScreen = document.getElementById('add-card-info-screen');
    const addCardScreen = document.getElementById('add-card-screen');

    addCardInfoScreen.style.display = 'none'; // Hide the add card info screen
    addCardScreen.style.display = 'block'; // Show the add card screen
}

// Add event listener to the 'Agree and Continue' button
document.querySelector('.agree-continue-btn').addEventListener('click', function(event) {
    event.preventDefault();
    loadAddCardInfoScreen();
});

// Add event listener to the back arrow in the Add Card Info screen
document.getElementById('back-arrow-add-card-info').addEventListener('click', function() {
    goToAddCardScreen();
});

// Function to load the Home screen
function loadHomeScreen() {
    const addCardInfoScreen = document.getElementById('add-card-info-screen');
    const homeScreen = document.getElementById('home-screen');

    addCardInfoScreen.style.display = 'none'; // Hide the add card info screen
    homeScreen.style.display = 'block'; // Show the home screen
}

// Add event listener to the 'Add and Continue' button
document.querySelector('.add-card-submit-btn').addEventListener('click', function(event) {
    event.preventDefault();
    loadHomeScreen();
});

// Function to rotate the Add Meal Button and toggle the pop-up window
document.querySelector('.add-meal-button').addEventListener('click', function() {
    const addMealButton = document.querySelector('.add-meal-button');
    const mealPlanPopup = document.querySelector('.meal-plan-popup');

    // Toggle the 'rotated' class to rotate the button and toggle pop-up visibility
    if (addMealButton.classList.contains('rotated')) {
        addMealButton.classList.remove('rotated');
        mealPlanPopup.classList.add('hidden'); // Hide the pop-up window
    } else {
        addMealButton.classList.add('rotated');
        mealPlanPopup.classList.remove('hidden'); // Show the pop-up window
    }
});

// Function to load the 'Create your meal plan' screen
function loadCreateMealPlanScreen() {
    const homeScreen = document.getElementById('home-screen');
    const createMealPlanScreen = document.getElementById('create-meal-plan-screen');
    const addMealButton = document.querySelector('.add-meal-button');
    const mealPlanPopup = document.querySelector('.meal-plan-popup');

    // Hide home screen, pop-up window, and reset the button
    homeScreen.style.display = 'none';
    mealPlanPopup.classList.add('hidden');
    addMealButton.classList.remove('rotated');

    // Show create meal plan screen
    createMealPlanScreen.style.display = 'block';
}

// Add event listener to the 'Create new meal plan' popup option
document.querySelector('.popup-option.create').addEventListener('click', function() {
    loadCreateMealPlanScreen();
});

// Add event listener to the back arrow to go back to the Home screen
document.getElementById('back-arrow-create-meal').addEventListener('click', function() {
    const createMealPlanScreen = document.getElementById('create-meal-plan-screen');
    const homeScreen = document.getElementById('home-screen');

    createMealPlanScreen.style.display = 'none';
    homeScreen.style.display = 'block';
});

// Select all recipe containers and their checkboxes
const recipeContainers = document.querySelectorAll('.recipe-container');

recipeContainers.forEach(container => {
    const checkbox = container.querySelector('.recipe-checkbox');
    const recipeName = container.querySelector('.recipe-name');

    checkbox.addEventListener('change', () => {
        // Toggle the 'selected' class based on the checkbox's state
        if (checkbox.checked) {
            container.classList.add('selected'); // Add background and text color
        } else {
            container.classList.remove('selected'); // Reset background and text color
        }
    });
});

const recipesData = {
    recipe1: {
        name: "Mapo Tofu",
        ingredients: [{
                name: "Tofu",
                unit: "450g"
            },
            {
                name: "Doubanjiang",
                unit: "1 bottle"
            },
            {
                name: "Fermented Black Beans",
                unit: "1 bottle"
            },
            {
                name: "Minced Beef",
                unit: "100g"
            }
        ]
    },
    recipe2: {
        name: "Laksa",
        ingredients: [{
                name: "King Prawns",
                unit: "8"
            },
            {
                name: "Fish Sauce",
                unit: "1 bottle"
            },
            {
                name: "Coconut Milk",
                unit: "400ml"
            },
            {
                name: "Cooking Oil",
                unit: "1 bottle"
            },
            {
                name: "Chicken Stock",
                unit: "480ml"
            },
            {
                name: "Dried Chillies",
                unit: "15"
            },
            {
                name: "Garlic",
                unit: "8 cloves"
            },
            {
                name: "Ginger",
                unit: "1"
            },
            {
                name: "Vermicelli Rice Noodles",
                unit: "200g"
            },
            {
                name: "Bean Sprouts",
                unit: "100g"
            },
            {
                name: "Fish Cake",
                unit: "1"
            },
            {
                name: "Cockles",
                unit: "8"
            },
            {
                name: "Laksa Leaves",
                unit: "1 packet"
            },
            {
                name: "Chilli Paste",
                unit: "1 bottle"
            }
        ]
    },
    recipe3: {
        name: "Spring Rolls",
        ingredients: [{
                name: "Cooking Oil",
                unit: "1 bottle"
            },
            {
                name: "Garlic",
                unit: "2 cloves"
            },
            {
                name: "Minced Pork",
                unit: "400g"
            },
            {
                name: "Dried Shiitake Mushrooms",
                unit: "6"
            },
            {
                name: "Carrot",
                unit: "1"
            },
            {
                name: "Shredded Green Cabbage",
                unit: "1 packet"
            },
            {
                name: "Corn Flour",
                unit: "1 packet"
            },
            {
                name: "Oyster Sauce",
                unit: "1 bottle"
            },
            {
                name: "Soy Sauce",
                unit: "1 bottle"
            },
            {
                name: "Spring Roll Wrappers",
                unit: "15 to 20"
            },
            {
                name: "Apple Cider Vinegar",
                unit: "1 bottle"
            },
            {
                name: "Brown Sugar",
                unit: "1 packet"
            },
            {
                name: "Tomato Ketchup",
                unit: "1 bottle"
            }
        ]
    }
};


// Select the 'Preview Groceries' button
const previewButton = document.querySelector('.preview-button');

// Function to gather selected recipes and display their ingredients
previewButton.addEventListener('click', () => {
    // Array to store selected recipes
    const selectedRecipes = [];

    // Loop through each recipe container to check if its checkbox is selected
    recipeContainers.forEach(container => {
        const checkbox = container.querySelector('.recipe-checkbox');
        const recipeId = checkbox.getAttribute('data-recipe-id'); // Get the data-recipe-id attribute

        // If the checkbox is checked, add the recipe's data to the selectedRecipes array
        if (checkbox.checked && recipesData[recipeId]) {
            selectedRecipes.push(recipesData[recipeId]);
        }
    });

    // Check if there are selected recipes and proceed to the preview screen
    if (selectedRecipes.length > 0) {
        loadPreviewGroceriesScreen(selectedRecipes); // Call function to load the preview screen
    } else {
        alert("Please select at least one recipe to preview groceries."); // Alert if no recipe is selected
    }
});

// Function to set up back navigation for the back-arrow
function setupBackArrowListener() {
    const backArrowPreview = document.getElementById('back-arrow-preview');

    backArrowPreview.addEventListener('click', () => {
        // Hide the Preview Groceries screen
        document.getElementById('preview-groceries-screen').style.display = 'none';

        // Show the Create Your Meal Plan screen
        document.getElementById('create-meal-plan-screen').style.display = 'block';
    });
}

let selectedRecipes = []; // Global variable to store selected recipes

function loadPreviewGroceriesScreen(recipes) {
    selectedRecipes = recipes;

    // Hide the current 'Create your meal plan' screen
    document.getElementById('create-meal-plan-screen').style.display = 'none';

    // Show the 'Preview Groceries' screen
    const previewScreen = document.getElementById('preview-groceries-screen');
    previewScreen.style.display = 'block';

    // Select the dedicated content area for recipes
    const recipeContent = document.getElementById('recipe-content');

    // Clear any existing content in the recipe content area
    recipeContent.innerHTML = '';

    // Add selected recipes and their ingredients to the preview screen
    recipes.forEach((recipe, recipeIndex) => {
        // Create a container for each recipe
        const recipeContainer = document.createElement('div');
        recipeContainer.classList.add('recipe-preview');

        // Recipe name
        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.name;
        recipeContainer.appendChild(recipeTitle);

        // Ingredients list
        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach((ingredient, index) => {
            const listItem = document.createElement('li');
            listItem.style.display = 'flex';
            listItem.style.alignItems = 'center';
            listItem.style.justifyContent = 'space-between';
            listItem.style.paddingBottom = '12px';

            if (index < recipe.ingredients.length - 1) {
                listItem.style.borderBottom = "1px solid #ECECEC";
            }

            // Ingredient details
            const ingredientDetails = document.createElement('div');
            ingredientDetails.style.display = 'flex';
            ingredientDetails.style.flexDirection = 'column';

            // Ingredient name
            const ingredientName = document.createElement('span');
            ingredientName.textContent = ingredient.name;
            ingredientName.style.display = 'block';
            ingredientName.style.marginBottom = '12px';
            ingredientDetails.appendChild(ingredientName);

            // Unit of measurement
            const ingredientUnit = document.createElement('div');
            ingredientUnit.textContent = ingredient.unit;
            ingredientUnit.style.fontSize = "16px";
            ingredientUnit.style.color = "#A6A6A6";
            ingredientDetails.appendChild(ingredientUnit);

            listItem.appendChild(ingredientDetails);

            // Pencil icon button
            const editButton = document.createElement('img');
            editButton.src = "img/pencil-icon.png";
            editButton.alt = "Edit";
            editButton.style.width = "24px";
            editButton.style.height = "25px";
            editButton.style.cursor = "pointer";

            // Add click event specifically for the first ingredient of Recipe 1
            if (recipeIndex === 0 && index === 0) {
                editButton.addEventListener('click', () => {
                    showBottomSheet();
                });
            }

            listItem.appendChild(editButton);
            ingredientsList.appendChild(listItem);
        });

        recipeContainer.appendChild(ingredientsList);
        recipeContent.appendChild(recipeContainer);
    });

    // Re-setup the back-arrow listener after content update
    setupBackArrowListener();
}

// Function to show the bottom sheet
function showBottomSheet() {
    const bottomSheet = document.getElementById('bottom-sheet');
    bottomSheet.style.display = 'flex';
    bottomSheet.classList.add('show');
}

// Function to hide the bottom sheet
function hideBottomSheet() {
    const bottomSheet = document.getElementById('bottom-sheet');
    bottomSheet.classList.remove('show');

    // Delay hiding overlay to allow sliding animation to finish
    setTimeout(() => {
        bottomSheet.style.display = 'none';
    }, 300);
}

// Function to hide the bottom sheet when clicking outside of it
document.getElementById('bottom-sheet').addEventListener('click', (e) => {
    if (e.target.id === 'bottom-sheet') { // Only hide if clicking on the overlay
        const bottomSheet = document.getElementById('bottom-sheet');
        bottomSheet.style.display = 'none';
        bottomSheet.classList.remove('show');
    }
});

// Function to populate the Shopping List screen with selected recipes
function populateShoppingList() {
    const shoppingListRecipes = document.getElementById('shopping-list-recipes');
    shoppingListRecipes.innerHTML = ''; // Clear any existing content

    selectedRecipes.forEach(recipe => {
        const recipeContainer = document.createElement('div');
        recipeContainer.classList.add('recipe-preview');

        // Recipe name
        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.name;
        recipeContainer.appendChild(recipeTitle);

        // Ingredients list
        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach((ingredient, index) => {
            const listItem = document.createElement('li');
            listItem.style.display = 'flex';
            listItem.style.alignItems = 'center';
            listItem.style.justifyContent = 'space-between';
            listItem.style.paddingBottom = '12px';

            // Add border style for all except the last ingredient
            if (index < recipe.ingredients.length - 1) {
                listItem.style.borderBottom = "1px solid #ECECEC";
            }

            // Left section with checkbox and ingredient name
            const leftSection = document.createElement('div');
            leftSection.style.display = 'flex';
            leftSection.style.flexDirection = 'column';

            // Container for checkbox and name (top row)
            const topRow = document.createElement('div');
            topRow.style.display = 'flex';
            topRow.style.alignItems = 'center';

            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('ingredient-checkbox');
            checkbox.style.marginRight = '16px'; // Spacing between checkbox and name
            topRow.appendChild(checkbox);

            // Ingredient name styling
            const ingredientName = document.createElement('span');
            ingredientName.textContent = ingredient.name;
            ingredientName.style.fontSize = '20px';
            ingredientName.style.fontWeight = '400';
            ingredientName.style.marginRight = 'auto'; // Pushes the name leftward within top row
            topRow.appendChild(ingredientName);

            // Add top row (checkbox and name) to the left section
            leftSection.appendChild(topRow);

            // Unit of measurement styling
            const ingredientUnit = document.createElement('div');
            ingredientUnit.textContent = ingredient.unit;
            ingredientUnit.style.fontSize = "16px";
            ingredientUnit.style.color = "#A6A6A6";
            ingredientUnit.style.marginTop = '12px'; // Small gap between name and unit
            leftSection.appendChild(ingredientUnit);

            listItem.appendChild(leftSection); // Add to listItem

            const editButton = document.createElement('img');
            editButton.src = "img/pencil-icon.png";
            editButton.alt = "Edit";
            editButton.style.width = "24px";
            editButton.style.height = "25px";
            editButton.style.cursor = "pointer";

            listItem.appendChild(editButton);
            ingredientsList.appendChild(listItem);
        });

        recipeContainer.appendChild(ingredientsList);
        shoppingListRecipes.appendChild(recipeContainer);
    });

    initializeCheckboxMonitoring();
}

function initializeCheckboxMonitoring() {
    monitorIngredientCheckboxes();
}

// Function to monitor checkboxes and redirect if all are checked
function monitorIngredientCheckboxes() {
    const checkboxes = document.querySelectorAll('#shopping-list-recipes .ingredient-checkbox');

    // Log number of checkboxes found to ensure that they are correctly selected
    console.log(`Found ${checkboxes.length} checkboxes to monitor`);

    // Add event listener for each checkbox to check if all are selected
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            console.log(`Checkbox ${index + 1} changed to ${checkbox.checked}`);
            checkAllCheckboxes();
        });
    });
}

// Function to check if all checkboxes are checked
function checkAllCheckboxes() {
    const checkboxes = document.querySelectorAll('#shopping-list-recipes .ingredient-checkbox');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    console.log(`All checkboxes checked: ${allChecked}`);

    if (allChecked) {
        // Redirect to home screen
        document.getElementById('shopping-list-screen').style.display = 'none';
        document.getElementById('home-screen').style.display = 'block';

        // Add the red circle to the Track nav-option
        addTrackNotification();
    }
}

// Function to add red circle notification to the Track nav-option
function addTrackNotification() {
    const trackNavOption = document.querySelector('.bottom-nav .track-nav-option');

    // Check if the notification circle already exists
    if (!trackNavOption.querySelector('.notification-circle')) {
        // Create the red circle
        const notificationCircle = document.createElement('div');
        notificationCircle.classList.add('notification-circle');
        trackNavOption.style.position = 'relative';
        trackNavOption.appendChild(notificationCircle);
        console.log("Red notification circle added to Track nav-option");
    }
}

// Event listener for 'Add recipes to plan' button
document.querySelector('.add-recipes-button').addEventListener('click', () => {
    // Populate the Shopping List screen with selected recipes
    populateShoppingList();

    // Show the Shopping List screen and hide the Preview Groceries screen
    document.getElementById('preview-groceries-screen').style.display = 'none';
    document.getElementById('shopping-list-screen').style.display = 'block';
});



// Function to toggle the add-groceries-button rotation and pop-up
function toggleAddGroceriesPopup() {
    const addGroceriesButton = document.querySelector('.add-groceries-button');
    const groceriesPopup = document.getElementById('groceries-popup');

    // Toggle rotation effect
    addGroceriesButton.classList.toggle('active');

    // Toggle pop-up visibility
    if (addGroceriesButton.classList.contains('active')) {
        groceriesPopup.style.display = 'block'; // Show the pop-up
    } else {
        groceriesPopup.style.display = 'none'; // Hide the pop-up
    }
}

// Event listener for add-groceries-button
document.querySelector('.add-groceries-button').addEventListener('click', toggleAddGroceriesPopup);

// Function to show the Extra Groceries Bottom Sheet with slide-up animation
function showExtraGroceriesBottomSheet() {
    const bottomSheetOverlay = document.getElementById('extra-groceries-bottom-sheet-overlay');
    const bottomSheet = document.getElementById('extra-groceries-bottom-sheet');
    bottomSheetOverlay.style.display = 'flex'; // Show the overlay
    setTimeout(() => {
        bottomSheet.style.transform = 'translateY(0)'; // Slide up the bottom sheet
    }, 10); // Small delay to allow display to update
}

// Function to hide the Extra Groceries Bottom Sheet with slide-down animation
function hideExtraGroceriesBottomSheet() {
    const bottomSheetOverlay = document.getElementById('extra-groceries-bottom-sheet-overlay');
    const bottomSheet = document.getElementById('extra-groceries-bottom-sheet');
    bottomSheet.style.transform = 'translateY(100%)'; // Slide down the bottom sheet
    setTimeout(() => {
        bottomSheetOverlay.style.display = 'none'; // Hide the overlay
    }, 300);
}

// Event listener for the .green-container-add-button
document.querySelector('.green-container-add-button').addEventListener('click', showExtraGroceriesBottomSheet);

// Function to show the alert box with slide-down and slide-up animations
function showAlertBox() {
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'flex'; // Make the alert box visible

    // Slide down the alert box
    setTimeout(() => {
        alertBox.style.top = '0px'; // Slide down to visible position
    }, 10); // Small delay to trigger the transition

    // Slide up after 2 seconds
    setTimeout(() => {
        alertBox.style.top = '-40px'; // Slide up to hidden position
    }, 2000);

    // Hide the alert box completely after sliding up
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2400);
}

// Modify the handleExtraGroceriesDone function to call showAlertBox
function handleExtraGroceriesDone() {
    // Slide down the bottom sheet
    const bottomSheetOverlay = document.getElementById('extra-groceries-bottom-sheet-overlay');
    const bottomSheet = document.getElementById('extra-groceries-bottom-sheet');
    bottomSheet.style.transform = 'translateY(100%)'; // Slide down animation
    setTimeout(() => {
        bottomSheetOverlay.style.display = 'none'; // Hide the overlay
        showAlertBox(); // Show alert box after bottom sheet hides
    }, 300);

    // Replace .shopping-list-green-container with new content
    const shoppingListContainer = document.querySelector('.shopping-list-green-container');
    const newContainer = document.createElement('div');
    newContainer.classList.add('shopping-list-replacement-container');

    // Title at the top of the new container
    const title = document.createElement('h3');
    title.classList.add('replacement-title');
    title.textContent = 'Groceries beyond your plan';
    newContainer.appendChild(title);

    // Row with checkbox, item name, and edit icon
    const itemRow = document.createElement('div');
    itemRow.classList.add('replacement-item-row');

    // Checkbox
    const checkbox = document.createElement('div');
    checkbox.classList.add('replacement-checkbox');

    // Item name
    const itemName = document.createElement('span');
    itemName.classList.add('replacement-item-name');
    itemName.textContent = 'Chocolate bar';

    // Edit icon
    const editIcon = document.createElement('img');
    editIcon.src = 'img/pencil-icon.png';
    editIcon.alt = 'Edit';
    editIcon.classList.add('replacement-edit-icon');

    // Append checkbox, item name, and edit icon to itemRow
    itemRow.appendChild(checkbox);
    itemRow.appendChild(itemName);
    itemRow.appendChild(editIcon);
    newContainer.appendChild(itemRow);

    // Unit of measurement below the item row
    const itemUnit = document.createElement('span');
    itemUnit.classList.add('replacement-item-unit');
    itemUnit.textContent = '20g';
    newContainer.appendChild(itemUnit);

    // Replace the old container with the new one
    shoppingListContainer.replaceWith(newContainer);
}

// Function to replace specific content in the Extra Groceries Bottom Sheet when Continue is pressed
function handleExtraGroceriesContinueButton() {
    // Select the elements to be replaced
    const bottomSheetContent = document.getElementById('extra-groceries-bottom-sheet');
    const extraGroceriesText = document.querySelector('.extra-groceries-text');
    const continueButton = document.querySelector('.continue-button');
    const cancelButton = document.querySelector('.cancel-button');

    // Remove the elements that need to be replaced
    extraGroceriesText.remove();
    continueButton.remove();
    cancelButton.remove();

    // Full-width grey box with "Chocolate Bar" text
    const chocolateBox = document.createElement('div');
    chocolateBox.classList.add('extra-groceries-grey-box', 'extra-groceries-full-width');
    chocolateBox.textContent = 'Chocolate bar';
    bottomSheetContent.appendChild(chocolateBox);

    // Container for the two side-by-side grey boxes
    const sideBySideContainer = document.createElement('div');
    sideBySideContainer.classList.add('extra-groceries-side-by-side-container');

    const box1 = document.createElement('div');
    box1.classList.add('extra-groceries-grey-box');
    box1.textContent = '20';
    sideBySideContainer.appendChild(box1);

    const box2 = document.createElement('div');
    box2.classList.add('extra-groceries-grey-box');
    box2.textContent = 'Grams';
    sideBySideContainer.appendChild(box2);

    // Append side-by-side container to the bottom sheet
    bottomSheetContent.appendChild(sideBySideContainer);

    // 'Done' CTA Button
    const doneButton = document.createElement('button');
    doneButton.classList.add('extra-groceries-button', 'extra-groceries-done-button');
    doneButton.textContent = 'Done';

    // Attach the event listener directly after creating the 'Done' button
    doneButton.addEventListener('click', handleExtraGroceriesDone);

    bottomSheetContent.appendChild(doneButton);
}

// Attach event listener to the 'Continue' button for initial interaction
document.querySelector('.continue-button').addEventListener('click', handleExtraGroceriesContinueButton);

// Event listener for the Track nav-option click
document.querySelector('.track-nav-option').addEventListener('click', () => {
    // Hide the home screen and show the Track Food Waste screen
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('track-food-waste-screen').style.display = 'block';

    // Remove the notification circle from Track nav-option if it exists
    const notificationCircle = document.querySelector('.track-nav-option .notification-circle');
    if (notificationCircle) {
        notificationCircle.remove();
    }
});

// Event listener for the 'Record My Food Waste' button click
document.querySelector('.track-food-action-button').addEventListener('click', () => {
    // Hide the 'Track Food Waste' screen and show the 'Record My Food Waste' screen
    document.getElementById('track-food-waste-screen').style.display = 'none';
    document.getElementById('record-food-waste-screen').style.display = 'block';
});

// Event listener for the 'Record Food Waste' button click
document.querySelector('.record-food-button').addEventListener('click', () => {
    // Hide the 'Record Food Waste' screen and show the 'Calculated Summary' screen
    document.getElementById('record-food-waste-screen').style.display = 'none';
    document.getElementById('calculated-summary-screen').style.display = 'block';
});

// Back arrow navigation for 'Calculated Summary' screen
document.querySelector('.calculated-summary-back-arrow').addEventListener('click', () => {
    // Hide the 'Calculated Summary' screen and show the 'Record Food Waste' screen
    document.getElementById('calculated-summary-screen').style.display = 'none';
    document.getElementById('record-food-waste-screen').style.display = 'block';
});

// Back arrow navigation for 'Record Food Waste' screen
document.querySelector('#record-food-back-arrow').addEventListener('click', () => {
    // Hide the 'Record Food Waste' screen and show the 'Track Food Waste' screen
    document.getElementById('record-food-waste-screen').style.display = 'none';
    document.getElementById('track-food-waste-screen').style.display = 'block';
});

// Select the overlay and bottom sheet elements
const percentageOverlay = document.getElementById('percentage-overlay');
const percentageBottomSheet = document.getElementById('percentage-bottom-sheet');
const bottomSheetDoneButton = document.querySelector('.bottom-sheet-done-button');

// Function to open the bottom sheet with slide-up animation
function openPercentageBottomSheet() {
    percentageOverlay.style.display = 'flex'; // Show overlay
    setTimeout(() => {
        percentageBottomSheet.style.transform = 'translateY(0)';
    }, 10); // Small delay to allow display to apply before transform
}

// Function to close the bottom sheet with slide-down animation
function closePercentageBottomSheet() {
    percentageBottomSheet.style.transform = 'translateY(100%)';
    setTimeout(() => {
        percentageOverlay.style.display = 'none'; // Hide overlay after slide-down
    }, 300);
}

// Add event listener for the first .food-waste-add-icon click
document.querySelector('.food-waste-add-icon').addEventListener('click', openPercentageBottomSheet);

// Add event listener for the 'Done' button to close the bottom sheet
bottomSheetDoneButton.addEventListener('click', closePercentageBottomSheet);

// Event listener for the 'Continue' button in the 'Calculated Summary' screen
document.querySelector('.calculated-summary-continue-button').addEventListener('click', () => {
    // Redirect to #track-food-waste-screen
    document.getElementById('calculated-summary-screen').style.display = 'none';
    document.getElementById('track-food-waste-screen').style.display = 'block';

    // Update the first .track-food-data-container with new image and text
    const firstTrackDataContainer = document.querySelector('.track-food-data-container:first-child');
    const firstTrackDataImg = firstTrackDataContainer.querySelector('.track-food-data-img');
    const firstTrackDataValue = firstTrackDataContainer.querySelector('.track-food-data-value');

    // Replace image source and text for first container
    firstTrackDataImg.src = 'img/filled-bin.png';
    firstTrackDataImg.alt = 'Updated Food Wasted Image';
    firstTrackDataValue.textContent = '0.06 kg';

    // Update the second .track-food-data-container with new image and text
    const secondTrackDataContainer = document.querySelector('.track-food-data-container:nth-child(2)');
    const secondTrackDataImg = secondTrackDataContainer.querySelector('.track-food-data-img');
    const secondTrackDataValue = secondTrackDataContainer.querySelector('.track-food-data-value');

    // Replace image source and text for second container
    secondTrackDataImg.src = 'img/filled-moneyBag.png';
    secondTrackDataImg.alt = 'Updated Money Saved Image';
    secondTrackDataValue.textContent = '$ 8.50';
});

// Event listener for the 'Import Past Meal Plans' option
document.querySelector('.popup-option.import').addEventListener('click', () => {
    // Hide the 'Home' screen and show the 'Past Meal Plans' screen
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('past-meal-plans-screen').style.display = 'block';
});

// Back arrow navigation for 'Past Meal Plans' screen
document.querySelector('.past-meal-back-arrow').addEventListener('click', () => {
    // Hide the 'Past Meal Plans' screen and show the 'Home' screen
    document.getElementById('past-meal-plans-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
});

// Select elements for bottom sheet and buttons
const importRecipeOverlay = document.getElementById('import-recipe-overlay');
const importRecipeBottomSheet = document.getElementById('import-recipe-bottom-sheet');
const applyPreviewButton = document.querySelector('.apply-preview-button');
const importAsIsButton = document.querySelector('.import-as-is-button');
const importRecipeButton = document.querySelector('.past-meal-import-button');
importRecipeButton.disabled = true; // Disable button initially

// Function to open the 'Import Recipe' bottom sheet
function openImportRecipeBottomSheet() {
    importRecipeOverlay.style.display = 'flex';
    setTimeout(() => {
        importRecipeBottomSheet.style.transform = 'translateY(0)';
    }, 10);
}

// Function to close the 'Import Recipe' bottom sheet
function closeImportRecipeBottomSheet() {
    importRecipeBottomSheet.style.transform = 'translateY(100%)';
    setTimeout(() => {
        importRecipeOverlay.style.display = 'none';
    }, 300);
}

// Enable/disable 'Import Recipe' button based on checkbox selection
document.querySelectorAll('.past-meal-recipe-radio').forEach(radio => {
    radio.addEventListener('change', () => {
        importRecipeButton.disabled = !document.querySelector('.past-meal-recipe-radio:checked');
    });
});

// Event listener for 'Import Recipe' button click
importRecipeButton.addEventListener('click', openImportRecipeBottomSheet);

// Event listener for 'Apply' and 'Preview' button
applyPreviewButton.addEventListener('click', () => {
    closeImportRecipeBottomSheet();
    document.getElementById('past-meal-plans-screen').style.display = 'none';
    document.getElementById('preview-groceries-v2-screen').style.display = 'block';
});

// Event listener for 'No, Import As It Is' button
importAsIsButton.addEventListener('click', closeImportRecipeBottomSheet);

// Function to check if any checkbox is checked
function updateImportButtonState() {
    const anyChecked = document.querySelector('.past-meal-recipe-container .recipe-checkbox:checked');
    importRecipeButton.disabled = !anyChecked;
}

// Add event listener to each checkbox to monitor changes
document.querySelectorAll('.past-meal-recipe-container .recipe-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', updateImportButtonState);
});

// Event listener for the back arrow in the 'Preview Groceries V2' screen
document.querySelector('.preview-v2-back-arrow').addEventListener('click', () => {
    // Hide the current 'Preview Groceries V2' screen
    document.getElementById('preview-groceries-v2-screen').style.display = 'none';

    // Show the previous 'Past Meal Plans' screen
    document.getElementById('past-meal-plans-screen').style.display = 'block';
});

// Event listener for the Home navigation option in the 'Track Food Waste' screen
document.querySelector('.home-nav-option').addEventListener('click', () => {
    // Hide the 'Track Food Waste' screen
    document.getElementById('track-food-waste-screen').style.display = 'none';

    // Show the 'Home' screen
    document.getElementById('home-screen').style.display = 'block';
});

// Event listener for the Home navigation option in 'Shopping List' screen
document.querySelector('.shopping-list-home-nav-option').addEventListener('click', () => {
    // Hide the 'Shopping List' screen
    document.getElementById('shopping-list-screen').style.display = 'none';

    // Show the 'Home' screen
    document.getElementById('home-screen').style.display = 'block';
});