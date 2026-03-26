# Brew 
https://brewtest.netlify.app/

Brew was mainly build to strenghten my vanilla js understanding and best practices in a real project.

## Technologies

- **Vanilla JavaScript (ES6+)**
- **Vite**
- **SCSS**
- **IndexedDB (Dexie)**
- **Service Workers**

## Features

-  **Progressive Web App**: Install on any device, works offline
-  **Real-time monitoring**: See how much coffeine you currently have in bloodstream
-  **Sleep predictions**: Know exactly when it's safe to sleep
-  **Offline functionality**: Keep tracking even without internet ;)
-  **Personalized tracking**: Daily caffeine recommendations and caffeine half-life calculations based on your profile


## Architecture 

### **Clean and scalable code
- I have tried to follow indrustries best practices in building this app
 

### **MVC Architecture**
- **Model** : State management and business logic
- **Views** : Reausable components for rendering UI
- **Controllers** : Handle user interactions and coordinate between model and views

### **Custom Router**
 Client-side router for navigation without a framework:
- Manages different application states
- Handles route transitions and view updates

## Limitations and future improvements

- Daily caffeine intake and caffeine monitor BOTH resets at midnight
- No custom drinks
- No test implementation
- Simple error handling 














