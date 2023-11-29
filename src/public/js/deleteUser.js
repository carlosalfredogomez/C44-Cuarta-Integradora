const deleteUserButtons = document.querySelectorAll('#deleteUser')

deleteUserButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userId = button.dataset.user;

        fetch(`http://localhost:8080/api/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Usuario borrado');
                console.log('Response is:', data);
                if (data.status === 200) {
                    Toastify({
                        text: "User deleted.",
                        duration: 3000,
                        newWindow: false,
                        close: true,
                        gravity: "bottom", 
                        position: "right", 
                        stopOnFocus: true, 
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function () { } 
                    }).showToast();
                    window.location.reload()
                } else {
                    alert('Something went wrong with the fetch, oh the stench of failure...' + JSON.stringify(data))
                }
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
            });
    });
});




