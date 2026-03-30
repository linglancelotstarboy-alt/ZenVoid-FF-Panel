// =====================
// DATABASE
// =====================
let db = JSON.parse(localStorage.getItem("zenDB")) || {
  users: 0,
  chats: [],
  names: {}
};

if(!localStorage.getItem("visited")){
  db.users++;
  localStorage.setItem("visited", true);
}

// =====================
// PANEL + VERIFY
// =====================
function mainAccess(){
  document.getElementById("panel").style.display="block";

  let text = encodeURIComponent("Bang unlock FF Beta dong 🔥");
  window.open("https://wa.me/6281991000991?text="+text);
}

// =====================
// LINK
// =====================
function openAPK(){
  window.open("https://app.khaddavi.net/aplikasi-edit-foto-android-gratis-mengedit-foto-dengan-efek-fisheye/");
}
function openKipas(){
  window.open("https://app.khaddavi.net/game-android-offline-terbaik-untuk-memasak-rasakan-sensasi-menjadi-koki-profesional/");
}

// =====================
// VIP
// =====================
function vipLogin(){
  let pass = prompt("Password VIP:");
  if(pass==="FFbeta"||pass==="kipas"||pass==="Zen"){
    window.open("https://www.mediafire.com/file/ikoi50s5rglkphc/localconfig.json/file");
  } else {
    alert("❌ Salah");
  }
}

// =====================
// AI CHAT
// =====================
function sendMessage(){
  let input = document.getElementById("userInput");
  let chatBox = document.getElementById("chatBox");

  let text = input.value;
  if(!text) return;

  let lower = text.toLowerCase();

  chatBox.innerHTML += `<p>🧑: ${text}</p>`;

  let reply = smartReply(lower, text);

  chatBox.innerHTML += `<p>🤖: ${reply}</p>`;

  db.chats.push({u:text, b:reply});
  localStorage.setItem("zenDB", JSON.stringify(db));

  input.value="";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// =====================
// AI LOGIC
// =====================
function smartReply(lower, original){

  if(lower.includes("password")){
    return "Password itu rahasia 🔐";
  }

  if(lower.includes("nama saya")){
    let nama = original.split(" ").pop();
    db.names["user"] = nama;
    return "Aku ingat nama kamu " + nama;
  }

  if(lower.includes("siapa aku")){
    return db.names["user"]
      ? "Kamu adalah " + db.names["user"]
      : "Aku belum tahu nama kamu";
  }

  if(lower.includes("halo")){
    return db.names["user"]
      ? "Halo " + db.names["user"]
      : "Halo 👋";
  }

  if(lower.includes("ff")){
    return "Klik logo Z untuk menu FF";
  }

  if(lower.includes("vip")){
    return "VIP adalah akses premium 🔐";
  }

  if(lower.includes("download")){
    return "Download ada di menu FF";
  }

  return "Gunakan menu yang tersedia 👍";
}

// =====================
// ADMIN
// =====================
function openAdmin(){
  let pass = prompt("Password Admin:");
  if(pass !== "ZENADMIN"){
    alert("❌ Ditolak");
    return;
  }

  let panel = document.getElementById("admin");
  panel.innerHTML = `
    <h3>ADMIN</h3>
    <p>User: ${db.users}</p>
    <p>Chat: ${db.chats.length}</p>
    <button onclick="clearData()">Reset</button>
  `;
}

// RESET
function clearData(){
  localStorage.clear();
  location.reload();
}