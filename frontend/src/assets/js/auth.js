document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Registro exitoso');
        window.location.href = 'login.html';
      } else {
        alert(data.error || 'Error en el registro');
      }
    } catch (error) {
      alert('Error en la conexión');
    }
  });
  
  document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Login exitoso');
        localStorage.setItem('token', data.token);
        window.location.href = 'index.html';
      } else {
        alert(data.error || 'Error en el login');
      }
    } catch (error) {
      alert('Error en la conexión');
    }
  });