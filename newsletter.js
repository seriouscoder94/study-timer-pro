// Initialize Firestore
const db = firebase.firestore();

// Handle newsletter signup
async function handleNewsletterSignup(event) {
    event.preventDefault();
    
    const email = document.getElementById('newsletter-email').value;
    const timestamp = new Date().toISOString();
    
    try {
        // Add to Firestore
        await db.collection('subscribers').add({
            email: email,
            signupDate: timestamp
        });
        
        alert('Thank you for subscribing!');
        document.getElementById('newsletter-form').reset();
    } catch (error) {
        console.error('Error adding subscriber: ', error);
        alert('There was an error. Please try again.');
    }
}

// Admin login
async function adminLogin() {
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        document.getElementById('admin-section').style.display = 'block';
        document.getElementById('admin-login').style.display = 'none';
        viewSubscribers();
    } catch (error) {
        alert('Invalid login credentials');
        console.error('Login error:', error);
    }
}

// View subscribers
async function viewSubscribers() {
    if (!firebase.auth().currentUser) {
        alert('Please log in as admin first');
        return;
    }

    try {
        const snapshot = await db.collection('subscribers')
            .orderBy('signupDate', 'desc')
            .get();
        
        const subscriberList = document.getElementById('subscriber-list');
        subscriberList.innerHTML = '';
        
        snapshot.forEach((doc) => {
            const data = doc.data();
            const li = document.createElement('li');
            li.textContent = `${data.email} - Signed up on: ${new Date(data.signupDate).toLocaleString()}`;
            subscriberList.appendChild(li);
        });
    } catch (error) {
        console.error('Error getting subscribers: ', error);
        alert('Error loading subscribers');
    }
}

// Logout function
function adminLogout() {
    firebase.auth().signOut().then(() => {
        document.getElementById('admin-section').style.display = 'none';
        document.getElementById('admin-login').style.display = 'block';
    }).catch((error) => {
        console.error('Logout error:', error);
    });
}

// Check auth state on page load
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('admin-section').style.display = 'block';
        document.getElementById('admin-login').style.display = 'none';
        viewSubscribers();
    } else {
        document.getElementById('admin-section').style.display = 'none';
        document.getElementById('admin-login').style.display = 'block';
    }
});
