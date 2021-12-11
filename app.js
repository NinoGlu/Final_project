
function skillsAnimationOnScroll() {
    window.addEventListener("scroll", () => {
        let content = document.querySelector('.skills__list');
        let skills = document.querySelectorAll(".skill");
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.7;

        if(contentPosition < screenPosition) {
            for(let i = 0; i < skills.length; i++) {
                skills[i].classList.add('active');
            }
        }else {
            for(let i = 0; i < skills.length; i++) {
                skills[i].classList.remove('active');
            }
        }
    })
}
skillsAnimationOnScroll()


function showServicesText() {
    let services = document.querySelectorAll(".services-item");

    for(let i = 0; i < services.length; i++){
        services[i].addEventListener("mouseover", function() {
            let servicesItems = this.children;
            servicesItems[0].style.display = "none";
            servicesItems[1].style.display = "block";
        })

        services[i].addEventListener("mouseout", function() {
            let servicesItems = this.children;
            servicesItems[0].style.display = "block";
            servicesItems[1].style.display = "none";
        })


    }
}

showServicesText();











function createFilterForProjects() {

    
    let liItem = document.querySelectorAll(".filter ul li");
    let boxItem = document.querySelectorAll('.project-box');
    let smallScreen = window.matchMedia( "(max-width: 768px)" );

    liItem.forEach(li => {
        li.addEventListener("click", function() {
            liItem.forEach(li => {
                li.className = "";
            })
            li.className = "active";

            let value = li.textContent;
            updatedValue = value.replace(/ /g,"_");
            boxItem.forEach(box => {
                box.style.display = "none";
                
                if(box.getAttribute("data-filter") == updatedValue.toLowerCase() || updatedValue == "All") {
                    box.style.display = "flex";
                    
                    if (smallScreen.matches) {
                        box.style.width = "100%";
                        
                    } else {
                        box.style.width = "calc(100% / 2)";
                    }
                    
                }

                if(updatedValue == "All") {
                    box.style.display = "flex";

                    if (smallScreen.matches) {
                        box.style.width = "100%";
                        
                    } else {
                        box.style.width = "calc(100% / 3)";
                    }
                    
                }
            })
        })

        
    })

}

createFilterForProjects();
 
// Testimonials section
document.getElementById('first_test').addEventListener('click', function () {
    this.classList.add('active');
    document.getElementById('second_test').classList.remove('active');
    document.getElementById('third_test').classList.remove('active');
    document.getElementById('secondTest').classList.add('hidden');
    document.getElementById('thirdTest').classList.add('hidden');
    document.getElementById('firstTest').classList.remove('hidden');
})
document.getElementById('second_test').addEventListener('click', function () {
    this.classList.add('active');
    document.getElementById('first_test').classList.remove('active');
    document.getElementById('third_test').classList.remove('active');
    document.getElementById('secondTest').classList.remove('hidden');
    document.getElementById('thirdTest').classList.add('hidden');
    document.getElementById('firstTest').classList.add('hidden');
})
document.getElementById('third_test').addEventListener('click', function () {
    this.classList.add('active');
    document.getElementById('first_test').classList.remove('active');
    document.getElementById('second_test').classList.remove('active');
    document.getElementById('secondTest').classList.add('hidden');
    document.getElementById('thirdTest').classList.remove('hidden');
    document.getElementById('firstTest').classList.add('hidden');
})


var project_header = document.getElementById("testimonial_show");
var scrollProject = function () {
    var w = window.scrollY;
    if (w >= 1800) {
        project_header.className = "testimonial_flex show_section";
    }
}
window.addEventListener("scroll", scrollProject);





function showRosaText() {
    let rosaTeam = document.querySelectorAll(".rosa-team__item");

    for(let i = 0; i < rosaTeam.length; i++){
        rosaTeam[i].addEventListener("mouseover", function() {
            let rosaTeamItems = this.children;
            rosaTeamItems[0].style.display = "none";
            rosaTeamItems[1].style.display = "flex";
        })

        rosaTeam[i].addEventListener("mouseout", function() {
            let rosaTeamItems = this.children;
            rosaTeamItems[0].style.display = "flex";
            rosaTeamItems[1].style.display = "none";
        })


    }
}
showRosaText();


function sendMessage() {

    document.querySelector('form').addEventListener('submit', function(e) {
        let name = document.querySelector('#name');
        let email = document.querySelector('#email');
        let website = document.querySelector('#website');
        let message = document.querySelector('#message');

        let nameVal = name.value;
        let emailVal = email.value;
        let websiteVal = website.value;
        let messageVal = message.value;

        function sendM(name, email, website, message){
            fetch('http://api.kesho.me/v1/user-test/contact', {
                method: 'POST',
               
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'name=' + encodeURIComponent(name) +'&email=' + encodeURIComponent(email)  +'&website=' + encodeURIComponent(website) +'&message=' + encodeURIComponent(message) 
            })
        }

        sendM(nameVal, emailVal, websiteVal, messageVal);


        name.value = "";
        email.value = "";
        website.value = "";
        message.value = "";

        e.preventDefault();
    });

}

sendMessage()
