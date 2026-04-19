const patientForm = document.getElementById('patientForm');
const patientTableBody = document.getElementById('patientTableBody');

// Fungsi memuat data dari LocalStorage
function loadPatients() {
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    patientTableBody.innerHTML = '';
    patients.forEach((patient, index) => {
        const row = `
            <tr>
                <td>${patient.nama}</td>
                <td>${patient.umur}</td>
                <td>${patient.diagnosa}</td>
                <td>
                    <button class="btn-delete" onclick="deletePatient(${index})">Hapus</button>
                </td>
            </tr>
        `;
        patientTableBody.innerHTML += row;
    });
}

// Fungsi menambah data pasien (Create)
patientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;
    const diagnosa = document.getElementById('diagnosa').value;

    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    patients.push({ nama, umur, diagnosa });
    localStorage.setItem('patients', JSON.stringify(patients));
    
    patientForm.reset();
    loadPatients();
});

// Fungsi menghapus data (Delete)
function deletePatient(index) {
    const patients = JSON.parse(localStorage.getItem('patients'));
    patients.splice(index, 1);
    localStorage.setItem('patients', JSON.stringify(patients));
    loadPatients();
}

// Inisialisasi awal
loadPatients();