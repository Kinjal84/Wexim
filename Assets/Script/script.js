function openNav(width) {
    document.getElementById('mySidenav').style.width = `${width}%`;
}


// function openNav() {
//     document.getElementById("mySidenav").style.width = "40%";
// }

function closeNav(width) {
    document.getElementById("mySidenav").style.width = `${width}%`;
}


function clickDisplayNone() {
    document.getElementById("mySidenav").style.width = "0";
}

window.onscroll = () => {
    const nav = document.getElementById('navbar');
    if (this.scrollY <= 300) {
        nav.className = 'navbar';
    } else {
        nav.className = 'nav-scroll';
    }

    const top = document.getElementById('scroll-arrow');
    if (this.scrollY <= 500) {
        top.style.display = 'none';
    } else {
        top.style.display = 'block';
    }
}