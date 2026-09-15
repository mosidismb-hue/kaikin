function pesan(){
alert("Terima kasih sudah ingin memesan di KACIWER Cafe ☕");
}

function whatsapp(){

let nomor = "628123456789";

let pesan = "Halo KACIWER Cafe, saya ingin memesan.";

let url = "https://wa.me/"+nomor+"?text="+encodeURIComponent(pesan);

window.open(url);

}