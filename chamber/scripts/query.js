const urlParams = new URLSearchParams(window.location.search);
        document.getElementById('first-name').textContent = urlParams.get('first-name');
        document.getElementById('last-name').textContent = urlParams.get('last-name');
        document.getElementById('email').textContent = urlParams.get('email');
        document.getElementById('phone').textContent = urlParams.get('phone');
        document.getElementById('organization').textContent = urlParams.get('organization');
        document.getElementById('membership-level').textContent = urlParams.get('membership-level');
        document.getElementById('description').textContent = urlParams.get('description');