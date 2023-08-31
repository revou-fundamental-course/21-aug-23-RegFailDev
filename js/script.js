var guest = prompt("Mohon ketik nama anda terlebih dahulu","");
document.getElementById("guest").innerHTML = guest;

// Konten
const tombol_profile = document.getElementById('profile_btn');
const tombol_home = document.getElementById('home_btn');
    tombol_home.addEventListener('click', function(){
        document.getElementById('artikel_profile').setAttribute('hidden','');
        document.getElementById('artikel_gambar').removeAttribute('hidden','');
        console.log('tes');
    })
    tombol_profile.addEventListener('click', function(){
        document.getElementById('artikel_profile').removeAttribute('hidden','');
        document.getElementById('artikel_gambar').setAttribute('hidden','');
    })

// FORM
function validasiForm(){
    const nama = document.forms['form_pesan']['input_nama'].value;
    const date = document.forms['form_pesan']['input_date'].value;
    const gender = document.forms['form_pesan']['gender'].value;
    const isi_pesan = document.forms['form_pesan']['input_pesan'].value;
    if(nama == "" || date =="" || gender == "" ){
        document.getElementById('pesan_error').innerHTML = "Mohon isi semua kolom di atas";
        return false;
    }
    
    document.getElementById('output_name').innerHTML = nama;
    document.getElementById('output_date').innerHTML = date;
    document.getElementById('output_gender').innerHTML = gender;
    document.getElementById('output_message').innerHTML = isi_pesan;
    return false;
}
const waktu = new Date ();
document.getElementById('waktu').innerHTML = waktu;
