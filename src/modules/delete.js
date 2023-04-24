export default function deleteTask () {
    const tableButtons = document.querySelectorAll('.tableButton')
    const popupTask = document.querySelector('#popupTask');
    for (const button of tableButtons) {
       if (popupTask.textContent == button.closest("tr").querySelector(".cells").textContent) {
           const row = button.closest("tr");
           row.remove();
           break;
           
       }
    }
}


