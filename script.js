var dmg = 0
var rof = 0
var rof = 0
var rld = 0
var dps = 0
function find_variables() {
    dmg = parseInt(prompt("Damage per Bullet:"));
    rof = parseInt(prompt("Rate of Fire:"));
    cap = parseInt(prompt("Clip Capacity:"));
    rld = parseInt(prompt("Reload Time:"));
    calculate_dps()
}

function calculate_dps() {
    dps = (dmg * cap) / ((cap / rof) + rld);
    console.log(dps);
    alert(dps);
}
