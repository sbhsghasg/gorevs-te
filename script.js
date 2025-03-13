document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Şifre kontrolü
    if (password !== confirmPassword) {
        alert("Şifreler uyuşmuyor!");
        return;
    }

    // Kayıt işlemi başarılı
    alert('Kayıt başarılı!');

    // Kayıt formunu gizle ve görev listesi kısmını göster
    document.querySelector('.signup-box').style.display = 'none';
    document.getElementById('tasks-box').style.display = 'block';
});

document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Yeni görev ekleme
        const li = document.createElement('li');
        li.textContent = taskText;

        // Silme butonu ekleme
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Sil';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('task-list').appendChild(li);

        // Input'u temizle
        taskInput.value = '';
    } else {
        alert("Lütfen geçerli bir görev girin.");
    }
});
