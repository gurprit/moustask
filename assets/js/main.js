import staffData from './_incs/data.js';

// Selectors
const viewStaffBtn = document.querySelector('[el="staff-btn"]');
const staffListCont = document.querySelector('[el="staff-list"]');

var isPopulated = false;

viewStaffBtn.addEventListener('click', function (event) {
  if (isPopulated === true) { 
    return; 
  }

    staffData.then(values => {

      for (var i = 0, valuesLen = values.length; i < valuesLen; i++) {

        if (values[i] == null ) {
          console.log("no data");
          continue; 
        }

        const staffName = values[i].name;
        const staffOccupation = values[i].occupation;
        const staffTeam = values[i].team;  
        const staffProfile = values[i].img;      
  
        const name = document.createTextNode(staffName);
        const occupation = document.createTextNode(staffOccupation);
        const team = document.createTextNode(staffTeam);
  
        const nameCont = document.createElement("span");
        const occupationCont = document.createElement("span");
        const teamCont = document.createElement("span");     
        const profile = document.createElement("img");            
  
        nameCont.appendChild(name);
        occupationCont.appendChild(occupation);
        teamCont.appendChild(team);
        profile.src=staffProfile;
  
        const li = document.createElement("li");
        li.classList.add("staff-member");
  
        const div = document.createElement("div");
        div.classList.add("staff-member__inner");
  
        li.appendChild(div);
        div.appendChild(profile);
        div.appendChild(nameCont);
        div.appendChild(occupationCont);
        div.appendChild(teamCont);
        
        staffListCont.appendChild(li);

        isPopulated = true;

      }

    });

});




